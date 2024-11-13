import { Resend } from "resend";

// Inicializa Resend con tu clave API
const resend = new Resend("re_CqSHXFbE_3nF4K9tqHixSGWySjoMjSvZK"); // Reemplaza con tu API key de Resend

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Envia el correo
      await resend.sendEmail({
        from: "Portfolio",
        to: "emmanuelgerr@gmail.com",
        subject: `Nuevo mensaje de ${name}`,
        html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
