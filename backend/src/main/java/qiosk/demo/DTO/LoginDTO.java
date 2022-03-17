package qiosk.demo.DTO;

import lombok.Data;
import qiosk.demo.domain.member.Member;

@Data
public class LoginDTO {
    private String accessToken;
    private Member newb;
    
    public LoginDTO() {}
}
