package com.example.demo.api.DTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BookDTO {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String name;
    private int year;
    private int pages;

    public BookDTO() {
        super();
    }

    public BookDTO(String name) {
        this.name = name;
    }

    public BookDTO(Long id, String name) {
        this(name);
        this.id = id;
    }

    public BookDTO(Long id, String name, int year, int pages) {
        this(id,name);
        this.year = year;
        this.pages = pages;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getYear() {
        return year;
    }

    public int getPages() {
        return pages;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }
}
