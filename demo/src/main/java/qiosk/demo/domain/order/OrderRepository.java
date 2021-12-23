package qiosk.demo.domain.order;

import java.util.List;

public interface OrderRepository {
    
    void saveOrder(OrderList orderList, List<Order> orders);
    void saveOrder(OrderList orderList);
    List<Order> findByClientId(Long clientId);
    List<Order> findByOrderId(Long orderId);
    List<Order> findAll();
    List<OrderList> findAlls();
    // void update(Long orderId, List<Order> order);
    void clearStore();
}
