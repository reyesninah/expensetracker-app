package com.ibm.training.bootcamp.casestudy.expensetracker.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hsqldb.jdbc.JDBCDataSource;

import com.ibm.training.bootcamp.casestudy.expensetracker.domain.Expense;

public class ExpenseDaoImpl implements ExpenseDao{

	private static ExpenseDaoImpl INSTANCE;
	
	private JDBCDataSource dataSource;
	
	static public ExpenseDaoImpl getInstance() {
		
		ExpenseDaoImpl instance;
		if(INSTANCE != null) {
			instance= INSTANCE;
		}else {
			instance = new ExpenseDaoImpl();
			INSTANCE = instance;
		}
		return instance;
	}
	
	private ExpenseDaoImpl() {
		init();
	}
	
	private void init() {
		dataSource = new JDBCDataSource();
		dataSource.setDatabase("jdbc:hsqldb:mem:EXPTRACKER");
		dataSource.setUser("username");
		dataSource.setPassword("password");
		
		createExpItemTbl();
		insertInitCategory();
	}


	private void createExpItemTbl() {
		String createSql = "CREATE TABLE expItemTbl " + 
				"(expenseId INTEGER IDENTITY PRIMARY KEY, " + 
				" expenseName VARCHAR(255), "+ 
				" expenseAmount DOUBLE," +
				" expenseDate DATE," + 
				" categoryId INTEGER, FOREIGN KEY(categoryId)"
				+ "REFERENCES expCategoryTbl(categoryId)";

		try (Connection conn = dataSource.getConnection(); 
				Statement stmt = conn.createStatement()) {

			stmt.executeUpdate(createSql);

		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
	

	private void insertInitCategory() {
		add(new Expense("Fita Tuna Spreadz", 20.00d, new java.sql.Date(2018-10-02), 01L));
		add(new Expense("Choko choko", 5.00d, new java.sql.Date(2018-10-07), 02L));
		add(new Expense("Snacku", 20.00d, new java.sql.Date(2018-10-29), 03L));
		
	}

	public void add(Expense expense) {
		String insertSql = "INSERT INTO expItemTbl (expenseName"
				+ "expenseAmount, expenseDate, categoryId) VALUES (?, ?, ?, ?)";
		
		try(Connection conn = dataSource.getConnection();
				PreparedStatement ps = conn.prepareStatement(insertSql)){
			
			ps.setString(1, expense.getExpenseName());
			ps.setDouble(2, expense.getExpenseAmount());
			ps.setDate(3, (java.sql.Date) expense.getExpenseDate());
			ps.setLong(4, expense.getCategoryId());
			
		}catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public List<Expense> findAllExpenses() {
		List<Expense> expenses = new ArrayList<>();
		
		String sql = "SELECT expenseId, expenseName, expenseAmount"
				+ "expenseDate, categoryId FROM expItemTbl";
		
		try(Connection conn = dataSource.getConnection();
				PreparedStatement ps = conn.prepareStatement(sql)){
			
			ResultSet results = ps.executeQuery();
			
			while(results.next()) {
				Expense expense = new Expense(Long.valueOf(
						results.getInt("expenseId")),
						results.getString("expenseName"),
						results.getDouble("expenseAmount"),
						results.getDate("expenseDate"),
						Long.valueOf(results.getLong("categoryId")));
				
				expenses.add(expense);
			}
		}catch(SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		return expenses;
	}
	
	
}
