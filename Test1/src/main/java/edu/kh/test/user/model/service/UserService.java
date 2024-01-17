package edu.kh.test.user.model.service;

import edu.kh.test.user.model.dao.UserDAO;
import edu.kh.test.user.model.vo.UserDTO;

public class UserService {
	private static UserService instance = null;
	
	private UserDAO dao = UserDAO.getInstance();
	
	private UserService() {
		
	}
	
	public static UserService getInstance() {
		if (instance == null) {
			instance = new UserService();
		}
		return instance;
	}
	
	public UserDTO memberSelect(UserDTO dto) {
		UserDTO userDTO = dao.memberSelect(dto);
		return userDTO;
	}
}
