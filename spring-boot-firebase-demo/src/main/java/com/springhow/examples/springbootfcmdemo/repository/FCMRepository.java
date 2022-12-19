package com.springhow.examples.springbootfcmdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springhow.examples.springbootfcmdemo.pojo.FCMToken;
@Repository
public interface FCMRepository extends JpaRepository<FCMToken, String>{
	List<FCMToken> findByStockname(String name);
}
