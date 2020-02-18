package com.brainstation.project.api.Service;

import com.brainstation.project.api.DAO.AccountDAO;
import com.brainstation.project.api.DTO.AccountDTO;
import com.brainstation.project.api.Model.Account;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {

    private final AccountDAO accountDAO;

    public AccountService(AccountDAO accountDAO) {
        this.accountDAO = accountDAO;
    }

    public Account insertAccount(Account account) {
        AccountDTO accountDTO = accountDAO.save( new AccountDTO(account));
        return new Account(accountDTO);
    }

    public List<Account> selectAllAccounts() {
        List<AccountDTO> accountsDTO = accountDAO.findAll();
        List<Account> accounts = new ArrayList<>();
        accountsDTO.forEach(accountDTO -> {
            accounts.add(new Account(accountDTO));
        });
        return accounts;
    }

    public Account selectAccountByAccountNumber(String accountNumber) {
        AccountDTO accountDTO = accountDAO.findByAccountNumber(accountNumber);
        return new Account(accountDTO);
    }

    public Account updateAccount(String accountNumber, Account account) {
        AccountDTO accountDTO = accountDAO.findByAccountNumber(accountNumber);
        accountDTO.setBalance(account.getBalance());
        accountDTO = accountDAO.save(accountDTO);
        return new Account(accountDTO);
    }

}
