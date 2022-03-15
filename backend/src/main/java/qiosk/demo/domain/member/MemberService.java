package qiosk.demo.domain.member;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class MemberService {
    
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Optional<Member> getMember(String memberId) {
        return memberRepository.findById(memberId);
    }

    public Member join(Member member) {
        return memberRepository.save(member);
    }


}
