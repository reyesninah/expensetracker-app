package com.ibm.training.bootcamp.casestudy.expensetracker.dao;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import org.hsqldb.jdbc.JDBCDataSource;

public class UserDaoImpl {

	private static UserDaoImpl INSTANCE;

	private JDBCDataSource dataSource;

	static public UserDaoImpl getInstance() {

		UserDaoImpl instance;
		if (INSTANCE != null) {
			instance = INSTANCE;
		} else {
			instance = new UserDaoImpl();
			INSTANCE = instance;
		}

		return instance;
	}

	private UserDaoImpl() {
		init();
	}

	private void init() {
		dataSource = new JDBCDataSource();
		dataSource.setDatabase("jdbc:hsqldb:mem:USER");
		dataSource.setUser("username");
		dataSource.setPassword("password");

		createExpItemTbl();
		createExpCategoryTbl();
	}
	

	private void createExpItemTbl() {
		String createSql = "CREATE TABLE tblExpItem " + 
				"(expId INTEGER IDENTITY PRIMARY KEY, " + 
				" expName VARCHAR(255), "+ 
				" expAmount VARCHAR(255)," +
				" expDate DATE," + 
				" categId INTEGER)";

		try (Connection conn = dataSource.getConnection(); 
				Statement stmt = conn.createStatement()) {

			stmt.executeUpdate(createSql);

		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	private void createExpCategoryTbl() {
		String createSql = "CREATE TABLE expCategoryTbl " + 
				"(categId INTEGER IDENTITY PRIMARY KEY, " + 
				" categName VARCHAR(255), "+ 
				" categBudget VARCHAR(255)," +
				" expDate DATE)";

		try (Connection conn = dataSource.getConnection(); 
				Statement stmt = conn.createStatement()) {

			stmt.executeUpdate(createSql);

		} catch (SQLException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

}
