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

    public void runTest(){
        itemRepository.deleteAll();
        Item itemZ = new Item("테스트 아이템", 1000000, "테스팅 중", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemE.jpeg", "storeB");
        Item itemA = new Item("치즈 쫙~통모짜치즈카츠", 11000, "돈카츠 속에 치즈 왕창 묻고 더블로 갓~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemA.jpeg", "storeA");
        Item itemB = new Item("고소단백 차슈라멘", 8500, "고소하고 단백한 차슈라멘 한사발 하실레예~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemB.jpeg", "storeA");
        Item itemC = new Item("얼큰~얼큰차슈라멘", 9000, "한국식 맵고 칼칼한 얼큰한맛 해장엔 최고최고", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemC.jpeg", "storeA");
        Item itemD = new Item("두툼바삭 생등심돈카츠", 8500, "100%국내산등심으로 매일숙성작업하는 신선한 돈카츠", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemD.jpeg", "storeA");
        Item itemE = new Item("가정식카레", 7500, "입맛없을땐 카레 한그릇 뚝딱~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemE.jpeg", "storeA");
        itemRepository.save(itemA);
        itemRepository.save(itemB);
        itemRepository.save(itemC);
        itemRepository.save(itemD);
        itemRepository.save(itemE);
        itemRepository.save(itemZ);
    }

}
