package qiosk.demo.domain.order.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.ItemRepository;
import qiosk.demo.domain.order.OrderList;
import qiosk.demo.domain.order.OrderRepository;
import qiosk.demo.global.JWTService;

@Controller
@Slf4j
@RequestMapping("/order")
@RequiredArgsConstructor
public class Ordercontroller {

    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;
    private final JWTService jwtService;

    // 주문 페이지
    @GetMapping("")
    @ResponseBody
    public List<Item> Items() {
        List<Item> items = itemRepository.findAll();
        return items;
    }

    // 주문 접수
    @ResponseBody
    @PostMapping("")
    public ResponseEntity<String> takeOrder(@RequestBody OrderList orderList) throws IOException, ServletException {
        try {
            log.info("success {} = ", orderList);
            orderList.setClientId(jwtService.doFilterInternal(orderList.getAuthorization()));
            orderRepository.save(orderList);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (ExpiredJwtException e) {
            log.info("ExpiredJwtException");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    // private void checkIfRefreshTokenValid(String requiredValue, String givenRefreshToken) throws JwtException {
    //     String givenValue = String.valueOf(jwtTokenProvider.getClaimsFromJwtToken(givenRefreshToken).getBody().get("value"));
    //     if (!givenValue.equals(requiredValue))
    //         throw new InvalidRequestParameterException("Invalid refreshToken");
    // }

}
