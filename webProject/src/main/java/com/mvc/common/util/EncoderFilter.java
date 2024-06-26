package com.mvc.common.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class EncoderFilter implements Filter {
	
	private String encoding;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		encoding = filterConfig.getInitParameter("encoding");
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// 한글 인코딩 설정 작업
		request.setCharacterEncoding(encoding);
		
		// ↑ 요청 필터 기능
		chain.doFilter(request,  response); // 다음 필터로 넘기는 작업 수행
		// ↓ 응답 필터 기능
	}
}
