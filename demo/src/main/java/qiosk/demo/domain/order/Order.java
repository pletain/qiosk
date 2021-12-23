package qiosk.demo.domain.order;

import lombok.Data;
@Data
public class Order {
    private String itemName;
    private int quantity;

    public Order(String itemName, int quantity) {
        this.itemName = itemName;
        this.quantity = quantity;
    }
}
