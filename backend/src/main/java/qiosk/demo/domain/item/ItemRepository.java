package qiosk.demo.domain.item;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, String> {
    List<Item> findByStoreCode(String storeCode);
}
