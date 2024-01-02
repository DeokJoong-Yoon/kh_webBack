package com.example;

public class Calc {
	private int result;

	public Calc() {
		result = 0;
	}

	public Calc(int number1, int number2, String operator) {
		switch (operator) {
		case "+":
			result = number1 + number2;
			break;
		case "-":
			result = number1 - number2;
			break;
		case "*":
			result = number1 * number2;
			break;
		case "/":
			if (number2 != 0)
				result = number1 / number2;
			else
				result = 0;
			break;
		}
	}

	public int getResult() {
		return result;
	}
}
