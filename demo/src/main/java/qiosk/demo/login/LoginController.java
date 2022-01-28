package qiosk.demo.login;

import java.io.IOException;

import com.fasterxml.jackson.databind.ObjectMapper;

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
import qiosk.demo.domain.login.KakaoProfile;
import qiosk.demo.domain.member.Member;
import qiosk.demo.domain.member.MemberRepository;

@Controller
@Slf4j
@RequestMapping("/kakao")
@RequiredArgsConstructor
public class LoginController {

    private final MemberRepository memberRepository;

    @GetMapping("/signin")
    @ResponseBody
    public ResponseEntity<Member> Signin(@RequestHeader(value = "Access_token") String Access_token) {
        // String REST_API_KEY = "223392a6512c6867ae141bab90e937f2";
        // String REDIRECT_URI = "https://3000-c3b8c88d-18cc-4a7b-bc21-cde7aea3fe6d.cs-asia-east1-jnrc.cloudshell.dev/oauth/kakao";
        // String CLIENT_SECRET = "p9iuf6DDf3WydhBHR9YwnDWOngEmozRr";

        // String Access_token = getToken(code, REST_API_KEY, REDIRECT_URI, CLIENT_SECRET).getBody().getAccess_token();

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

        log.info("profile = {}", profile);
        log.info("profile = {}", profile.getId());

        if (memberRepository.findById(profile.getId()) == null) {
            Member unregistered_member = new Member();

            unregistered_member.setId(profile.getId());
            unregistered_member.setName(profile.getProperties().getNickname());
            unregistered_member.setProfile_image(profile.getProperties().getProfile_image());
            log.info("202!");
            log.info("token = {}", Access_token);
            return new ResponseEntity<>(unregistered_member, HttpStatus.CREATED);

        }
        log.info("token = {}", Access_token);
        log.info("200!");
        return new ResponseEntity<>(memberRepository.findById(profile.getId()), HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ResponseBody
    public ResponseEntity<String> Signup(@RequestBody Member member) {
        memberRepository.save(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // private ResponseEntity<AccessToken> getToken(String code, String REST_API_KEY, String REDIRECT_URI, String CLIENT_SECRET) {
    //     RestTemplate restTemplate = new RestTemplate();
        
    //     HttpHeaders header = new HttpHeaders();
    //     header.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

    //     MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
    //     params.add("grant_type", "authorization_code");
    //     params.add("client_id", REST_API_KEY);
    //     params.add("redirect_uri", REDIRECT_URI);
    //     params.add("code", code);
    //     params.add("client_secret", CLIENT_SECRET);

    //     HttpEntity<MultiValueMap<String, String>> tokenParameter = new HttpEntity<>(header);

    //     ResponseEntity<AccessToken> res = restTemplate.exchange(
    //             "https://kauth.kakao.com/oauth/token",
    //             HttpMethod.POST,
    //             tokenParameter,
    //             AccessToken.class);
    //     log.info("token res = {}", res);
    //     return res;
    // }

}
