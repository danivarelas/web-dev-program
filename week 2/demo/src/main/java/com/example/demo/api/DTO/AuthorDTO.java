package com.example.demo.api.DTO;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "author")
public class AuthorDTO {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String name;
    private String country;
    private int age;
    //private List<BookDTO> books;

    public AuthorDTO() {
        super();
    }

    public AuthorDTO(String name) {
        this.name = name;
    }

    public AuthorDTO(Long id, String name) {
        this(name);
        this.id = id;
    }

    public AuthorDTO(String name, String country, int age) {
        this(name);
        this.country = country;
        this.age = age;
    }

//    public AuthorDTO(String name, String country, int age, List<BookDTO> books) {
//        this(name);
//        this.country = country;
//        this.age = age;
//        this.books = books;
//    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCountry() {
        return country;
    }

    public int getAge() {
        return age;
    }

//    public List<BookDTO> getBooks() {
//        return books;
//    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setAge(int age) {
        this.age = age;
    }

//    public void setBooks(List<BookDTO> books) {
//        this.books = books;
//    }
}
