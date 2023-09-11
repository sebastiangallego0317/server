const mysql = require("mysql2");
const user = require("../models/user");

const db = mysql.createConnection({
  host: "localhost", // Cambia esto a la dirección de tu servidor MySQL si es necesario
  user: "root",
  password: "",
  database: "tiendavirtual",
});

db.connect();

class userRepository {
  static addUser(id, nombre, email, contrasena) {
    // Inserta el usuario en la base de datos
    const query =
      "INSERT INTO usuarios (id, nombre, email, contrasena) VALUES (?, ?, ?, ?)";
    db.query(query, [id, nombre, email, contrasena], (err, result) => {
      if (err) {
        console.error("Error al registrar el usuario: " + err.message);
        return false;
      } else {
        console.log("Usuario registrado con éxito");
        return true;
      }
    });
  }

  static comprarProducto(usuarioId, productoId, cantidad, callback) {
    const query =
      "INSERT INTO compras (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)";
    db.query(query, [usuarioId, productoId, cantidad], (err, result) => {
      if (err) {
        console.error("Error al registrar la compra: " + err.message);
        callback()
        return false
      } else {
        console.log("Compra realizada con éxito");
        callback()
        return true
      }
    });
  }

  static obtenerInformacionUsuario(usuarioId, callback) {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(query, [usuarioId], (err, result) => {
      if (err) {
        console.error('Error al obtener la información del usuario: ' + err.message);
        callback(err, null);
      } else if (result.length === 0) {
        // Si no se encuentra ningún usuario con el ID especificado
        callback(null, null);
      } else {
        const usuario = result[0]; // Suponiendo que el resultado es un solo usuario
        callback(null, usuario);
      }
    });
  }
}

module.exports = userRepository;
