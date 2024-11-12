import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/30 rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <form className="text-sm" method="POST" netlify>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            ></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full border bg-white/20 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            ></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/20 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-gray-700"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe un mensaje..."
            rows="5"
            className="w-full bg-white/20 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
    </div>
  );
};

export default ContactForm;
