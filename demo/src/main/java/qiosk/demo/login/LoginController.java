package qiosk.demo.login;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import qiosk.demo.domain.login.AccessToken;
import qiosk.demo.domain.login.KakaoProfile;
import qiosk.demo.domain.member.Member;
import qiosk.demo.domain.member.MemberRepository;

@Controller
@Slf4j
@RequestMapping("/check")
@RequiredArgsConstructor
public class LoginController {

    private final MemberRepository memberRepository;

    @PostMapping("")
    @ResponseBody
    public void checkId(@RequestBody AccessToken token) {

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders header = new HttpHeaders();
        header.add("Authorization", "Bearer " + token.getAccess_token());
        header.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> profilereq = new HttpEntity<>(header);

        ResponseEntity<String> res = restTemplate.exchange(
            "https://kapi.kakao.com/v2/user/me",
            HttpMethod.POST,
            profilereq,
            String.class
        );

        KakaoProfile profile = new KakaoProfile();

        ObjectMapper mapper = new ObjectMapper();
        try {
            profile = mapper.readValue(res.getBody(), KakaoProfile.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        log.info("profile = {}", profile);

        Member memberA = new Member();
        memberA.setId("2087698140");
        memberRepository.save(memberA);
        log.info("token = {}", token.getAccess_token());
    }

    @GetMapping("")
    @ResponseBody
    public String Items() {
        return "잘돌아가는군";
    }
}
