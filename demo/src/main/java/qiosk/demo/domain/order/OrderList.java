package qiosk.demo.domain.order;

import java.util.List;

import lombok.Data;

@Data
public class OrderList {
    Long orderId;
    Long clientId;
    Long tableNum;
    private boolean serving;
    private boolean payment;
    private List<Order> orders;
}
