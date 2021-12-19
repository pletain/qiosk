package qiosk.demo.order;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.ItemDescription;
import qiosk.demo.domain.item.ItemRepository;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Controller
@Slf4j
@RequestMapping("/order")
@RequiredArgsConstructor
public class Ordercontroller {

    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;

    // 주문 홈
    /**
     * 
     * @return 모든 상품 정보 반환
     */
    @GetMapping("")
    @ResponseBody
    public List<Item> Items() {
        Item itemA = new Item("가츠동", 7000, "국내산 '生' 안심 돈까스");
        Item itemB = new Item("사케동", 8500, "떠먹는 '生' 연어 초밥");
        itemRepository.save(itemA);
        itemRepository.save(itemB);
        List<Item> items = itemRepository.findAll();
        return items;
    }

        // 주문 접수
        /**
         * 
         * @param orderList
         */
        @ResponseBody
        @PostMapping("")
        public void takeOrder(@RequestBody OrderList orderList) {
            // Item item = itemRepository.findById(itemId);
            // model.addAttribute("item", item);
            orderList.getOrders().forEach(order -> orderRepository.saveOrder(orderList.getClientId(), order));
            orderList.getOrders().forEach(order -> log.info("clientId={}, order={}", orderList.getClientId(), order.getItemName()));
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
