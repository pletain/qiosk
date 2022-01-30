package qiosk.demo.domain.item;

import java.util.List;

public interface ItemRepository {

    Item save(Item item);
    Item findById(Long itemId);
    List<Item> findAll();
    void update(Long itemId, Item updateParam);
    void clearStore();
    
}
