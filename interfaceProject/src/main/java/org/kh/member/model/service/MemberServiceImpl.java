package org.kh.member.model.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.member.model.dao.MemberDAO;
import org.kh.member.model.vo.MemberVO;

import mybatis.SqlSessionTemplate;

public class MemberServiceImpl {
	private MemberDAO memberDAO;

	public MemberServiceImpl() {
		memberDAO = new MemberDAO();
	}

	public int insertMember(MemberVO mOne) {
		SqlSession session = SqlSessionTemplate.getSqlSession();

		int result = memberDAO.insertMember(session, mOne);

		if (result > 0) {
			session.commit();
		} else {
			session.rollback();
		}
		
		session.close();
		
		return result;
	}
	
	public List<MemberVO> selectMember() {
		SqlSession session = SqlSessionTemplate.getSqlSession();
		
		List<MemberVO> mList = memberDAO.selectMember(session);
		session.close();
		return mList;
	}
}