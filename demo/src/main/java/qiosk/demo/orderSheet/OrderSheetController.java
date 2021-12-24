package qiosk.demo.orderSheet;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Controller
@RequestMapping("/ordersheet")
@RequiredArgsConstructor
public class OrderSheetController {

    private final OrderRepository orderRepository; 

    // 주문 관리 홈
    /**
     * 
     * @return 주문 리스트 정보 반환
     */ 
    @GetMapping("")
    @ResponseBody
    public List<OrderList> ShowOrders() {
        List<OrderList> orders = orderRepository.findAlls();
        return orders;
    }

    //주문 삭제
    /**
     * 
     * @param tableNum
     */
    @PostMapping("")
    @ResponseBody
    public void DelteOrder(@RequestBody Long tableNum) {
        // orderRepository.saveOrder(orderList, orderList.getOrders());
        // orderList.getOrders()
        //         .forEach(order -> log.info("clientId={}, order={}", orderList.getClientId(), order.getItemName()));
    }

}
