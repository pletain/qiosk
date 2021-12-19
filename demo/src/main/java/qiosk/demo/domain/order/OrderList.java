package qiosk.demo.domain.order;

import java.util.List;

import lombok.Data;

@Data
public class OrderList {
    Long clientId;
    private List<Order> orders;
}
