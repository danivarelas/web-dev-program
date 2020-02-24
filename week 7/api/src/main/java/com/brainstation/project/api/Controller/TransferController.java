package com.brainstation.project.api.Controller;

import com.brainstation.project.api.Model.Account;
import com.brainstation.project.api.Model.Transfer;
import com.brainstation.project.api.Service.AccountService;
import com.brainstation.project.api.Service.TransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/v1/transfer")
@RestController
public class TransferController {

    private final TransferService transferService;
    private final AccountService accountService;
    private HttpServletRequest request;

    @Autowired
    public TransferController(TransferService transferService, AccountService accountService, HttpServletRequest request) {
        this.transferService = transferService;
        this.accountService = accountService;
        this.request = request;
    }

    @PostMapping
    public void addTransfer(@RequestBody Transfer transfer) {
        Account sourceAccount = accountService.selectAccountById(transfer.getSourceAccountId());
        Account targetAccount = accountService.selectAccountById(transfer.getTargetAccountId());
        if(sourceAccount.getBalance().compareTo(transfer.getAmount()) == 1) {
            sourceAccount.setBalance(sourceAccount.getBalance().subtract(transfer.getAmount()));
            targetAccount.setBalance(targetAccount.getBalance().add(transfer.getAmount()));
            accountService.updateAccount(sourceAccount.getId(), sourceAccount);
            accountService.updateAccount(targetAccount.getId(), targetAccount);
        }
        transferService.insertTransfer(transfer);
    }

    @GetMapping
    public ResponseEntity<List<Transfer>> getAllTransfers() {
        //if (JWTProvider.validateToken(request.getHeader("JWT"))) {
        return new ResponseEntity<>(transferService.selectAllTransfers() , HttpStatus.OK);
        //} else {
        //    return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        //}
    }

    @GetMapping("byAccountId/{accountId}")
    public ResponseEntity<List<Transfer>> getAllTransfersByAccountId(@PathVariable("accountId") long accountId) {
        //if (JWTProvider.validateToken(request.getHeader("JWT"))) {
        return new ResponseEntity<>(transferService.selectAllTransfersByAccountId(accountId) , HttpStatus.OK);
        //} else {
        //    return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        //}
    }

}
