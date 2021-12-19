package qiosk.demo.order;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
    @ResponseBody
    public List<Item> home() {
        // Item itemA = new Item("가츠동", 7000, "국내산 '生' 안심 돈까스");
        // Item itemB = new Item("사케동", 8500, "떠먹는 '生' 연어 초밥");
        // itemRepository.save(itemA);
        // itemRepository.save(itemB);
        List<Item> items = itemRepository.findAll();
        return items;
    }

    //상품 상세보기
    @GetMapping("/{itemId}")
    public String detail(@PathVariable Long itemId, Model model) {
        Item item = itemRepository.findById(itemId);
        model.addAttribute("item", item);
        return "basic/item";
    }

    //주문 전송
    @PostMapping("/{order}")
    public String item(@PathVariable Long itemId, Model model) {
        Item item = itemRepository.findById(itemId);
        model.addAttribute("item", item);
        return "basic/item";
    }
}
