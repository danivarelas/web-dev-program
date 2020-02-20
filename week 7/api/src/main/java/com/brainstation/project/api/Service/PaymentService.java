package com.brainstation.project.api.Service;

import com.brainstation.project.api.Model.Payment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PaymentService {

    Payment insertPayment(Payment account);

    List<Payment> selectAllPayments();

    Payment selectPaymentByPaymentNumber(String paymentNumber);

    List<Payment> selectAllPaymentsByUserId(long userId);

    Payment updatePayment(String paymentNumber, Payment account);

    //Payment deletePayment(String paymentNumber);
}
