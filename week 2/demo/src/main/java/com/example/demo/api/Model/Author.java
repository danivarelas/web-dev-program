package com.example.demo.api.Model;

import java.time.LocalDate;
import java.util.UUID;

public class Author {

    private UUID id;
    private String name;
    private LocalDate birthDate;

    public Author() {
        super();
    }

    public Author(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public Author(UUID id, String name, LocalDate birthdDate) {
        this(id,name);
        this.birthDate = birthdDate;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    
}