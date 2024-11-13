import { useEffect, useState } from "react";
import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const duration = 5000;

  useEffect(() => {
    // Temporizador para cerrar automáticamente
    const timer = setTimeout(() => {
      setIsVisible(false); // Inicia el deslizamiento hacia la derecha
    }, duration);

    // Temporizador para la barra de progreso
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - 100 / (duration / 100))); // Calcula la disminución progresiva
    }, 100);

    // Limpia los temporizadores cuando el componente se desmonta o se cierra
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration]);

  // Maneja el cierre del toast al hacer clic en la "X"
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose(); // Ejecuta cualquier otra acción pasada en `onClose`
  };

  // Selecciona el icono y estilo según el tipo de notificación
  const icon = type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />;
  const iconColor = type === "success" ? "#236d37" : "#731f23";
  const toastColor = type === "success" ? "#3ab65c" : "#bf333b";

  return (
    isVisible && (
      <div className="toast-container">
        <div
          className={`toast ${!isVisible ? "slide-out" : ""}`}
          style={{ backgroundColor: toastColor }}
        >
          <span className="toast-icon" style={{ color: iconColor }}>
            {icon}
          </span>
          <span className="toast-message">{message}</span>
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
