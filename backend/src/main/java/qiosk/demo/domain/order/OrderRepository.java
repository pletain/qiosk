package qiosk.demo.domain.order;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<OrderList, ObjectId> {
    
    // void saveOrder(OrderList orderList, List<Order> orders);
    // OrderList saveOrder(OrderList orderList);
    // List<Order> findByClientId(Long clientId);
    // List<Order> findByOrderId(Long orderId);
    // List<Order> findAll();
    // List<OrderList> findAllOrder();
    // void deleteOrder(Long orderId);
    // // void update(Long orderId, List<Order> order);
    // void clearStore();
}
