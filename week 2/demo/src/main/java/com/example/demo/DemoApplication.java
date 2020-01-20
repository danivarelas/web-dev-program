package com.example.demo;

import java.util.UUID;

import com.example.demo.api.Util.JWTGenerator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static String jwtString;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		// UUID id = UUID.randomUUID();
		// jwtString = JWTGenerator.createJWT(id.toString(), "Test token", 5000000);
		// System.out.println(jwtString);
		// System.out.println(JWTGenerator.decodeJWT(jwtString));
	}

}
