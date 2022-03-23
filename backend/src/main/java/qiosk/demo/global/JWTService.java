package qiosk.demo.global;

import java.io.IOException;
import java.time.Duration;
import java.util.Date;

import javax.servlet.ServletException;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JWTService {
    //JWT 생성
    public String makeJwtToken(String userId) {
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE) // (1)
                .setIssuer("lavin") // (2)
                .setIssuedAt(now) // (3)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(1).toMillis())) // (4)
                .claim("id", userId) // (5)
                // .claim("email", "ajufresh@gmail.com")
                .signWith(SignatureAlgorithm.HS256, "secret") // (6)
                .compact();
    }
    
    //JWT 토큰 파싱 -> 유효성 확인
    public String doFilterInternal(String authorizationHeader)
            throws IOException, ServletException {
        Claims claims = parseJwtToken(authorizationHeader);
        return getUserIdFromJWT(claims);
    }

    protected static String getUserIdFromJWT(Claims claims) {
        return (String) claims.get("id");
    }

    protected Claims parseJwtToken(String authorizationHeader) {
        validationAuthorizationHeader(authorizationHeader); // (1)
        String token = extractToken(authorizationHeader); // (2)

        return Jwts.parser()
                .setSigningKey("secret") // (3)
                .parseClaimsJws(token) // (4)
                .getBody();
    }

    private void validationAuthorizationHeader(String header) {
        if (header == null || !header.startsWith("Bearer ")) {
            throw new IllegalArgumentException();
        }
    }

    private String extractToken(String authorizationHeader) {
        return authorizationHeader.substring("Bearer ".length());
    }

    public JWTService() {}
}
