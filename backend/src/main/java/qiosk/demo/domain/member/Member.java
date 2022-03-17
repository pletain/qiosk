package qiosk.demo.domain.member;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection="member")
public class Member {
    
    @Id
    private String id;
    private String name;
    private String phoneNumber;
    private String profile_image;
    private String AccessToken;

    public Member(){}

    public Member(String id, String name, String profile_image, String AccessToken) {
        this.id = id;
        this.name = name;
        this.profile_image = profile_image;
        this.AccessToken = AccessToken;
    }
}
