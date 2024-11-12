// netlify/functions/sendEmail.js

const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Only POST requests allowed" }),
    };
  }

  const { user_name, user_email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Cambia según tu proveedor de correo
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
      user: process.env.EMAIL_USER, // Email desde variables de entorno
      pass: process.env.EMAIL_PASS, // Contraseña desde variables de entorno
    },
  });

  try {
    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`, // Remitente
      to: process.env.EMAIL_RECEIVER, // Correo donde recibirás los mensajes
      subject: `Nuevo mensaje de ${user_name}`, // Asunto
      text: message, // Mensaje en texto plano
      html: `<p><strong>Nombre:</strong> ${user_name}</p>
             <p><strong>Correo:</strong> ${user_email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`, // HTML opcional
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado con éxito" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al enviar el correo" }),
    };
  }
};
