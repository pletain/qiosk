package qiosk.demo.order;

import java.util.ArrayList;
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
import qiosk.demo.domain.order.Order;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Controller
@Slf4j
@RequestMapping("/order")
@RequiredArgsConstructor
public class Ordercontroller {

    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;
    private static long tb = 0L;
    // 주문 홈
    /**
     * 
     * @return 모든 상품 정보 반환
     */
    @GetMapping("")
    @ResponseBody
    public List<Item> Items() {
        Item itemA = new Item("가츠동", 7000, "국내산 '生' 안심 돈까스");
        // Item itemB = new Item("사케동", 8500, "떠먹는 '生' 연어 초밥");
        itemA.setImgsrc("https://qioskbucket.s3.ap-northeast-2.amazonaws.com/ragdoll.jpg");
        itemRepository.save(itemA);
        // itemRepository.save(itemB);
        List<Item> items = itemRepository.findAll();
        return items;
    }

    @GetMapping("/makeorder")
    @ResponseBody
    public String MakeOrder() {

        OrderList orderList = new OrderList();
        orderList.setClientId(21L);
        orderList.setTableNum(tb++);

        Order orderA = new Order("가츠동", 2);
        Order orderB = new Order("사케동", 1);
        List<Order> orders = new ArrayList<>();
        orders.add(orderA);
        orders.add(orderB);

        orderList.setOrders(orders);

        orderRepository.saveOrder(orderList);

        return "주문이 접수 됐습니다!";
    }

    // 주문 접수
    /**
     * 
     * @param orderList
     */
    @ResponseBody
    @PostMapping("")
    public void takeOrder(@RequestBody OrderList orderList) {
        log.info("accepting...");
        log.info("orderList: " + orderList);
        orderRepository.saveOrder(orderList, orderList.getOrders());
        orderList.getOrders()
                .forEach(order -> log.info("clientId={}, order={}", orderList.getClientId(), order.getItemName()));
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
