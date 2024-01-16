package edu.kh.test.user.model.dao;

import static common.JDBCTemplete.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import edu.kh.test.user.model.vo.UserDTO;

public class UserDAO {
	public UserDTO userSearch(UserDTO vo) {
		Connection con = null;
		PreparedStatement pstmt = null;
		StringBuffer sql = new StringBuffer();
		ResultSet rs = null;
		UserDTO svo = null;
		sql.append("select user_no, user_id, user_name, user_age ");
		sql.append(" where user_no = ? ");
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setInt(1, vo.getUserNo());
			rs = pstmt.executeQuery();
			if (rs.next()) {
				svo = new UserDTO();
				svo.setUserNo(rs.getInt("user_no"));
				svo.setUserId(rs.getString("user_id"));
				svo.setUserName(rs.getString("s_name"));
				svo.setUserAge(rs.getInt("user_age"));
			}
		} catch (SQLException se) {
			System.out.println("입력에 문제가 있어 잠시 후에 다시 진행해 주세요.");
			// rollback(con);
			// se.printStackTrace();
		} catch (Exception e) {
			System.out.println("error = [ " + e + " ]");
			// rollback(con);
		} finally {
			close(rs);
			close(pstmt);
			close(con);
		}
		return svo;
	}
}
