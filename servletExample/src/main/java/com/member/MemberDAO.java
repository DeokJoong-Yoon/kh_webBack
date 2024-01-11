package com.member;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import static com.common.JDBCTemplete.*;

public class MemberDAO {
	/**
	 * login() 메서드 : 로그인 처리
	 * @param (MemberDTO dto)
	 * @return MemberDTO 자료형 리턴
	 */

	public MemberDTO login(MemberDTO dto) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		MemberDTO memberDTO = null;
		try {
			con = getConnection();
			StringBuffer query = new StringBuffer();
			query.append("select * from t_member ");
			query.append(" where m_id=? and m_passwd = ?");

			pstmt = con.prepareStatement(query.toString());
			pstmt.setString(1, dto.getMemberId());
			pstmt.setString(2, dto.getMemberPasswd());
			rs = pstmt.executeQuery();
			if (rs.next()) {
				memberDTO = new MemberDTO();
				memberDTO.setMemberId(rs.getString("m_id"));
				memberDTO.setMemberName(rs.getString("m_name"));
				memberDTO.setMemberEmail(rs.getString("m_email"));
			}
		} catch (SQLException se) {
			System.out.println("SQL 쿼리 실행 실패");
			se.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			close(rs);
			close(pstmt);
			close(con);
		}
		return memberDTO;
	}
}
