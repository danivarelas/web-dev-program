package com.example.demo.api.Exception;

public class ObjectNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private String message;
    private String details;

    public ObjectNotFoundException() {
    }

    public ObjectNotFoundException(String message, String details) {
        this.message = message;
        this.details = details;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

}