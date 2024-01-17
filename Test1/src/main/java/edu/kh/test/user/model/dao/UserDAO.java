package edu.kh.test.user.model.dao;

import static edu.kh.test.common.JDBCTemplete.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import edu.kh.test.user.model.vo.UserDTO;

public class UserDAO {
	// 클래스 자신의 타입으로 정적 필드 선언
	private static UserDAO instance = null;

	// 외부에서 호출할 수 있는 정적 메소드인 getInstance() 선언하여 인스턴스 반환.
	public static UserDAO getInstance() {
		if (instance == null) {
			instance = new UserDAO();
		}
		return instance;
	}

	private UserDAO() {
	}

	public UserDTO memberSelect(UserDTO dt) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		UserDTO dto = null;

		StringBuffer sql = new StringBuffer();
		sql.append("select user_no, user_id, user_name, user_age ");
		sql.append(" from tb_user where user_no = ? ");
		try {
			con = getConnection();
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setInt(1, dt.getUserNo());
			rs = pstmt.executeQuery();
			if (rs.next()) {
				dto = new UserDTO();
				dto.setUserNo(rs.getInt("user_no"));
				dto.setUserId(rs.getString("user_id"));
				dto.setUserName(rs.getString("user_name"));
				dto.setUserAge(rs.getInt("user_age"));
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
		return dto;
	}
}
