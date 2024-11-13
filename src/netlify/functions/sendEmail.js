const { Resend } = require("@resend/node");
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  try {
    await resend.emails.send({
      from: "tu-email@tudominio.com",
      to: "tu-destino@tudominio.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email enviado con éxito" }),
    };
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al enviar el email" }),
    };
  }
};
