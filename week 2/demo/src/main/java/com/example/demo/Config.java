package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example.demo")
public class Config {

    @Bean
    public BookRepository book1() {
        return new BookRepository();
    }

    @Bean
    public Magazine mag1() {
        return new Magazine();
    }

    @Bean
    public Reader reader() {
        return new Reader(book1());
    }

}
