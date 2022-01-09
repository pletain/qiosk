package qiosk.demo.domain.order;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import lombok.extern.slf4j.Slf4j;


@Repository
@Slf4j
public class OrderRepositoryImpl implements OrderRepository{

    private static final Map<Long, List<Order>> store = new HashMap<>();
    private static final Map<Long, OrderList> db = new HashMap<>();
    private static long sequence = 0L;

    @Override
    public void saveOrder(OrderList orderList, List<Order> orders) {
        orderList.setOrderId(sequence++);
        
        Long orderId = orderList.getOrderId();
        Long clientId = orderList.getClientId();

        store.put(orderId, orders);
        store.put(clientId, orders);
    }

    @Override
    public OrderList saveOrder(OrderList orderList) {
        orderList.setOrderId(++sequence);
        db.put(orderList.getOrderId(), orderList);
        return orderList;
    }

    // @Override
    // public Order saveOrder(Long clientId, Order order) {
    //     order.setOrderId(++sequence);
    //     order.setClientId(clientId);
    //     store.put(order.getOrderId(), order);
    //     return order;
    // }

    @Override
    public List<Order> findByOrderId(Long orderId) {
        return store.get(orderId);
    }

    @Override
    public List<Order> findByClientId(Long clientId) {
        return store.get(clientId);
    }

    @Override
    public List<Order> findAll() {
        List<Order> everyOrder = new ArrayList<Order>();

        store.values().forEach(orders -> everyOrder.addAll(orders));

        return everyOrder;
    }

    @Override
    public List<OrderList> findAllOrder() {
        return new ArrayList<>(db.values());
    }


    @Override
    public void clearStore() {
        store.clear();
    }


    
}
