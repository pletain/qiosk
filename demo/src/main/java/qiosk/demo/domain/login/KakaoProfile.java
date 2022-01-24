package qiosk.demo.domain.login;

import java.util.Properties;

import lombok.Data;

@Data
public class KakaoProfile {
    
    private Integer id;
    private String connected_at;
    private Properties properties;
    private String profile_image;
    private Properties kakao_account;
}
