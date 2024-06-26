package com.spring.client.board.domain;

import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
//@EqualsAndHashCode(callSuper=false)
@ToString
/* JPA를 사용해서 테이블와 매핑할 클래스 - 이 어노테이션이 명시된 클래스는 JPA가 관리하는 것으로 엔티티라 부른다. */
@Entity
/* 엔티티와 매핑할 테이블을 지정 - 생략하면 매팡할 엔티티 이름을 테이블명으로 사용. name 속성을 이용해서 테이블명 지정. */
@Table(name = "boot_board")
@SequenceGenerator(name = "boot_board_generator", sequenceName = "boot_board_seq", initialValue = 1, allocationSize = 1)
public class Board /* extends CommonVO */{

	/* 기본키(엔티티를 식별할 때 사용할 필드를 지정할 때 사용)를 매핑 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "boot_board_generator")
	private Long no;

	/* 객체 필드를 테이블 컬럼에 매핑 */
	@Column(length = 15, nullable = false)
	private String name;

	@Column(nullable = false)
	private String title;

	@Lob
	private String content;

	@Column(length = 20, nullable = false)
	private String passwd;

	/*
	 * 하이버네이트가 제공하는 기능으로 엔티티가 생성(@CreationTimestamp)되거나 업데이트(@UpdateTimestamp)되는 시점의
	 * 날짜 데이터를 기록하는 설정
	 */

	@CreationTimestamp
	@ColumnDefault(value = "sysdate")
	private LocalDateTime regDate;

	@ColumnDefault(value = "0")
	private int hit;
	
	//@Transient : 필드를 매핑하지 않을 때 사용

}