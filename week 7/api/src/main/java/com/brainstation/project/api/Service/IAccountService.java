package com.brainstation.project.api.Service;

import com.brainstation.project.api.Model.Account;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IAccountService {

    Account insertAccount(Account account);

    List<Account> selectAllAccounts();

    Account selectAccountByAccountNumber(String accountNumber);

    /*int updateAccount(String accountNumber, Account account);

    int deleteAccount(String accountNumber);*/
}
