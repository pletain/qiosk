package qiosk.demo.domain.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import qiosk.demo.DTO.KakaoProfile;
import qiosk.demo.DTO.LoginDTO;
import qiosk.demo.domain.member.Member;
import qiosk.demo.domain.member.service.LoginService;
import qiosk.demo.domain.member.service.MemberService;
import qiosk.demo.global.JWTService;

@Controller
@RequestMapping("/kakao")
@RequiredArgsConstructor
public class LoginController {

    private final MemberService memberService;
    private final LoginService loginService;
    private final JWTService jwtService;

    //로그인 처리
    @GetMapping("/signin")
    @ResponseBody
    public ResponseEntity<LoginDTO> Signin(@RequestHeader(value = "Authorization_code") String code) {

        // 사용자 정보 가져오기
        KakaoProfile profile = loginService.getProfile(code);
        String user_Id = profile.getId();
        String user_Name = profile.getProperties().getNickname();
        String user_PFP = profile.getProperties().getProfile_image();

        //서버 자체 토큰 생성
        String JWT_Token = jwtService.makeJwtToken(user_Id);
        
        //로그인 응답 객체에 생성된 토큰 담기
        LoginDTO loginRes= new LoginDTO();
        loginRes.setAccessToken(JWT_Token);

        //가입된 사용자가 아닐 때
        if (!memberService.getMember(user_Id).isPresent()) {
            
            //새로운 Member 객체 생성해서 반환
            Member newb = new Member(user_Id, user_Name, user_PFP, JWT_Token);
            loginRes.setNewb(newb);
            return new ResponseEntity<>(loginRes, HttpStatus.CREATED);
        }

        //가입된 사용자일 경우 JWT만 담아서 반환
        return new ResponseEntity<>(loginRes, HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ResponseBody
    public ResponseEntity<String> Signup(@RequestBody Member member) {
        memberService.join(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
