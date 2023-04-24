const mysql = require('mysql');

function connect() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodedb',
    port: 3306
  });
  connection.connect();
  return connection;
}  

function disconnect(connection) {
  connection.end();
}

function insert(connection, name) {
  connection.query(`INSERT INTO people (name) VALUES ('${name}')`);
}

function select(connection) {
  connection.query('SELECT * FROM people', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
}

function deleteAll(connection) {
  connection.query('DELETE FROM people');
}

function main() {
  const connection = connect();
  insert(connection, 'Maria');
  select(connection);
  deleteAll(connection);
  disconnect(connection);
}

module.exports = {connect,disconnect,main,deleteAll,select,insert}