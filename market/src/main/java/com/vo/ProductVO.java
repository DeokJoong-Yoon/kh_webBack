package com.vo;

public class ProductVO {
	private int productNumber;
	private String productName;
	private int productPrice;
	private String productRegistDate;
	private int totalSellCount;

	public ProductVO() {
	}

	public ProductVO(int productNumber, String productName, int productPrice, String productRegistDate,
			int totalSellCount) {
		this.productNumber = productNumber;
		this.productName = productName;
		this.productPrice = productPrice;
		this.productRegistDate = productRegistDate;
		this.totalSellCount = totalSellCount;
	}

	public int getProductNumber() {
		return productNumber;
	}

	public void setProductNumber(int productNumber) {
		this.productNumber = productNumber;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductRegistDate() {
		return productRegistDate;
	}

	public void setProductRegistDate(String productRegistDate) {
		this.productRegistDate = productRegistDate;
	}

	public int getTotalSellCount() {
		return totalSellCount;
	}

	public void setTotalSellCount(int totalSellCount) {
		this.totalSellCount = totalSellCount;
	}

}
