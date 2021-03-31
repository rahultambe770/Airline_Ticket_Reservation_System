package com.app.flightmanagement.service;

import java.util.List;

import com.app.flightmanagement.entity.Admin;
import com.app.flightmanagement.entity.FlightDetails;
import com.app.flightmanagement.entity.Passenger;
import com.app.flightmanagement.utils.AdminAuth;

public interface AdminService {
	public Admin addAdmin(Admin admin);

	public Admin getAdmin(Integer adminId);

	public void deleteAdmin(Integer adminId);

	public Admin adminLogin(AdminAuth auth);

	public List<FlightDetails> getAllFlightDetails();

	public FlightDetails addFlightDetails(FlightDetails details);

	public void deleteFlight(Integer flightNumber);

	public FlightDetails updateFlight(FlightDetails details);
	
	public List<Passenger> getAllPassengers();
	
	public List<Passenger> getPassengersByBooking(Integer id);

}
