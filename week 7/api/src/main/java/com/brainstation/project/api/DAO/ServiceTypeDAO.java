package com.brainstation.project.api.DAO;

import com.brainstation.project.api.DTO.ServiceTypeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface ServiceTypeDAO extends JpaRepository<ServiceTypeDTO, Long> {


}
