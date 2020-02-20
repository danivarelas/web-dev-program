package com.brainstation.project.api.DAO;

import com.brainstation.project.api.DTO.CreditCardDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface CreditCardDAO extends JpaRepository<CreditCardDTO, Long> {

    CreditCardDTO findByCardNumber(String cardNumber);
}
