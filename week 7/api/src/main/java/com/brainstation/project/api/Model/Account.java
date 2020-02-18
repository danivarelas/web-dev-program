package com.brainstation.project.api.Model;

import com.brainstation.project.api.DTO.AccountDTO;
import com.brainstation.project.api.DTO.UserDTO;

import java.math.BigDecimal;

public class Account {

    private long id;
    private String accountNumber;
    private BigDecimal balance;
    private String currency;

    public Account() {
        super();
    }

    public Account(AccountDTO accountDTO) {
        this.accountNumber = accountDTO.getAccountNumber();
        this.balance = accountDTO.getBalance();
        this.currency = accountDTO.getCurrency();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccount_number(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
