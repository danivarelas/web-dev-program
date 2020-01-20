package com.example.demo.api.Util;

import java.io.UnsupportedEncodingException;

import io.jsonwebtoken.*;

import java.util.Date;

import com.example.demo.DemoApplication;

/*
    Our simple static class that demonstrates how to create and decode JWTs.
 */
public class JWTGenerator {

    public static String createJWT(String id, String username, String subject, long ttlMillis) {

        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        // Let's set the JWT Claims
        JwtBuilder builder;
        try {
            builder = Jwts.builder().setId(id).setSubject(subject).setIssuedAt(now).claim("username", username)
                    .claim("admin", true).signWith(SignatureAlgorithm.HS256, "secret".getBytes("UTF-8"));
            if (ttlMillis >= 0) {
                long expMillis = nowMillis + ttlMillis;
                Date exp = new Date(expMillis);
                builder.setExpiration(exp);
            }
            String compact = builder.compact();
            return compact;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Claims decodeJWT(String jwt) {
        try {
            Claims claims = Jwts.parser().setSigningKey("secret".getBytes("UTF-8")).parseClaimsJws(jwt).getBody();
            return claims;
        } catch (UnsupportedEncodingException e) {
            e.getLocalizedMessage();
        }
        return null;
    }

    public static boolean validateToken(String jwt) {
        Claims claims = decodeJWT(jwt);
        return claims.get("username").equals(DemoApplication.loggedUser);
    }

}
