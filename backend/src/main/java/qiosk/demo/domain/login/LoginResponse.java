package qiosk.demo.domain.login;

import lombok.Data;
import qiosk.demo.domain.member.Member;

@Data
public class LoginResponse {
    private String accessToken;
    private Member unregistered_member;
    
    public LoginResponse() {}
}
