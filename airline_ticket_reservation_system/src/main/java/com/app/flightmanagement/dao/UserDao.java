package com.app.flightmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.flightmanagement.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

}
