package qiosk.demo.DTO;

import lombok.Data;

@Data
public class Properties {
    private String nickname;
    private String profile_image;
    private String thumbnail_image;

    public Properties() {}
}
