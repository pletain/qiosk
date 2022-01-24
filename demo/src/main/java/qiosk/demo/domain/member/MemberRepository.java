package qiosk.demo.domain.member;

import java.util.List;

public interface MemberRepository {
    
    Member save(Member member);
    Member findById(String id);
    List<Member> findAllMembers();
    Boolean isExist(String id);
}
