package com.brainstation.project.api.Controller;

import com.brainstation.project.api.Service.TransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/v1/transfer")
@RestController
public class TransferController {

//    private final TransferService transferService;
//    private HttpServletRequest request;
//
//    @Autowired
//    public TransferController(TransferService transferService, HttpServletRequest request) {
//        this.transferService = transferService;
//        this.request = request;
//    }
}
