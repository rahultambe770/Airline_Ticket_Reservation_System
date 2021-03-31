package com.app.flightmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.flightmanagement.entity.Passenger;

public interface PassengerDao extends JpaRepository<Passenger, Integer> {

}
