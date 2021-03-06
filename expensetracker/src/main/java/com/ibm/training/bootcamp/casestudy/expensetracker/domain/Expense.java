package com.ibm.training.bootcamp.casestudy.expensetracker.domain;

import java.util.Date;

public class Expense {
	
	Long expenseId;
	private String expenseName;
	private double expenseAmount;
	private Date expenseDate;
	Long categoryId;
	
	public Expense() {
		
	}
	
	public Expense(String expenseName,double expenseAmount,
			Date expenseDate,Long categoryId) {
		this(null, expenseName, expenseAmount, expenseDate,
				categoryId);
	}
	
	public Expense(Long expenseId, String expenseName, 
			double expenseAmount, Date expenseDate,
			Long categoryId) {
		this.expenseName = expenseName;
		this.expenseAmount = expenseAmount;
		this.expenseDate = expenseDate;
		this.categoryId = categoryId;
	}

	public Long getExpenseId() {
		return expenseId;
	}

	public void setExpenseId(Long expenseId) {
		this.expenseId = expenseId;
	}

	public String getExpenseName() {
		return expenseName;
	}

	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}

	public double getExpenseAmount() {
		return expenseAmount;
	}

	public void setExpenseAmount(double expenseAmount) {
		this.expenseAmount = expenseAmount;
	}

	public Date getExpenseDate() {
		return expenseDate;
	}

	public void setExpenseDate(Date expenseDate) {
		this.expenseDate = expenseDate;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	
	
}
