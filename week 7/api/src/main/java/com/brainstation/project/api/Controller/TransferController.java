package com.brainstation.project.api.Controller;

import com.brainstation.project.api.Model.Transfer;
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
    private HttpServletRequest request;

    @Autowired
    public TransferController(TransferService transferService, HttpServletRequest request) {
        this.transferService = transferService;
        this.request = request;
    }

    @PostMapping
    public void addTransfer(@RequestBody Transfer transfer) {
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

    @GetMapping("byUserId/{userId}")
    public ResponseEntity<List<Transfer>> getAllTransfersByUserId(@PathVariable("userId") long userId) {
        //if (JWTProvider.validateToken(request.getHeader("JWT"))) {
        return new ResponseEntity<>(transferService.selectAllTransfersByUserId(userId) , HttpStatus.OK);
        //} else {
        //    return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        //}
    }

}
