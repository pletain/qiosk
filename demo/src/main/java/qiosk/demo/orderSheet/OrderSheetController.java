package qiosk.demo.orderSheet;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.item.ItemDescription;
import qiosk.demo.domain.item.ItemRepository;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Controller
@RequestMapping("/ordersheet")
@RequiredArgsConstructor
public class OrderSheetController {

    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;

    // 주문 관리 홈
    @GetMapping("")
    @ResponseBody
    public List<OrderList> ShowOrders() {
        List<OrderList> orders = orderRepository.findAlls();
        return orders;
    }

    // 상품 상세보기
    /**
     * 
     * @param itemId
     * @param model
     * @return 특정 상품 정보 반환
     */
    @GetMapping("/{itemId}")
    @ResponseBody
    public ItemDescription detail(@PathVariable Long itemId) {
        ItemDescription detail = new ItemDescription(itemRepository.findById(itemId).getDescription());
        return detail;
    }

}
