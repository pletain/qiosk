package qiosk.demo.order;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.ItemRepository;

@Controller
@RequestMapping("/order")
@RequiredArgsConstructor
public class Ordercontroller {
    
    private final ItemRepository itemRepository;

    //주문 홈
    @GetMapping("")
    public String home() {
        return "order/home";
    }

    //주문 상세보기
    @GetMapping("/{itemId}")
    public String item(@PathVariable Long itemId, Model model) {
        Item item = itemRepository.findById(itemId);
        model.addAttribute("item", item);
        return "basic/item";
    }

    //주문 담기

    //주문 전송
}
