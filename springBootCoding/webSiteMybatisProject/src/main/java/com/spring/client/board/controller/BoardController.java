package com.spring.client.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.client.board.service.BoardService;
import com.spring.client.board.vo.BoardVO;
import com.spring.common.vo.PageDTO;

import lombok.Setter;

@RequestMapping("/board/*")
@Controller
public class BoardController {

	@Setter(onMethod_ = @Autowired)
	private BoardService boardService;

	/*
	 * 글목록 구현하기(페이징 처리부분 제외 목록 조회) 요청 URL : http://localhost:8080/board/boardList
	 * 
	 * 
	 * // @RequestMapping(value="/boardList", method = RequestMethod.GET) =>
	 * // @GetMapping
	 * 
	 * @GetMapping("/boardList") public String boardList(@ModelAttribute BoardVO
	 * bvo, Model model) { log.info("boardList() 메서드 호출"); // 전체 레코드 조회
	 * List<BoardVO> boardList = boardService.boardList(bvo);
	 * model.addAttribute("boardList", boardList); return "client/board/boardList";
	 * // /WEB-INF/views/client/board/boardList.jsp }
	 */

	/*
	 * 글목록 구현하기(페이징 처리부분 제외 목록 조회) 요청 URL : http://localhost:8080/board/boardList
	 */

	/*
	 * @GetMapping("/boardList") public String boardList(@ModelAttribute BoardVO
	 * bvo, Model model) { List<BoardVO> boardList = boardService.boardList(bvo);
	 * model.addAttribute("boardList", boardList); return "client/board/boardList";
	 * }
	 */

	@GetMapping("/boardList")
	public String boardList(@ModelAttribute BoardVO bvo, Model model) { // 전체 레코드 조회
		List<BoardVO> boardList = boardService.boardList(bvo);
		model.addAttribute("boardList", boardList);

		// 전체 레코드수 반환.
		int total = boardService.boardListCnt(bvo);
		// 페이징 처리
		model.addAttribute("pageMaker", new PageDTO(bvo, total));
		// new PageDTO(CommonVO 또는 CommonVO 하위 클래스의 인스턴스(BoardVO), 총 레코드수)
		return "client/board/boardList";
	}

	/**
	 * 글쓰기 폼 출력하기
	 */
	@GetMapping(value = "/insertForm")
	public String insertForm(BoardVO boardVO) {

		return "client/board/insertForm";
	}

//	@PostMapping("/boardInsert")
//	public String boardInsert(@ModelAttribute BoardVO bvo, Model model) {
//		log.info("boardInsert 호출 성공");
//
//		int result = 0;
//		String url = "";
//
//		result = boardService.boardInsert(bvo);
//		if (result == 1) {
//			url = "/board/boardList";
//		} else {
//			url = "/board/writeForm";
//		}
//
//		return "redirect:" + url;
//	}

	/**
	 * 글쓰기 구현하기 RedirectAttributes 객체는 리다리엑트 시점(return "redirect:/경로")에 한번만 사용되는
	 * 데이터를 전송할 수 있는 addFlashAttribute() 라는 기능을 지원한다.
	 * 
	 * redirect:/board/writeForm?errorMsg=입력에 문제가 있어 다시 진행해 주세요 라고 전송하고자 할 때 이때
	 * ras.addFlashAttribute("errorMsg", "입력에 문제가 있어 다시 진행해 주세요.");
	 * redirect:/board/writeForm으로 명시하면 된다.
	 */
//	@PostMapping("/boardInsert")
//	public String boardInsert(BoardVO bvo, RedirectAttributes ras) {
//		log.info("boardInsert 호출 성공");
//
//		int result = 0;
//		String url = "";
//
//		
//		result = boardService.boardInsert(bvo);
//		if (result == 1) {
//			url = "/board/boardList";
//		} else {
//			ras.addFlashAttribute("errorMsg", "입력에 문제가 있어 다시 진행해 주세요.");
//			url = "/board/writeForm";
//		}
//
//		return "redirect:" + url;
//	}
	@PostMapping("/boardInsert")
	public String boardInsert(BoardVO boardVO) throws Exception {
		boardService.boardInsert(boardVO);

		return "redirect:/board/boardList";
	}

	/**
	 * 글 상세보기 구현
	 */
	@GetMapping("/{boardNumber}")
	public String boardDetail(@PathVariable("boardNumber") int boardNumber, BoardVO boardVO, Model model) {
		boardVO.setBoardNumber(boardNumber);
		BoardVO detail = boardService.boardDetail(boardVO);
		model.addAttribute("detail", detail);
		return "client/board/boardDetail";
	}
	/*
	 * @GetMapping("/boardDetail") public String boardDetail(@ModelAttribute BoardVO
	 * bvo, Model model) {
	 * 
	 * BoardVO detail = boardService.boardDetail(bvo); model.addAttribute("detail",
	 * detail); return "client/board/boardDetail"; }
	 */

	/**
	 * 글수정 폼 출력하기
	 * 
	 * @param : BoardVO(글번호만 boardNumber)
	 * @return : BoardVO
	 */
	@GetMapping(value = "/updateForm")
	public String updateForm(@ModelAttribute BoardVO bvo, Model model) {

		BoardVO updateData = boardService.updateForm(bvo);

		model.addAttribute("updateData", updateData);
		return "client/board/updateForm";
	}

	/**
	 * @param : BoardVO 참고 : RedirectAttributes 객체는 리다이렉트 시점(return "redirect:/경로")에
	 *          한번만 사용되는 데이터를 전송할 수 있는 addFlashAttribute()라는 기능을 지원한다.
	 *          addFlashAttribute() 메서드는 브라우저까지 전송되기는 하지만, URI상에는 보이지 않는 숨겨진 데이터의
	 *          형태로 전달된다.
	 * @throws Exception
	 */
	@PostMapping("/boardUpdate")
	public String boardUpdate(@ModelAttribute BoardVO boardVO) throws Exception {
		boardService.boardUpdate(boardVO);
		return "redirect:/board/" + boardVO.getBoardNumber();
	}

	/*
	 * @PostMapping("/boardUpdate") public String boardUpdate(@ModelAttribute
	 * BoardVO bvo) throws Exception {
	 * 
	 * int result = 0; String url = "";
	 * 
	 * result = boardService.boardUpdate(bvo);
	 * 
	 * if (result == 1) { url = "/board/boardDetail?boardNumber=" +
	 * bvo.getBoardNumber(); } else { url = "/board/updateForm?boardNumber=" +
	 * bvo.getBoardNumber(); } return "redirect:" + url; }
	 */
	/*
	 * @PostMapping("/boardDelete") public String boardDelete(@ModelAttribute
	 * BoardVO bvo, RedirectAttributes ras) throws Exception {
	 * 
	 * int result = 0;
	 * 
	 * String url = "";
	 * 
	 * result = boardService.boardDelete(bvo);
	 * 
	 * // result = 0; if (result == 1) { url = "/board/boardList"; } else {
	 * ras.addFlashAttribute("errorMsg", "삭제에 문제가 있어 다시 진행해 주세요."); url =
	 * "/board/boardDetail?boardNumber=" + bvo.getBoardNumber(); } return
	 * "redirect:" + url; }
	 */

	@PostMapping(value = "/boardDelete")
	public String boardDelete(@ModelAttribute BoardVO boardVO) {
		boardService.boardDelete(boardVO);
		return "redirect:/board/boardList";
	}

	/*
	 * @ResponseBody
	 * 
	 * @PostMapping(value = "/replyCount", produces = MediaType.TEXT_PLAIN_VALUE)
	 * public String replyCount(@RequestParam("boardNumber") int boardNumber) {
	 * 
	 * int result = 0; result = boardService.replyCount(boardNumber);
	 * 
	 * // return result + ""; return String.valueOf(result); }
	 */

	@ResponseBody
	@PostMapping(value = "/pwdConfirm", produces = "text/plain; charset=UTF-8")
	public String pwdConfirm(BoardVO boardVO) {
		int result = boardService.pwdConfirm(boardVO);
		return (result == 1) ? "일치" : "불일치";
	}
	/*
	 * @ResponseBody
	 * 
	 * @PostMapping(value = "/pwdConfirm", produces = "text/plain; charset=UTF-8")
	 * public String pwdConfirm(BoardVO bvo) {
	 * 
	 * // 아래 변수 int result = boardService.pwdConfirm(bvo); String value = ""; if
	 * (result == 1) { value = "일치"; } else { value = "불일치"; } return value; //
	 * value 값 자체를 브라우저에 출력 }
	 */
	/*
	 * @ResponseBody
	 * 
	 * @PostMapping(value="pwdConfirm", produces="text/plain; charset=UTF-8") public
	 * String pwdConfirm(BoardVO bvo) { // log.info("pwdConfirm 호출 성공"); int result
	 * = boardService.pwdConfirm(bvo); return (result == 1) ? "일치" : "불일치"; }
	 */

}
