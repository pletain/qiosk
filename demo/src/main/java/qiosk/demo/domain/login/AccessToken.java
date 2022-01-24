package qiosk.demo.domain.login;

import lombok.Data;

@Data
public class AccessToken {
    private String access_token;
    
    public AccessToken(){}
}