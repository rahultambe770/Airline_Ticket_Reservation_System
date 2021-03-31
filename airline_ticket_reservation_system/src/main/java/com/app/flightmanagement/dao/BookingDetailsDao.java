package com.app.flightmanagement.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.flightmanagement.entity.BookingDetails;



@Repository
public interface BookingDetailsDao extends JpaRepository<BookingDetails, Integer> {

}
