// get client
import mysql from "mysql2";

// create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users_db",
  password: "#Kommefryser2",
  multipleStatements: true,
});

export { connection };
