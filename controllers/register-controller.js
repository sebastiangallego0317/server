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


module.exports = {
    register
}