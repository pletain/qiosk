package qiosk.demo.domain.item;

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
    private int price;
    private Integer quantity;
    private String description;

    public Item(){}

    public Item(String itemname, int price, String description) {
        this.itemname = itemname;
        this.price = price;
        this.description = description;
    }


}


