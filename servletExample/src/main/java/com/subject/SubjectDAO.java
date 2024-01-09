package com.subject;

import static com.common.JDBCTemplete.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class SubjectDAO {

	/*
	 * getSubjectTotal() 메서드 : 학과 테이블에서 모든 레코드를 반환 메서드. getSubjectTotal(SubjectVO
	 * vo) 메서드 : 검색 시 검색값(검색대상, 검색어)을 vo로 전달 받음
	 * 
	 * @return ArrayList<SubjectVO> 자료형 리턴
	 */
	public ArrayList<SubjectVO> getSubjectTotal(SubjectVO vo) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		SubjectVO svo = null;
		ArrayList<SubjectVO> list = new ArrayList<SubjectVO>();

		StringBuffer sql = new StringBuffer();
		// 학과 전보 조회
		sql.append("select no, s_num, s_name from subject ");
		sql.append(" order by no");

		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			rs = pstmt.executeQuery();

			// ResultSet의 결과에서 모든 행을 각각의 SubjectVO 객체에 저장
			while (rs.next()) {
				// 한 행의 학과 정보를 저장할 VO 객체 생성
				svo = new SubjectVO();
				// 한 행의 학과 정보를 VO 객체에 저장
				svo.setNo(rs.getInt("no"));
				svo.setS_num(rs.getString("s_num"));
				svo.setS_name(rs.getString("s_name"));

				// ArrayList 객체에 원소로 추라
				list.add(svo);
			}
		} catch (SQLException se) {
			System.out.println("조회에 문제가 있어 잠시 후에 다시 진행해 주세요.");
			se.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			close(rs);
			close(pstmt);
			close(con);
		}
		return list;
	}

	/*
	 * getSubjectNum() 메서드 : 학과번호 자동 구하기.
	 * 
	 * @return String 자료형 리턴
	 */
	public String getSubjectNum() {
		StringBuffer sql = new StringBuffer();
		sql.append("select nvl(lpad(max(to_number(LTRIM(s_num, '0')))+1,2,'0'),'01') ");
		sql.append("as subjectNum From subject");

		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String subjectNumber = "";
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			rs = pstmt.executeQuery();
			if (rs.next()) {
				subjectNumber = rs.getString("subjectNum");
			}
		} catch (SQLException se) {
			System.out.println("쿼리 getSubjectNum error = [ " + se + " ] ");
			se.printStackTrace();
		} catch (Exception e) {
			System.out.println("error = [ " + e + " ]");
		} finally {
			close(rs);
			close(pstmt);
			close(con);
		}
		return subjectNumber;
	}

	public boolean subjectInsert(SubjectVO vo) {
		Connection con = null;
		PreparedStatement pstmt = null;
		boolean success = false;
		StringBuffer sql = new StringBuffer();
		sql.append("insert into subject(no, s_num, s_name) ");
		sql.append("values (subject_seq.nextval, ?, ?)");

		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setString(1, vo.getS_num());
			pstmt.setString(2, vo.getS_name());
			int result = pstmt.executeUpdate();
			if (result == 1) {
				success = true;
				// commit(con); // 자동 커밋 해제 시 개발자가 직접 명시
			}
		} catch (SQLException se) {
			System.out.println("입력에 문제가 있어 잠시 후에 다시 진행해 주세요.");
			// rollback(con);
			// se.printStackTrace();
		} catch (Exception e) {
			System.out.println("error = [ " + e + " ]");
			// rollback(con);
		} finally {
			close(pstmt);
			close(con);
		}
		return success;
	}

	public boolean subjectUpdate(SubjectVO svo) {
		StringBuffer sql = new StringBuffer();
		sql.append("update subject set s_name = ? ");
		sql.append("where no = ? ");

		Connection con = null;
		PreparedStatement pstmt = null;
		boolean success = false;
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setString(1, svo.getS_name());
			pstmt.setInt(2, svo.getNo());

			int i = pstmt.executeUpdate();
			if (i == 1) {
				success = true;
				// commit(con);
			}
		} catch (SQLException se) {
			System.out.println("수정에 문제가 있어 잠시 후에 다시 진행해 주세요.");
			// rollback(con);
			// se.printStackTrace(); // 디버깅용
		} catch (Exception e) {
			System.out.println("error = [ " + e + " ] ");
			// rollback(con);
		} finally {
			close(pstmt);
			close(con);
		}
		return success;
	}

	public boolean subjectDelete(SubjectVO vo) {
		StringBuffer sql = new StringBuffer();
		sql.append("delete from subject where no = ?");

		Connection con = null;
		PreparedStatement pstmt = null;
		boolean success = false;

		try {
			con = getConnection();

			pstmt = con.prepareStatement(sql.toString());
			pstmt.setInt(1, vo.getNo());

			int i = 0;
			i = pstmt.executeUpdate();
			if (i == 1) {
				success = true;
				// commit(con);
			}

		} catch (SQLException se) {
			System.out.println("삭제에 문제가 있어 잠시 후에 다시 진행해 주세요.");
			// rollback(con);
			se.printStackTrace(); // 디버깅용
		} catch (Exception e) {
			System.out.println("error = [ " + e + " ] ");
			// rollback(con);
		} finally {
			close(pstmt);
			close(con);
		}
		return success;
	}

	/*
	 * studentDataCheck() 메서드 : 학과에 소속된 학생이 있는지 확인
	 * @return int 자료형 리턴
	 * */
	
	public int studentDataCheck(SubjectVO svo) {
		StringBuffer sql = new StringBuffer();
		sql.append("select count(sd_num) from student ");
		sql.append("where s_num = ?");

		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int data = 0;
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setString(1, svo.getS_num());
			rs = pstmt.executeQuery();
			if (rs.next()) {
				data = rs.getInt(1);
			}
		} catch (SQLException se) {
			System.out.println("조회에 문제가 있어 잠시 후에 다시 진행해 주세요.");
			// rollback(con);
			se.printStackTrace(); // 디버깅용
		} catch (Exception e) {
			System.out.println("error = [ " + e + " ] ");
			// rollback(con);
		} finally {
			close(rs);
			close(pstmt);
			close(con);
		}
		return data;
	}
}
