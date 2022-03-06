package qiosk.demo.domain.dbtest;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class orderstore {
    
    private String itemName;
    private int quantity;
    private int price;
}
