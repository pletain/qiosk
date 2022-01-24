package qiosk.demo.domain.member;

import lombok.Data;

@Data
public class Member {
    
    private String id;
    private String name;
    private String phoneNumber;

    public Member(){}

    public Member(String id, String name, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    
}
