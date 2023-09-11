const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Elige el servicio de correo que quieras usar
  auth: {
    user: 'tu_correo@gmail.com', // Tu dirección de correo electrónico de Gmail
    pass: 'tu_contraseña', // Tu contraseña de Gmail
  },
});

export function enviarCorreo(usuarioId, asunto, contenido) {
  const query = 'SELECT email FROM usuarios WHERE id = ?';
  
  db.query(query, [usuarioId], (err, result) => {
    if (err || result.length === 0) {
      console.error('Error al obtener la dirección de correo electrónico del usuario: ' + err.message);
    } else {
      const emailUsuario = result[0].email;
      
      const opcionesCorreo = {
        from: 'tu_correo@gmail.com', // Tu dirección de correo electrónico
        to: emailUsuario, // La dirección de correo electrónico del usuario
        subject: asunto, // El asunto del correo
        text: contenido, // El contenido del correo en formato de texto plano
      };

      // Envía el correo electrónico
      transporter.sendMail(opcionesCorreo, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico: ' + error.message);
        } else {
          console.log('Correo electrónico enviado con éxito: ' + info.response);
        }
      });
    }
  });
}