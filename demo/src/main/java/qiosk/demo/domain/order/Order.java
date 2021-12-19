package qiosk.demo.domain.order;

import lombok.Data;

@Data
public class Order {
    
    private Long orderId;
    private Long clientId;
    private String itemName;
    private int quantity;

    public Order(String itemName, int quantity) {
        this.itemName = itemName;
        this.quantity = quantity;
    }
}
