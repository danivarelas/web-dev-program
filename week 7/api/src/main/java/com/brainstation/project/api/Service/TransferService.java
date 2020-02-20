package com.brainstation.project.api.Service;

import com.brainstation.project.api.Model.Transfer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TransferService {

    Transfer insertTransfer(Transfer transfer);

    List<Transfer> selectAllTransfers();

    Transfer selectTransferByTransferNumber(String transferNumber);

    List<Transfer> selectAllTransfersByUserId(long userId);

    Transfer updateTransfer(String transferNumber, Transfer transfer);

    //Transfer deleteTransfer(String transferNumber);
}