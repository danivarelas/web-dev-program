package com.brainstation.project.api.Controller;

import com.brainstation.project.api.Model.Payment;
import com.brainstation.project.api.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/v1/payment")
@RestController
public class PaymentController {

    private final PaymentService paymentService;
    private HttpServletRequest request;

    @Autowired
    public PaymentController(PaymentService paymentService, HttpServletRequest request) {
        this.paymentService = paymentService;
        this.request = request;
    }

    @PostMapping
    public void addPayment(@RequestBody Payment payment) {
        paymentService.insertPayment(payment);
    }

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments() {
        //if (JWTProvider.validateToken(request.getHeader("JWT"))) {
        return new ResponseEntity<>(paymentService.selectAllPayments() , HttpStatus.OK);
        //} else {
        //    return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        //}
    }

    @GetMapping("byUserId/{userId}")
    public ResponseEntity<List<Payment>> getAllPaymentsByUserId(@PathVariable("userId") long userId) {
        //if (JWTProvider.validateToken(request.getHeader("JWT"))) {
        return new ResponseEntity<>(paymentService.selectAllPaymentsByUserId(userId) , HttpStatus.OK);
        //} else {
        //    return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        //}
    }
}
