package com.boot.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.boot.example.domain.BooksVO;

@Mapper
public interface ExampleMapper {
	@Select ("select sysdate from dual")
	public String getTime();
	
	public String getDate();
	
	// 책테이블 리스트	
	public List<BooksVO> getBookList();
	// 책테이블 데이터 입력
	public int bookInsert();
}
