import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "instagram",
  port: 8889, // Default MySQL port is 3306
});
