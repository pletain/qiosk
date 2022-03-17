package qiosk.demo.domain.item;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * - 상품 ID
- 상품명
- 가격
- 수량
- 상세 설명
 */
@Data
@Document(collection="item")
public class Item {

    @Id
    private String id;
    private String itemname;
    private int price;
    private Integer quantity = 1;
    private String description;
    private String imgsrc;

    public Item(){}

    public Item(String itemname, int price, String description, String imgsrc) {
        this.itemname = itemname;
        this.price = price;
        this.description = description;
        this.imgsrc = imgsrc;
    }


}


