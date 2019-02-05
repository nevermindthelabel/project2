require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: "traffic_db",
    host: localhost,
    dialect: "mysql"
  },
  test: {
    username: process.env.USER,
    password: process.env.PASS,
    database: "testdb",
<<<<<<< Updated upstream
    host: localhost,
    dialect: "mysql"
=======
    host: process.env.HOST,
    dialect: "mysql",
    logging: false
>>>>>>> Stashed changes
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
