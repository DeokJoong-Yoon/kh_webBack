package com.spring.openapi.data.service;

import java.net.URLEncoder;

import org.springframework.stereotype.Service;

import com.spring.common.openapi.URLConnectUtil;
import com.spring.openapi.data.vo.AnimalDaejeonDTO;
import com.spring.openapi.data.vo.OpenApiDTO;

@Service
public class DataServiceImple implements DataService {

	/*
	 * @Override public StringBuffer chungnamList() throws Exception { // String
	 * site = //
	 * "https://tour.chungnam.go.kr/_prog/openapi/?func=tour&start=1&end=10"; // URL
	 * url = new URL(site);
	 * 
	 * // 요청 url 및 전달해 주어야 하는 파라미터 StringBuffer site = new
	 * StringBuffer("https://tour.chungnam.go.kr/_prog/openapi/"); site.append("?" +
	 * URLEncoder.encode("func", "UTF-8") + "=" + URLEncoder.encode("tour",
	 * "UTF-8")); site.append("&" + URLEncoder.encode("start", "UTF-8") + "=" +
	 * URLEncoder.encode("1", "UTF-8")); site.append("&" + URLEncoder.encode("end",
	 * "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8"));
	 * 
	 * // 별도의 클래스로, 메서드를 선언하여 아래의 내용 정의 URL url = new URL(site.toString());
	 * HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	 * 
	 * // 요청 방식 선택(GET, POST) conn.setRequestMethod("GET"); // 서버 Response Data를
	 * xml(application/xml), json(application/json) 형식의 타입으로 요청
	 * conn.setRequestProperty("Accept", "appcliation/xml"); //
	 * 타입설정(application/xml) 형식으로 전송(Request Body 전달시 application/xml로 서버에 전달) //
	 * conn.setRequestProperty("Content-type", "application/xml");
	 * 
	 * int resCode = conn.getResponseCode(); System.out.println("응답 코드 " + resCode);
	 * 
	 * BufferedReader in = new BufferedReader(new
	 * InputStreamReader(conn.getInputStream(), "UTF-8")); String inputLine;
	 * StringBuffer output = new StringBuffer(); while ((inputLine = in.readLine())
	 * != null) { output.append(inputLine); } return output; }
	 */

	/*
	 * @Override public StringBuffer chungnamDetail(String mng_no) throws Exception
	 * {
	 * 
	 * // http://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=V&mng_no=아이템고유번호
	 * StringBuffer site = new
	 * StringBuffer("https://tour.chungnam.go.kr/_prog/openapi/"); site.append("?" +
	 * URLEncoder.encode("func", "UTF-8") + "=" + URLEncoder.encode("tour",
	 * "UTF-8")); site.append("&" + URLEncoder.encode("mode", "UTF-8") + "=" +
	 * URLEncoder.encode("V", "UTF-8")); site.append("&" +
	 * URLEncoder.encode("mng_no", "UTF-8") + "=" + URLEncoder.encode(mng_no,
	 * "UTF-8"));
	 * 
	 * // 별도의 클래스로, 메서드를 선언하여 아래의 내용 정의 URL url = new URL(site.toString());
	 * HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	 * 
	 * // 요청 방식 선택(GET, POST) conn.setRequestMethod("GET"); // 서버 Response Data를
	 * xml(application/xml), json(application/json) 형식의 타입으로 요청
	 * conn.setRequestProperty("Accept", "appcliation/xml"); //
	 * 타입설정(application/xml) 형식으로 전송(Request Body 전달시 application/xml로 서버에 전달) //
	 * conn.setRequestProperty("Content-type", "application/xml");
	 * 
	 * int resCode = conn.getResponseCode(); System.out.println("응답 코드 " + resCode);
	 * 
	 * BufferedReader in = new BufferedReader(new
	 * InputStreamReader(conn.getInputStream(), "UTF-8")); String inputLine;
	 * StringBuffer output = new StringBuffer(); while ((inputLine = in.readLine())
	 * != null) { output.append(inputLine); } return output; }
	 */

	/*
	 * @Override public StringBuffer chungnamDetail(String mng_no) throws Exception
	 * {
	 * 
	 * // http://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=V&mng_no=아이템고유번호
	 * StringBuffer site = new
	 * StringBuffer("https://tour.chungnam.go.kr/_prog/openapi/"); site.append("?" +
	 * URLEncoder.encode("func", "UTF-8") + "=" + URLEncoder.encode("tour",
	 * "UTF-8")); site.append("&" + URLEncoder.encode("mode", "UTF-8") + "=" +
	 * URLEncoder.encode("V", "UTF-8")); site.append("&" +
	 * URLEncoder.encode("mng_no", "UTF-8") + "=" + URLEncoder.encode(mng_no,
	 * "UTF-8"));
	 * 
	 * // 별도의 클래스로, 메서드를 선언하여 아래의 내용 정의 URL url = new URL(site.toString());
	 * HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	 * 
	 * // 요청 방식 선택(GET, POST) conn.setRequestMethod("GET"); // 서버 Response Data를
	 * xml(application/xml), json(application/json) 형식의 타입으로 요청
	 * conn.setRequestProperty("Accept", "appcliation/xml"); //
	 * 타입설정(application/xml) 형식으로 전송(Request Body 전달시 application/xml로 서버에 전달) //
	 * conn.setRequestProperty("Content-type", "application/xml");
	 * 
	 * int resCode = conn.getResponseCode(); System.out.println("응답 코드 " + resCode);
	 * 
	 * BufferedReader in = new BufferedReader(new
	 * InputStreamReader(conn.getInputStream(), "UTF-8")); String inputLine;
	 * StringBuffer output = new StringBuffer(); while ((inputLine = in.readLine())
	 * != null) { output.append(inputLine); } return output; }
	 */

	@Override
	public StringBuffer chungnamList() throws Exception {
		// 리스트요청 open api url:
		// "https://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=V&mng_no=아이템고유번호

		// 요청 url 및 전달해 주어야 하는 파라미터
		StringBuffer site = new StringBuffer("https://tour.chungnam.go.kr/_prog/openapi/");
		site.append("?" + URLEncoder.encode("func", "UTF-8") + "=" + URLEncoder.encode("tour", "UTF-8"));
		site.append("&" + URLEncoder.encode("start", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		site.append("&" + URLEncoder.encode("end", "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8"));

//		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET", "appcliation/xml", null);
		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}

	@Override
	public StringBuffer chungnamDetail(String mng_no) throws Exception {
		// 오픈api주소 :
		// https://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=V&mng_no=아이템고유번호
		/*
		 * String site =
		 * "https://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=V&mng_no=" +
		 * mng_no; OpenApiDTO openApi = new OpenApiDTO(site, "GET");
		 */

		StringBuffer site = new StringBuffer("https://tour.chungnam.go.kr/_prog/openapi/");
		site.append("?" + URLEncoder.encode("func", "UTF-8") + "=" + URLEncoder.encode("tour", "UTF-8"));
		site.append("&" + URLEncoder.encode("mode", "UTF-8") + "=" + URLEncoder.encode("V", "UTF-8"));
		site.append("&" + URLEncoder.encode("mng_no", "UTF-8") + "=" + URLEncoder.encode(mng_no, "UTF-8"));

		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}

	@Override
	public StringBuffer animalDaejeonList(AnimalDaejeonDTO animalDaejeonDTO) throws Exception {
		StringBuffer site = new StringBuffer("http://apis.data.go.kr/6300000/animalDaejeonService/animalDaejeonList");
		site.append("?" + URLEncoder.encode("serviceKey", "UTF-8")
				+ "=vJ94Smv4fFy1pde2ThIEoOJ8XLr8CYxwK98c0ClYxGzcYMHhLRw5wkzXJIMZDpkCcakN4IwLU6EmkzhJ68l4DQ%3D%3D");
		site.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		site.append("&" + URLEncoder.encode("numOfOws", "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8"));
		site.append("&" + URLEncoder.encode("searchCondition", "UTF-8") + "=" + animalDaejeonDTO.getSearchCondition());
		site.append(
				"&" + URLEncoder.encode("searchCondition3", "UTF-8") + "=" + animalDaejeonDTO.getSearchCondition3());

		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}

	@Override
	public StringBuffer animalDaejeonItem(AnimalDaejeonDTO animalDaejeonDTO) throws Exception {
		StringBuffer site = new StringBuffer("http://apis.data.go.kr/6300000/animalDaejeonService/animalDaejeonItem");
		site.append("?" + URLEncoder.encode("serviceKey", "UTF-8")
				+ "=vJ94Smv4fFy1pde2ThIEoOJ8XLr8CYxwK98c0ClYxGzcYMHhLRw5wkzXJIMZDpkCcakN4IwLU6EmkzhJ68l4DQ%3D%3D");
		site.append("&" + URLEncoder.encode("animalSeq", "UTF-8") + "=" + animalDaejeonDTO.getAnimalSeq());

		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}

	@Override
	public StringBuffer daejeonTourList() throws Exception {
		StringBuffer site = new StringBuffer("https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot");
		site.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + "vJ94Smv4fFy1pde2ThIEoOJ8XLr8CYxwK98c0ClYxGzcYMHhLRw5wkzXJIMZDpkCcakN4IwLU6EmkzhJ68l4DQ%3D%3D");
		site.append("&" + URLEncoder.encode("pageNo", "UTF8") + "=" + URLEncoder.encode("1", "UTF-8"));
		site.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8"));

		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}

	/*
	@Override
	public StringBuffer gyeongnammuseumList() throws Exception {
		StringBuffer site = new StringBuffer("http://apis.data.go.kr/6480000/gyeongnammuseum/gyeongnammuseumList");
		site.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + "vJ94Smv4fFy1pde2ThIEoOJ8XLr8CYxwK98c0ClYxGzcYMHhLRw5wkzXJIMZDpkCcakN4IwLU6EmkzhJ68l4DQ%3D%3D");
		site.append("&" + URLEncoder.encode("pageNo", "UTF8") + "=" + URLEncoder.encode("1", "UTF-8"));
		site.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("20", "UTF-8"));
		site.append("&" + URLEncoder.encode("resultType", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8"));

		OpenApiDTO openApi = new OpenApiDTO(site.toString(), "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}*/
	
	@Override
	public StringBuffer gyeongnammuseumList() throws Exception {
		String site = "http://apis.data.go.kr/6480000/gyeongnammuseum/gyeongnammuseumList";
		site +="?serviceKey=" + "vJ94Smv4fFy1pde2ThIEoOJ8XLr8CYxwK98c0ClYxGzcYMHhLRw5wkzXJIMZDpkCcakN4IwLU6EmkzhJ68l4DQ%3D%3D";
		site +="&pageNo=1";
		site +="&numOfRows=20";
		site +="&resultType=json";
		
		OpenApiDTO openApi = new OpenApiDTO(site, "GET");
		StringBuffer result = URLConnectUtil.openAPIData(openApi);
		return result;
	}
}
