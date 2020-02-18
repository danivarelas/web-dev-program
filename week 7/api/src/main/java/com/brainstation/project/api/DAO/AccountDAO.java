package com.brainstation.project.api.DAO;

import com.brainstation.project.api.DTO.AccountDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface AccountDAO extends JpaRepository<AccountDTO, Long> {

    AccountDTO findByAccountNumber(String accountNumber);

}
