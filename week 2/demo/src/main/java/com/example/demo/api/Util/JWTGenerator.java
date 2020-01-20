package com.example.demo.api.Util;

import java.io.UnsupportedEncodingException;

import io.jsonwebtoken.*;

import java.util.Date;

/*
    Our simple static class that demonstrates how to create and decode JWTs.
 */
public class JWTGenerator {

    // Sample method to construct a JWT
    public static String createJWT(String id, String subject, long ttlMillis) {

        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);

        // Let's set the JWT Claims
        JwtBuilder builder;
        try {
            builder = Jwts.builder()
                .setId(id)
                .setSubject(subject)
                .setIssuedAt(now)
                .claim("name", "John Doe")
                .claim("admin", true).signWith(SignatureAlgorithm.HS256, "secret".getBytes("UTF-8"));
            if (ttlMillis >= 0) {
                long expMillis = nowMillis + ttlMillis;
                Date exp = new Date(expMillis);
                builder.setExpiration(exp);
            }
            return builder.compact();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } 
        return null;

    }

    public static Claims decodeJWT(String jwt) {
        try{
            Claims claims = Jwts.parser()
            .setSigningKey("secret".getBytes("UTF-8"))
            .parseClaimsJws(jwt).getBody();
            return claims;
        } catch (UnsupportedEncodingException e) {
            e.getLocalizedMessage();
        }
        return null;
    }
    
}
