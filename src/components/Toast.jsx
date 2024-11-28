import { useEffect, useState } from "react";
import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Toast = ({ message, type, show, onClose }) => {
  const [progress, setProgress] = useState(100);
  const [isVisibleSlide, setIsVisibleSlide] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    if (show) {
      setIsEntering(true);
      setIsVisibleSlide(true);
      setProgress(100);

      // Temporizador para la barra de progreso
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - 100 / (5000 / 100)));
      }, 100);

      // Oculta el toast después de 5 segundos
      const timeout = setTimeout(() => {
        setIsVisibleSlide(false);

        // Espera a que termine la animación antes de desmontar el componente
        setTimeout(() => {
          onClose();
        }, 500); // Duración de la animación `slide-out`
      }, 5000);

      // Remueve la clase de entrada después de la animación
      setTimeout(() => {
        setIsEntering(false);
      }, 500);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(timeout);
      };
    }
  }, [show, onClose]);

  // Maneja el cierre del toast al hacer clic en la "X"
  const handleClose = () => {
    setIsVisibleSlide(false);
    setTimeout(() => {
      onClose();
    }, 500); // Espera la duración de la animación
  };

  // Selecciona el icono y estilo según el tipo de notificación
  const icon = type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />;
  const iconColor = type === "success" ? "#236d37" : "#731f23";
  const toastColor = type === "success" ? "#3ab65c" : "#bf1d1d";

  return (
    show && (
      <div className="toast-container">
        <div
          className={`toast select-none ${
            isEntering
              ? "toast__slide-in"
              : isVisibleSlide
              ? ""
              : "toast__slide-out"
          }`}
          style={{ backgroundColor: toastColor }}
        >
          <span className="toast-icon" style={{ color: iconColor }}>
            {icon}
          </span>
          <span className="toast-message text-center">{message}</span>
          <button className="toast-close" onClick={handleClose}>
            <FaTimes />
          </button>
          <div
            className="progress-bar"
            style={{ width: `${progress}%`, backgroundColor: iconColor }}
          ></div>
        </div>
      </div>
    )
  );
};

export default Toast;
