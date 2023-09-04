const mysql = require('mysql2');
const user = require('../models/user');

const db = mysql.createConnection({
  host: 'localhost',  // Cambia esto a la dirección de tu servidor MySQL si es necesario
  user: 'root',
  password: '',
  database: 'tiendavirtual'
});


db.connect();

class userRepository {
  static addUser(id,nombre,email,contrasena){
// Inserta el usuario en la base de datos
const query = 'INSERT INTO usuarios (id, nombre, email, contrasena) VALUES (?, ?, ?, ?)';
db.query(query, [id,nombre, email, contrasena], (err, result) => {
  if (err) {
    console.error('Error al registrar el usuario: ' + err.message);
    return false
  } else {
    console.log('Usuario registrado con éxito');
    return true
  }})
  }
}

module.exports=userRepository;