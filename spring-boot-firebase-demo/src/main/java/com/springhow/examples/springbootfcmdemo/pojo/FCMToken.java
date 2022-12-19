package com.springhow.examples.springbootfcmdemo.pojo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "stocks")
public class FCMToken {
	private String stockname;
	@Id
	private String token;
	public String getstockname() {
		return stockname;
	}
	public void setmoviename(String stockname) {
		this.stockname = stockname;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
}
