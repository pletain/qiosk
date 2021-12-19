package qiosk.demo.domain.order;

import java.util.List;

public interface OrderRepository {
    
    Order saveOrder(Long clientId, Order order);
    Order findByClientId(Long clientId);
    Order findByOrderId(Long orderId);
    List<Order> findAll();
    void update(Long orderId, Order order);
    void clearStore();
}
