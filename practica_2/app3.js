//Conexión usando pool a la base de datos MySQL con Node.js 

const mysql = require('mysql2');
// Record the start time
const startTime = new Date();

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practica_2',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

 // Record the end time
 const endTime = new Date();
  
 // Calculate the time taken to connect
 const timeTaken = endTime - startTime;
 console.log(`Conectado a MySQL Database! Tiempo de ejecucion: ${timeTaken} ms`);

// Query the database using a pooled connection
pool.query('SELECT * FROM pacientes', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});
