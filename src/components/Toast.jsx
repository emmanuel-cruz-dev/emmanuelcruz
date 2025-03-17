import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import useToast from "../hooks/useToast";

const Toast = ({ message, type, show, onClose }) => {
  const { progress, isEntering, isVisibleSlide, handleClose } = useToast({
    show,
    onClose,
  });
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
