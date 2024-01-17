package org.kh.member.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.member.model.vo.MemberVO;

public class MemberDAO {
	public int insertMember(SqlSession session, MemberVO mOne) {
		int result = session.insert("mybatis.insertMemeber", mOne);

		return result;
	}

	public List<MemberVO> selectMember(SqlSession session) {
		List<MemberVO> mList = session.selectList("mybatis.selectMember");
		return mList;
	}
}
