const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost', // or the IP address of your MySQL container
  user: 'hirano',
  password: 'hirano',
  database: 'emails_db'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

// Example query
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();