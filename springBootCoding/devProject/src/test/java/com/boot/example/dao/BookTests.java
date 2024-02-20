package com.boot.example.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.boot.example.domain.BookVO;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class BookTests {

	@Setter(onMethod_ = @Autowired)
	private BookDAO bookDAO;

//	@Test
//	public void testBookList() {
//		log.info("getBookList() 메서드 실행)");
//		List<BookVO> list = bookDAO.bookList();
//		for (BookVO vo : list) {
//			log.info(vo.toString());
//		}
//		log.info("레코드수 : " + list.size());
//	}
//	
//	@Test
//	public void testBookInsert() {
//		BookVO bookVO = new BookVO();
//		bookVO.setTitle("나는 존재한다");
//		bookVO.setPublisher("paris");
//		bookVO.setYear("2023");
//		bookVO.setPrice(24000);
//		
//		log.info("적용된 행의 수 : " + bookDAO.bookInsert(bookVO));
//	}

//	@Test
//	public void testBookDelete() {
//		BookVO bookVO = new BookVO();
//		bookVO.setBookId(1);
//		log.info("적용된 행의 수 : " + bookDAO.bookDelete(bookVO));
//	}

	@Test
	public void testBookUpdate() {
		BookVO bookVO = new BookVO();
		bookVO.setTitle("정신분석");
		bookVO.setPublisher("해악");
		bookVO.setYear("2402");
		bookVO.setPrice(12000);
		bookVO.setBookId(12);

		log.info("적용된 행의 수 : " + bookDAO.bookUpdate(bookVO));
	}
}
