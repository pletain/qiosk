package qiosk.demo.domain.item;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, String> {

    // public Item save(Item item);
    // public Item findById(Long itemId);
    // public List<Item> findAll();
    // public void update(Long itemId, Item updateParam);

}
