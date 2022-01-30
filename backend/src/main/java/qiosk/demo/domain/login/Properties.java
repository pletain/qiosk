package qiosk.demo.domain.login;

import lombok.Data;

@Data
public class Properties {
    private String nickname;
    private String profile_image;
    private String thumbnail_image;

    public Properties() {}
}
