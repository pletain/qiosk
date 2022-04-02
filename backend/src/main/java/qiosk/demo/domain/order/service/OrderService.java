package qiosk.demo.domain.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<OrderList> getOrderList(String storeCode) {
        return orderRepository.findByStoreCode(storeCode);
    }

    public void deleteOrder(String orderId) {
        orderRepository.deleteById(orderId);
    }
    
}
