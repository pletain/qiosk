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
        List<Item> items = itemRepository.findAll();
        return items;
    }

    @GetMapping("/makeorder")
    @ResponseBody
    public String MakeOrder() {

        Item itemA = new Item("치즈 쫙~통모짜치즈카츠", 11000, "돈카츠 속에 치즈 왕창 묻고 더블로 갓~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemA.jpeg");
        Item itemB = new Item("고소단백 차슈라멘", 8500, "고소하고 단백한 차슈라멘 한사발 하실레예~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemB.jpeg");
        Item itemC = new Item("얼큰~얼큰차슈라멘", 9000, "한국식 맵고 칼칼한 얼큰한맛 해장엔 최고최고", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemC.jpeg");
        Item itemD = new Item("두툼바삭 생등심돈카츠", 8500, "100%국내산등심으로 매일숙성작업하는 신선한 돈카츠", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemD.jpeg");
        Item itemE = new Item("가정식카레", 7500, "입맛없을땐 카레 한그릇 뚝딱~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemE.jpeg");
        itemRepository.save(itemA);
        itemRepository.save(itemB);
        itemRepository.save(itemC);
        itemRepository.save(itemD);
        itemRepository.save(itemE);

        // OrderList orderList = new OrderList();
        // orderList.setClientId(21L);
        // orderList.setTableNum(tb++);

        // Order orderA = new Order("가츠동", 2);
        // Order orderB = new Order("사케동", 1);
        // List<Order> orders = new ArrayList<>();
        // orders.add(orderA);
        // orders.add(orderB);

        // orderList.setOrders(orders);

        // orderRepository.saveOrder(orderList);

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
        orderRepository.saveOrder(orderList);
        orderList.getOrders()
                .forEach(order -> log.info("주문자ID={}, 상품={}x{}", orderList.getClientId(), order.getItemName(), order.getQuantity()));
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
