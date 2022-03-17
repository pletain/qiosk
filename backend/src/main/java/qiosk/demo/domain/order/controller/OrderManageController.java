package qiosk.demo.domain.order.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Controller
@RequestMapping("/ordermanage")
@RequiredArgsConstructor
public class OrderManageController {

    private final OrderRepository orderRepository; 

    // 주문 관리 페이지
    /**
     * 
     * @return 주문 리스트 정보 반환
     */ 
    @GetMapping("")
    @ResponseBody
    public List<OrderList> ShowOrders() {
        List<OrderList> orders = orderRepository.findAll();
        return orders;
    }

    //주문 삭제
    @DeleteMapping("/delete/{orderId}")
    @ResponseBody
    public void DelteOrder(@PathVariable String orderId) {
        orderRepository.deleteById(orderId);
    }

}
