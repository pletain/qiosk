package qiosk.demo.DTO;

import lombok.Data;

@Data
public class Kakao_account {
    private Boolean profile_nickname_needs_agreement;
    private Boolean profile_image_needs_agreement;
    private Profile profile;

    public Kakao_account() {}
    
}
