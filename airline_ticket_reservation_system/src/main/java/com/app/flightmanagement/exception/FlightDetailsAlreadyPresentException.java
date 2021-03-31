/**
 * 
 */
package com.app.flightmanagement.exception;

/**
 * @author Sanchit Singhal
 *
 */
public class FlightDetailsAlreadyPresentException extends RuntimeException {

	/**
	 * @param message
	 * @param cause
	 */
	public FlightDetailsAlreadyPresentException(String message, Throwable cause) {
		super(message, cause);
	}

	/**
	 * @param message
	 * @author Sanchit Singhal
	 */
	public FlightDetailsAlreadyPresentException(String message) {
		super(message);
	}

}
