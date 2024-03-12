package com.kh.opendata.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class APIController {

	private static final String serviceKey = "vJ94Smv4fFy1pde2ThIEoOJ8XLr8CYxwK98c0ClYxGzcYMHhLRw5wkzXJIMZDpkCcakN4IwLU6EmkzhJ68l4DQ%3D%3D";

	@ResponseBody
	@RequestMapping(value = "air.do", produces = "application/json; charset=utf8")
	public String airPollution(String location) throws IOException {

		String url = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";

		// url에 parameter 정보들을 추가히세요.
		url += "?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + serviceKey;
		url += "&" + URLEncoder.encode("returnType", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8");
		url += "&" + URLEncoder.encode("sidoName", "UTF-8") + "=" + URLEncoder.encode(location, "UTF-8");

		URL requestUrl = new URL(url);
		HttpURLConnection urlConnection = (HttpURLConnection) requestUrl.openConnection();
		urlConnection.setRequestMethod("GET");

		BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

		String responseText = "";
		String line;
		while ((line = br.readLine()) != null) {
			responseText += line;
		}
		br.close();
		urlConnection.disconnect();
		System.out.println(responseText);
		return responseText;
	}
	
	@GetMapping("/")
	public String indexMain() {
		return "index";
	}
}
