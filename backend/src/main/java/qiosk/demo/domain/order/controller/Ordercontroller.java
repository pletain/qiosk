package qiosk.demo.domain.order.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.ItemRepository;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;
import qiosk.demo.global.JWTService;

@Controller
@RequestMapping("/order")
@RequiredArgsConstructor
public class Ordercontroller {

    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;
    private final JWTService jwtService;

    // 주문 페이지
    @GetMapping("")
    @ResponseBody
    public List<Item> Items() {
        List<Item> items = itemRepository.findAll();
        return items;
    }

    // 주문 접수
    @ResponseBody
    @PostMapping("")
    public void takeOrder(@RequestBody OrderList orderList) {
        orderList.setClientId(jwtService.getUserIdFromJWT(orderList.getClientId()));
        orderRepository.save(orderList);
    }

}
