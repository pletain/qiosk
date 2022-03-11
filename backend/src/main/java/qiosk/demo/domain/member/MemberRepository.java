package qiosk.demo.domain.member;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MemberRepository extends MongoRepository<Member, String> {
    
    // Member save(Member member);
    // Member findById(Integer id);
    // List<Member> findAllMembers();
    // Boolean isExist(Integer id);
}
