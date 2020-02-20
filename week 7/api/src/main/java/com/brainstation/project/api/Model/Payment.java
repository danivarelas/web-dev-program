package com.brainstation.project.api.Model;

import com.brainstation.project.api.DTO.PaymentDTO;

import java.math.BigDecimal;

public class Payment {

    private long id;
    private String paymentNumber;
    private String paymentDescription;
    private BigDecimal amount;

    public Payment() {
        super();
    }

    public Payment(PaymentDTO paymentDTO) {
        if (paymentDTO != null) {
            this.id = paymentDTO.getId();
            this.paymentNumber = paymentDTO.getPaymentNumber();
            this.paymentDescription = paymentDTO.getPaymentDescription();
            this.amount = paymentDTO.getAmount();
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPaymentNumber() {
        return paymentNumber;
    }

    public void setPaymentNumber(String paymentNumber) {
        this.paymentNumber = paymentNumber;
    }

    public String getPaymentDescription() {
        return paymentDescription;
    }

    public void setPaymentDescription(String paymentDescription) {
        this.paymentDescription = paymentDescription;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}
