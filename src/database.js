import mysqlConnection from "mysql2/promise";

const propieties = {
  host: "localhost",
  user: "root",
  password: "",
  database: "rest-api",
};

export const pool = mysqlConnection.createPool(propieties);
