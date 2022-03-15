package qiosk.demo.domain.order;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<OrderList, String> {
    
}
