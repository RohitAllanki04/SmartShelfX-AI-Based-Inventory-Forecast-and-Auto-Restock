package com.example.demo.Security;

import com.example.demo.model.Role;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Secret key for signing JWTs (use a strong, long key in production)
    private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Token validity (e.g., 1 day)
    private final long expirationMillis = 24 * 60 * 60 * 1000;

    // Generate JWT token
    public String generateToken(String email, Role role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role.name())      // store enum as String in JWT
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationMillis))
                .signWith(secretKey)
                .compact();
    }

    // Extract email/username from token
    public String getEmailFromToken(String token) {
        return parseToken(token).getBody().getSubject();
    }

    // Extract role from token
    public String getRoleFromToken(String token) {
        return parseToken(token).getBody().get("role", String.class);
    }

    // Validate token
    public boolean validateToken(String token) {
        try {
            parseToken(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    // Parse token safely
    private Jws<Claims> parseToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token);
    }
}
