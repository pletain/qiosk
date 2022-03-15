package qiosk.demo.domain.order;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection="orders")
public class OrderList {

    String _id;

    Long tableNum;
    String orderTime;
    String clientId;

    private List<Order> orders;
}
