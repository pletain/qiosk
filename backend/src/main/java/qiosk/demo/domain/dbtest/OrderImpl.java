package qiosk.demo.domain.dbtest;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class OrderImpl {
    
    private String itemName;
    private int quantity;
    private int price;

    public String getItemName() { 
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
