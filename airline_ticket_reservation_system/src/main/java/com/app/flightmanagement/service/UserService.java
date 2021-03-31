package com.app.flightmanagement.service;

import java.util.List;
import java.util.Optional;

import com.app.flightmanagement.entity.BookingDetails;
import com.app.flightmanagement.entity.FlightDetails;
import com.app.flightmanagement.entity.Passenger;
import com.app.flightmanagement.entity.User;
import com.app.flightmanagement.utils.UserAuth;

public interface UserService {
	public User addUser(User user);

	public void updateUser(User user);

	public User getUser(Integer userId);

	public void deleteUser(Integer userId);

	public User userLogin(UserAuth auth);

	public BookingDetails addBooking(BookingDetails booking, Integer userId, Integer flightNumber);

	public void deleteBooking(Integer bookingId, Integer userId);

	public List<BookingDetails> getBookingByUserId(Integer userId);

	public List<FlightDetails> findByRouteAndDate(String arrivalAirport, String departureAirport, String date);

	public FlightDetails getFlightByFlightNumber(Integer flightNumber);

	public Passenger updatePassenger(Passenger passenger);

	public Optional<BookingDetails> getBookingByBookingId(Integer BookingId);

}
