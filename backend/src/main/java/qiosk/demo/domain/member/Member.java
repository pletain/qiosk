package qiosk.demo.domain.member;

import lombok.Data;

@Data
public class Member {
    
    private Integer id;
    private String name;
    private String phoneNumber;
    private String profile_image;

    public Member(){}

    public Member(Integer id, String name, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    
}
