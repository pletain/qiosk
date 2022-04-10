package qiosk.demo.domain.item.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.service.ItemService;

@RestController
@RequestMapping("/storemanage")
@RequiredArgsConstructor
public class MenuManageController {

    private final ItemService itemService;

    @GetMapping("/menu")
    @ResponseBody
    public List<Item> ShowMenues(@RequestHeader(value = "storeCode") String storeCode) {
        List<Item> items = itemService.getItems(storeCode);
        return items;  
    }

    /**
     * 메뉴 추가
     * @param storeCode
     * @param item
     * @return
    */
    @PostMapping("/menu")
    @ResponseBody
    public ResponseEntity<String> AddMenu(
        @RequestHeader(value = "storeCode") String storeCode,
        @RequestBody Item item
        ) {
        item.setStoreCode(storeCode);
        itemService.addItems(item);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/menu/{itemId}/edit")
    public void EditItem(@PathVariable String itemId, @RequestBody Item editItem) {
        itemService.updateItem(itemId, editItem);
    }

    /**
     * 메뉴 삭제
     * @param itemId
     */
    @DeleteMapping("/menu/{itemId}/delete")
    public void DeleteItem(@PathVariable String itemId) {
        itemService.deleteItem(itemId);
    }

}
