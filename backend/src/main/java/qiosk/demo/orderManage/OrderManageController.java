package qiosk.demo.orderManage;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Controller
@Slf4j
@RequestMapping("/ordermanage")
@RequiredArgsConstructor
public class OrderManageController {

    private final OrderRepository orderRepository; 

    // 주문 관리 홈
    /**
     * 
     * @return 주문 리스트 정보 반환
     */ 
    @GetMapping("")
    @ResponseBody
    public List<OrderList> ShowOrders() {
        List<OrderList> orders = orderRepository.findAll();
        log.info("log ={}" , orderRepository.findAll());
        return orders;
    }

    //주문 삭제
    /**
     * 
     * @param tableNum
     */
    @DeleteMapping("/delete/{orderId}")
    @ResponseBody
    public void DelteOrder(@PathVariable ObjectId orderId) {
        orderRepository.deleteById(orderId);
        // orderRepository.saveOrder(orderList, orderList.getOrders());
        // orderList.getOrders()
        //         .forEach(order -> log.info("clientId={}, order={}", orderList.getClientId(), order.getItemName()));
    }

}
