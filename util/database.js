const mqsql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "newdatastorage",
  password: "123456",
});

module.exports = pool.promise();