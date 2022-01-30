package qiosk.demo.domain.order;

import lombok.Data;
@Data
public class Order {
    private String itemName;
    private int quantity;
    private int price;

    public Order(){}

    public Order(String itemName, int quantity, int price) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
    }
}
