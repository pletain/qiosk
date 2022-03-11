package qiosk.demo.domain.member;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection="member")
public class Member {
    
    private String id;
    private String name;
    private String phoneNumber;
    private String profile_image;
    private String AccessToken;

    public Member(){}

    public Member(String id, String name, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    
}
