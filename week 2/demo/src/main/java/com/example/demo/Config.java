package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example.demo")
public class Config {
 
    @Bean
    public Book book1() {
        return new Book();
    }
 
    @Bean
    public Bookstore store() {
        return new Bookstore(book1());
    }
 
}
