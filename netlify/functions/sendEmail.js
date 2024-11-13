import fetch from "node-fetch";

exports.handler = async (event, context) => {
  // Si la petición no es POST, retorna un error
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Método no permitido" }),
    };
  }

  // Obtener los datos enviados desde el formulario
  const { name, email, message } = JSON.parse(event.body);

  // Preparar los datos para la API de Resend
  const data = {
    personalizations: [{ to: [{ email: "emmanuelgerr@gmail.com" }] }],
    from: { email: email },
    subject: `Nuevo mensaje de ${name}`,
    content: [
      {
        type: "text/plain",
        value: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      },
    ],
  };

  // Realizar la solicitud a la API de Resend usando la clave de la variable de entorno
  const response = await fetch("https://api.resend.com/v1/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`, // Aquí usamos la variable de entorno
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Verificar si la solicitud fue exitosa
  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Mensaje enviado exitosamente" }),
    };
  } else {
    const errorResponse = await response.json();
    console.error("Error en la API de Resend:", errorResponse);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error al enviar el mensaje",
        error: errorResponse,
      }),
    };
  }
};
