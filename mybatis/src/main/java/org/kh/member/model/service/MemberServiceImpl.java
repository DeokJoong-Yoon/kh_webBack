package org.kh.member.model.service;

import org.apache.ibatis.session.SqlSession;
import org.kh.member.model.common.SqlSessionTemplate;
import org.kh.member.model.dao.MemberDAO;
import org.kh.member.model.vo.MemberVO;

public class MemberServiceImpl {

    public int insertMember(MemberVO mOne) {
        SqlSession session = SqlSessionTemplate.getSqlSession(); 

        MemberDAO memberDAO = new MemberDAO();

        int result = 0;

        try {
            result = memberDAO.insertMember(session, mOne);

            if (result > 0) {
                session.commit();
            } else {
                session.rollback();
            }
        } finally {
            session.close();
        }

        return result;
    }
}