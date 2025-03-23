//Conexión usando promises a la base de datos MySQL con Node.js 

const mysql = require('mysql2/promise');

async function main() {
  try {
    // Record the start time
    const startTime = new Date();

    // Connect to the database using promises
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'practica_2'
    });

    console.log('Connected to MySQL Database!');

     // Record the end time
    const endTime = new Date();

     // Calculate the time taken to connect
    const timeTaken = endTime - startTime;
    console.log(`Conectado a MySQL Database! Tiempo de ejecucion: ${timeTaken} ms`);
    
    // Execute a query using promise
    const [rows, fields] = await connection.execute('SELECT * FROM pacientes');
    console.log('Query Result:', rows);
    
    

    // Close the connection
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
