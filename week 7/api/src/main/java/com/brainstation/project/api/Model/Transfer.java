package com.brainstation.project.api.Model;

import com.brainstation.project.api.DTO.TransferDTO;

import java.math.BigDecimal;
import java.util.Date;

public class Transfer {

    private long id;
    private String transferNumber;
    private String transferDescription;
    private BigDecimal amount;
    private Date transferDate;

    public Transfer() {
        super();
    }

    public Transfer(TransferDTO transferDTO) {
        if (transferDTO != null) {
            this.id = transferDTO.getId();
            this.transferNumber = transferDTO.getTransferNumber();
            this.transferDescription = transferDTO.getTransferDescription();
            this.amount = transferDTO.getAmount();
            this.transferDate = transferDTO.getTransferDate();
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTransferNumber() {
        return transferNumber;
    }

    public void setTransferNumber(String transferNumber) {
        this.transferNumber = transferNumber;
    }

    public String getTransferDescription() {
        return transferDescription;
    }

    public void setTransferDescription(String transferDescription) {
        this.transferDescription = transferDescription;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Date getTransferDate() {
        return transferDate;
    }

    public void setTransferDate(Date transferDate) {
        this.transferDate = transferDate;
    }
}
