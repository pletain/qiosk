package qiosk.demo.domain.item;

import java.util.Optional;

import lombok.Data;

/**
 * - 상품 ID
- 상품명
- 가격
- 수량
- 상세 설명
 */
@Data
public class Item {
    
    private Long id;
    private String itemname;
    private Integer price;
    private Integer quantity;
    private Optional<String> description;

    public Item(){}

    public Item(Long id, String itemname, Integer price, Integer quantity, Optional<String> description) {
        this.id = id;
        this.itemname = itemname;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }


}


