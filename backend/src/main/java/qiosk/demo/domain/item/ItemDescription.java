package qiosk.demo.domain.item;

import lombok.Data;


@Data
public class ItemDescription {

    private String detail;

    public ItemDescription(String detail) {
        this.detail = detail;
    }

}
