package com.brainstation.project.api.DAO;

import com.brainstation.project.api.DTO.PaymentDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface PaymentDAO extends JpaRepository<PaymentDTO, Long> {

    PaymentDTO findByPaymentNumber(String paymentNumber);
}
