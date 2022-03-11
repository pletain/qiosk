package qiosk.demo.domain.order;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection="OrderList")
public class OrderList {
    @Id 
    ObjectId orderId;
    String clientId;
    Long tableNum;
    String time;
    private boolean serving;
    private boolean payment;
    private List<Order> orders;
}
