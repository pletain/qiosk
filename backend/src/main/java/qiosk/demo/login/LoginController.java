package qiosk.demo.login;

import java.io.IOException;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import qiosk.demo.domain.login.JWTService;
import qiosk.demo.domain.login.KakaoProfile;
import qiosk.demo.domain.login.LoginResponse;
import qiosk.demo.domain.login.TokenResponse;
import qiosk.demo.domain.member.Member;
import qiosk.demo.domain.member.MemberService;

@Controller
@Slf4j
@RequestMapping("/kakao")
@RequiredArgsConstructor
public class LoginController {

    // private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final JWTService jwtService;

    @Value("${REST_API_KEY}")
    private String REST_API_KEY;
    @Value("${REDIRECT_URI}")
    private String REDIRECT_URI;
    @Value("${CLIENT_SECRET}")
    private String CLIENT_SECRET;

    @GetMapping("/signin")
    @ResponseBody
    public ResponseEntity<LoginResponse> Signin(@RequestHeader(value = "Authorization_code") String code) {
        String Access_token = getToken(code, REST_API_KEY, REDIRECT_URI, CLIENT_SECRET);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders header = new HttpHeaders();
        header.add("Authorization", "Bearer " + Access_token);
        header.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> profilereq = new HttpEntity<>(header);
        ResponseEntity<String> res = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                profilereq,
                String.class);

        KakaoProfile profile = new KakaoProfile();
        ObjectMapper mapper = new ObjectMapper();
        try {
            profile = mapper.readValue(res.getBody(), KakaoProfile.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        String JWT_Token = jwtService.makeJwtToken(profile.getId());

        log.info("profile = {}", profile);
        log.info("profile = {}", profile.getId());

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setAccessToken(JWT_Token);

        if (memberService.getMember(profile.getId()) == null) {
            Member unregistered_member = new Member();

            unregistered_member.setId(profile.getId());
            unregistered_member.setName(profile.getProperties().getNickname());
            unregistered_member.setProfile_image(profile.getProperties().getProfile_image());
            unregistered_member.setAccessToken(JWT_Token);
            log.info("202!");
            log.info("token = {}", Access_token);
            loginResponse.setUnregistered_member(unregistered_member);

            return new ResponseEntity<>(loginResponse, HttpStatus.CREATED);

        }
        log.info("token = {}", Access_token);
        log.info("200!");
        
        log.info("jwt = {}", loginResponse);
        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ResponseBody
    public ResponseEntity<String> Signup(@RequestBody Member member) {
        memberService.join(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private String getToken(String code, String REST_API_KEY, String REDIRECT_URI, String CLIENT_SECRET) {
        RestTemplate restTemplate = new RestTemplate();
        
        HttpHeaders header = new HttpHeaders();
        header.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", REST_API_KEY);
        params.add("redirect_uri", REDIRECT_URI);
        params.add("code", code);
        params.add("client_secret", CLIENT_SECRET);

        HttpEntity<MultiValueMap<String, String>> tokenParameter = new HttpEntity<>(params, header);

        log.info("getting");
        ResponseEntity<TokenResponse> res = restTemplate.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                tokenParameter,
                TokenResponse.class);
        log.info("token res = {}", res.getBody().getAccess_token());
        log.info("res = {}", res);
        return res.getBody().getAccess_token();
    }

}
