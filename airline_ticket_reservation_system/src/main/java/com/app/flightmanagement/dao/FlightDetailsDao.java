package com.app.flightmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.flightmanagement.entity.FlightDetails;


@Repository
public interface FlightDetailsDao extends JpaRepository<FlightDetails, Integer> {

	@Query(/* "select f from FlightDetails f " */
			
			
			  "select f from FlightDetails f where f.arrivalAirport = ?1 and f.departureAirport = ?2"
			 )
	
	public List<FlightDetails> findByRouteDate(String sourceAirport,String destinationAirport);
	
}
