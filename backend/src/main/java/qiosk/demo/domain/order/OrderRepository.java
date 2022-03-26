package qiosk.demo.domain.order;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<OrderList, String> {
    List<OrderList> findByStoreCode(String storeCode);
}
