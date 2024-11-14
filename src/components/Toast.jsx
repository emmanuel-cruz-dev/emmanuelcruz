import { useEffect, useState } from "react";
import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Toast = ({ message, type, show }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Temporizador para la barra de progreso
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - 100 / (5000 / 100))); // Calcula la disminución progresiva
    }, 100);

    // Limpia los temporizadores cuando el componente se desmonta o se cierra
    return () => {
      clearInterval(progressInterval);
    };
  }, [5000]);

  // Maneja el cierre del toast al hacer clic en la "X"
  const handleClose = () => {
    console.log("equis");
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 4000);
  };

  // Selecciona el icono y estilo según el tipo de notificación
  const icon = type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />;
  const iconColor = type === "success" ? "#236d37" : "#731f23";
  const toastColor = type === "success" ? "#3ab65c" : "#bf333b";
  const isValid = isVisible && show;

  return (
    isValid && (
      <div className="toast-container">
        <div
          className={`toast select-none ${!isVisible ? "slide-out" : ""} ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
