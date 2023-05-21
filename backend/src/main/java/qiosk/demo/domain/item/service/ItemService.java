package qiosk.demo.domain.item.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.ItemRepository;

@Service
public class ItemService {
    
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems(String storeCode) {
        return itemRepository.findByStoreCode(storeCode);
    }

    public Optional<Item> getItem(String itemId) {
        return itemRepository.findById(itemId);
    }

    public void addItems(Item itme) {
        itemRepository.save(itme);
    }

    public void updateItem(String itemId, Item item) {
        if(getItem(itemId).isPresent() && itemId == item.getId()){
            itemRepository.save(item);
        }
    }

    public void deleteItem(String itemId) {
        itemRepository.deleteById(itemId);
    }

}
