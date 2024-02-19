package com.boot.example.domain;

import java.util.ArrayList;
import java.util.List;

public class ExampleVOList {
	@SuppressWarnings("unused")
	private List<ExampleVO> list; // SampleDTO를 여러개 담을 수 있게 필드 추가.

	public ExampleVOList() {
		list = new ArrayList<>();
	}
}
