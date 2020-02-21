package com.brainstation.project.api.Controller;

import com.brainstation.project.api.Service.ServiceTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/v1/serviceType")
@RestController
public class ServiceTypeController {

    private final ServiceTypeService serviceTypeService;
    private HttpServletRequest request;

    @Autowired
    public ServiceTypeController(ServiceTypeService serviceTypeService, HttpServletRequest request) {
        this.serviceTypeService = serviceTypeService;
        this.request = request;
    }

}
