package com.springhow.examples.springbootfcmdemo.pojo;

public class Stock {
	private String stockName;
	private int price;
	public String getStockName() {
		return stockName;
	}
	public void setStockName(String stockName) {
		this.stockName = stockName;
	}
	public int getPrice() {
		return price;
	}
	public Stock(String stockName, int price) {
		super();
		this.stockName = stockName;
		this.price = price;
	}
	public Stock() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setPrice(int price) {
		this.price = price;
	}
}
