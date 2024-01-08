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
}
