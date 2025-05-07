//Conexión directa a la base de datos MySQL con Node.js 

const mysql = require('mysql2');

// Crea una conexion a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practica_2'
});

// Record the start time
const startTime = new Date();

// Connect to the database
connection.connect((err) => {
  if (err) throw err;

  // Record the end time
  const endTime = new Date();
  
  // Calculate the time taken to connect
  const timeTaken = endTime - startTime;
  console.log(`Conectado a MySQL Database! Tiempo de ejecucion: ${timeTaken} ms`);
  
  // Example query
  connection.query('SELECT * FROM pacientes', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });

  // Close the connection
  connection.end();
});