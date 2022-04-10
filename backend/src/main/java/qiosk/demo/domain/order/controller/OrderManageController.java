package qiosk.demo.domain.order.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.service.OrderService;

// 주문 관리 페이지
@Controller
@RequestMapping("/ordermanage")
@RequiredArgsConstructor
public class OrderManageController {

    private final OrderService orderService;
    
    /**
     * 접수된 주문 페이지
     * @param storeCode
     * @return 주문 리스트
     */
    @GetMapping("/order")
    @ResponseBody
    public List<OrderList> ShowOrders(@RequestHeader(value = "storeCode") String storeCode) {
        List<OrderList> orders = orderService.getOrderList(storeCode);
        return orders;
    }
    /**
     * 주문 삭제
     * @param orderId
     */
    @DeleteMapping("/delete/{orderId}")
    @ResponseBody
    public void DelteOrder(@PathVariable String orderId) {
        orderService.deleteOrder(orderId);
    }

}
