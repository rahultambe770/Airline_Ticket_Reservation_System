package com.app.flightmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "passengers")
public class Passenger {

	@Id
	@GeneratedValue
	private Integer passengerId;

	private String name;
	private Integer age;
	private Double luggage;

	public Passenger() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Passenger(Integer passengerId, String name, Integer age, Double luggage) {
		super();
		this.passengerId = passengerId;
		this.name = name;
		this.age = age;
		this.luggage = luggage;
	}

	public Integer getPassengerId() {
		return passengerId;
	}

	public void setPassengerId(Integer passengerId) {
		this.passengerId = passengerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Double getLuggage() {
		return luggage;
	}

	public void setLuggage(Double luggage) {
		this.luggage = luggage;
	}

	@Override
	public String toString() {
		return "Passenger [passengerId=" + passengerId + ", name=" + name + ", age=" + age + ", luggage=" + luggage
				+ "]";
	}

}
