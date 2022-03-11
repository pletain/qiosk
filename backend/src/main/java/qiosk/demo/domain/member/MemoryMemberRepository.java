// package qiosk.demo.domain.member;

// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// import org.springframework.stereotype.Repository;

// @Repository
// public class MemoryMemberRepository implements MemberRepository{

//     private static final Map<Integer, Member> members = new HashMap<Integer, Member>();

//     @Override
//     public Member save(Member member) {
//         members.put(member.getId(), member);
//         return member;
//     }

//     @Override
//     public Member findById(Integer id) {
//         return members.get(id);
//     }

//     @Override
//     public List<Member> findAllMembers() {
//         return new ArrayList<>(members.values());
//     }

//     @Override
//     public Boolean isExist(Integer id) {
//         Member member = members.get(id);
//         if(member != null) {
//             return true;
//         } else {
//             return false;
//         }
//     }
    
// }
