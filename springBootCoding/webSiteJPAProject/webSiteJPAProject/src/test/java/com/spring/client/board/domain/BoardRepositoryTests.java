package com.spring.client.board.domain;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.spring.client.board.repository.BoardRepository;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class BoardRepositoryTests {
	@Setter(onMethod_ = @Autowired)
	private BoardRepository boardRepository;

	/* 게시판 전체 레코드 수 구하기 - count(): 사용가능한 엔티티 수를 반환 */

	@Test
	public void boardCountTest() {
		long boardCount = boardRepository.count();
		log.info(String.valueOf(boardCount));
	}

	/* 게시판 등록 - save() : 주어진 엔티티를 저장 */
//	@Test
//	public void boardInsertTest() {
//		Board board = new Board();
//		board.setName("Cervantes");
//		board.setTitle("순례");
//		board.setContent("감히 이룰 수 없는 꿈을꾸고,\r\n" + "감히 이루어질 수 없는 사랑을 하고,\r\n" + "감히 견딜 수 없는 고통을 견디며,\r\n"
//				+ "감히 용감한 자도 가지 못한 곳을 가며,\r\n" + "감히 닿지 못할 저 밤하늘의 별에 이른다는 것\r\n" + "\r\n" + "이것이 나의 순례이며\r\n"
//				+ "저 별을 따라가는 것이 나의 길이라오\r\n" + "아무리 희망이 없을 지라도,\r\n" + "또한 아무리 멀리 있을 지라도......");
//		board.setPasswd("1234");
//		board.setRegDate(LocalDateTime.now());
//		log.info("### board 테이블에 첫번째 데이터 입력");
//		boardRepository.save(board);
//
//		Board board1 = new Board();
//		board1.setName("Gandhi");
//		board1.setTitle("죄");
//		board1.setContent("세상에는 일곱까지 죄가 있다.\r\n" + "노력 없는 부,\r\n" + "양심 없는 쾌락,\r\n" + "인격 없는 지식,\r\n" + "도덕성 없는 상업,\r\n"
//				+ "인성 없는 과학,\r\n" + "희생없는 기도,\r\n" + "원칙 없는 정치가 그것이다");
//		board1.setPasswd("1234");
//		board1.setRegDate(LocalDateTime.now());
//		log.info("### board 테이블에 두번째 데이터 입력");
//		boardRepository.save(board1);
//
//		Board board2 = new Board();
//		board2.setName("Erich Fromm");
//		board2.setTitle("성공");
//		board2.setContent(
//				"희망을 버리지 않은 사람일지라도,\r\n" + "현실적으로 사고하며\r\n" + "일체의 그릇된 환상을 버리고\r\n" + "문제를 직시하지 않는 한 성공할 수 없다.");
//		board2.setPasswd("1234");
//		board2.setRegDate(LocalDateTime.now());
//		log.info("### board 테이블에 세번째 데이터 입력");
//		boardRepository.save(board2);
//
//		Board board3 = new Board();
//		board3.setName("Erich Fromm");
//		board3.setTitle("이상");
//		board3.setContent("냉철한 객관성을 소지했는지 여부가 꿈꾸는 공상가와\r\n" + "깨어있는 이상주의자를 구별하게 하는 것이다.");
//		board3.setPasswd("1234");
//		board3.setRegDate(LocalDateTime.now());
//		log.info("### board 테이블에 네번째 데이터 입력");
//		boardRepository.save(board3);
//	}

	/* 게시판 리스트 - findALl() : T타입의 모든 인스턴스를 반환. */
//	@Test
//	public void boardListTest() {
//		List<Board> boardList = (List<Board>) boardRepository.findAll();
//		for (Board board : boardList) {
//			log.info(board.toString());
//		}
//	}
	
	/* 게시판 상세 조회 - findById(Id id) : ID로 엔티티를 검색.*/
//	@Test
//	public void boardDetailTest() {
//		Optional<Board> boardOptional = boardRepository.findById(1L);
//		// isPresent() 메소드를 사용하여 Optional 객체에 저장된 값이 null인지 아닌지를 먼저 확인
//		if(boardOptional.isPresent()) {
//			Board board = boardOptional.get();
//			log.info(board.toString());
//		}
//	}
	
	/* 게시판 수정 - findById() 메서드로 데이터를 가져와서 변경할 필드만 설정해 주며 된다.*/
	@Test
	public void boardUpdateTest() {
		Optional<Board> boardOptional = boardRepository.findById(2L);
		
		if(boardOptional.isPresent()) {
			Board board = boardOptional.get();
			board.setTitle("다빈치");
			board.setContent("단순함은 궁극의 정교함이다.");
			//board.setPasswd("1111");
			
			log.info("### board 테이블에 데이터 수정");
			boardRepository.save(board);
		}
	}
	
	/* 게시판 삭제 - deleteById(ID id) : 주어진 ID를 가진 엔티티를 삭제*/
	@Test
	public void boardDeleteTest() {
		boardRepository.deleteById(4L);
	}
}
