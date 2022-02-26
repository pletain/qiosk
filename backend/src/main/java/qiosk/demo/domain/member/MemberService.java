package qiosk.demo.domain.member;

import org.springframework.stereotype.Service;

@Service
// @RequiredArgsConstructor
public class MemberService {
    
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member getMember(Integer memberId) {
        return memberRepository.findById(memberId);
    }

    public Member join(Member member) {
        return memberRepository.save(member);
    }


}
