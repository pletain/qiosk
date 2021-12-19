package qiosk.demo.domain.order;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;


@Repository
public class OrderRepositoryImpl implements OrderRepository{

    private static final Map<Long, Order> store = new HashMap<>();
    private static long sequence = 0L;

    @Override
    public Order saveOrder(Long clientId, Order order) {
        order.setOrderId(++sequence);
        order.setClientId(clientId);
        store.put(order.getOrderId(), order);
        return order;
    }

    @Override
    public Order findByOrderId(Long orderId) {
        return store.get(orderId);
    }

    @Override
    public Order findByClientId(Long clientId) {
        return store.get(clientId);
    }

    @Override
    public List<Order> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void update(Long orderId, Order updateParam) {
        Order findOrder = findByOrderId(orderId);
        findOrder.setClientId(updateParam.getClientId());
        findOrder.setItemName(updateParam.getItemName());
        findOrder.setQuantity(updateParam.getQuantity());
    }

    @Override
    public void clearStore() {
        store.clear();
    }


    
}
