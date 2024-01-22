package com.vo;

public class SellerVO {
	private int sellerId;
	private String sellerName;
	private String sllerHomepageUrl;

	public SellerVO() {
	}

	public SellerVO(int sellerId, String sellerName, String sllerHomepageUrl) {
		this.sellerId = sellerId;
		this.sellerName = sellerName;
		this.sllerHomepageUrl = sllerHomepageUrl;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getSllerHomepageUrl() {
		return sllerHomepageUrl;
	}

	public void setSllerHomepageUrl(String sllerHomepageUrl) {
		this.sllerHomepageUrl = sllerHomepageUrl;
	}

}
