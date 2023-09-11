const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository')


let register = (req,res) => {
  const {id, nombre, email, contrasena } = req.body;

    let valid = userRepository.addUser(id, nombre ,email  ,contrasena )

    if(valid== true){
      return res.status(201).send(
        { status: 'register ok'}
      );       

    }else{
      return res.status(404).send(
        { status: 'bad register'}
      );  

    }
  
}
let verPerfilUsuario = (req, res) => {
  const usuarioId = req.query.id; // Suponiendo que el ID del usuario se pasa como parte de la URL

  userRepository.obtenerInformacionUsuario(usuarioId, (error, usuario) => {
    if (error) {
      res.status(500).json({
        message: "Error al obtener la información del usuario",
      });
    } else if (!usuario) {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
    } else {
      res.status(200).json({
        message: "Información de perfil obtenida con éxito",
        usuario: usuario, // Devuelve la información del usuario
      });
    }
  });
};


module.exports = {
    register,
    verPerfilUsuario
}