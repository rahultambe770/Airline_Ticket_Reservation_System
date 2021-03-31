package com.app.flightmanagement.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.flightmanagement.entity.BookingDetails;
import com.app.flightmanagement.entity.FlightDetails;
import com.app.flightmanagement.entity.Passenger;
import com.app.flightmanagement.entity.User;
import com.app.flightmanagement.exception.UserDoesnotExistException;
import com.app.flightmanagement.exception.UserValidationException;
import com.app.flightmanagement.serviceImpl.UserServiceImpl;
import com.app.flightmanagement.utils.UserAuth;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServiceImpl service;

	@PostMapping("/addUser")
	public ResponseEntity<User> addUser(@Valid @RequestBody User user, Errors error) {
		if (error.hasErrors()) {
			throw new UserValidationException("invalid data provided");
		}
		User addedUser = service.addUser(user);
		return ResponseEntity.ok().body(addedUser);
	}

	@PostMapping("/userLogin")
	public ResponseEntity<User> loginUser(@RequestBody UserAuth auth) {
		//System.out.println("Auth==" + auth.getUserId());
		User user = service.userLogin(auth);
	//	System.out.println("response completed");
		//try {
			return ResponseEntity.ok().body(user);
//		} catch (RuntimeException e) {
//			return ResponseEntity.ok().body(user);
//		}

		/*
		 * return new ResponseEntity<>(new
		 * ResponseDTO<>("User details deletion failed"),
		 * HttpStatus.INTERNAL_SERVER_ERROR);
		 */

	}

	@GetMapping("/getUser/{id}")
	public ResponseEntity<User> getUser(@PathVariable Integer id) {

		User user = service.getUser(id);
		return ResponseEntity.ok(user);
	}

	@PostMapping("/updateUser")
	public ResponseEntity<Void> updateUser(@Valid @RequestBody User user) {
		service.updateUser(user);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
		service.deleteUser(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@PostMapping("/addBooking/{userId}/{flightNumber}")
	public ResponseEntity<BookingDetails> addBooking(@RequestBody BookingDetails booking, @PathVariable Integer userId,
			@PathVariable Integer flightNumber) {

		System.out.println("pass=" + booking.getPassengers());
		BookingDetails details = service.addBooking(booking, userId, flightNumber);
		return ResponseEntity.ok().body(details);
	}

	@DeleteMapping("/deleteBooking/{bookingId}/{userId}")
	public void deleteBooking(@PathVariable Integer bookingId, @PathVariable Integer userId) {
		service.deleteBooking(bookingId, userId);
	}

//	@GetMapping("/findFlight/{arrivalAirport}/{departureAirport}/{date}")
//	public ResponseEntity<FlightDetails> findByRouteAndDate(@PathVariable String arrivalAirport,@PathVariable String departureAirport,@PathVariable String date){
//		System.out.println(arrivalAirport);
//		System.out.println(departureAirport);
//		System.out.println(date);
//	FlightDetails details = service.findByRouteAndDate(arrivalAirport, departureAirport, date);
////		List<FlightDetails> list
////		 = service.findByRouteAndDate(arrivalAirport, departureAirport, date);
//		//System.out.println("deta=="+details);
//		return ResponseEntity.ok().body(details);
//	}

	@GetMapping("/findFlight/{arrivalAirport}/{departureAirport}/{date}")
	public ResponseEntity<List<FlightDetails>> findByRouteAndDate(@PathVariable String arrivalAirport,
			@PathVariable String departureAirport, @PathVariable String date) {
		System.out.println(arrivalAirport);
		System.out.println(departureAirport);
		System.out.println(date);
//		FlightDetails details = service.findByRouteAndDate(arrivalAirport, departureAirport, date);
		List<FlightDetails> list = service.findByRouteAndDate(arrivalAirport, departureAirport, date);
		// System.out.println("deta=="+details);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping("/getBookingByUser/{userId}")
	public ResponseEntity<List<BookingDetails>> getBookingByUser(@PathVariable Integer userId) {

		List<BookingDetails> list = service.getBookingByUserId(userId);
		System.out.println(list);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping("/getFlightByNumber/{flightNumber}")
	public ResponseEntity<FlightDetails> getFlightByNumber(@PathVariable Integer flightNumber) {
		FlightDetails details = service.getFlightByFlightNumber(flightNumber);
		return ResponseEntity.ok().body(details);
	}

	@PostMapping("/updatePassenger")
	public ResponseEntity<Passenger> updatePassenger(@RequestBody Passenger passenger) {
		Passenger p = service.updatePassenger(passenger);
		return ResponseEntity.ok().body(p);
	}

	// ----------------------new methos---------------------
	@GetMapping("/getBookingByBookingId/{bookingId}")
	public ResponseEntity<Optional<BookingDetails>> getBookingByBookingId(@PathVariable Integer bookingId) {

		Optional<BookingDetails> list = service.getBookingByBookingId(bookingId);
		System.out.println(list);
		return ResponseEntity.ok().body(list);
	}
}
