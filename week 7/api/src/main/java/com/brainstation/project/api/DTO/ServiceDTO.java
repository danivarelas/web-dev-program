package com.brainstation.project.api.DTO;

import com.brainstation.project.api.Model.Service;

import javax.persistence.*;

@Entity
@Table(name = "service")
public class ServiceDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String serviceName;
    private ServiceTypeDTO serviceTypeId;

    public ServiceDTO() {
        super();
    }

    public ServiceDTO(Service service) {
        if (service != null) {
            this.id = service.getId();
            this.serviceName = service.getServiceName();
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public ServiceTypeDTO getServiceTypeId() {
        return serviceTypeId;
    }

    public void setServiceTypeId(ServiceTypeDTO serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
    }
}
