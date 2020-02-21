package com.brainstation.project.api.Controller;

import com.brainstation.project.api.Service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/v1/service")
@RestController
public class ServiceController {

    private final ServiceService serviceService;
    private HttpServletRequest request;

    @Autowired
    public ServiceController(ServiceService serviceService, HttpServletRequest request) {
        this.serviceService = serviceService;
        this.request = request;
    }
}
