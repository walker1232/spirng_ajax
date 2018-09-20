package com.gms.web.examin;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MariadbConn {
	public static void main(String[] args) {
		MariadbConn c = new MariadbConn();
		System.out.println(c.exam());
	}
	public String exam() {
		Connection conn;
		Statement stmt;
		String s = "";
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mariadb://localhost:3306/mariadb",
											   "mariadb",
											   "mariadb");
			stmt = conn.createStatement();
			String sql = String.format(" SELECT content FROM BOARD WHERE bno='1' ");
			ResultSet rs = stmt.executeQuery(sql);
			if(rs.next()) {
				s = rs.getString("content");
			}else {
				s = "연결실패";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return s;
	}
}