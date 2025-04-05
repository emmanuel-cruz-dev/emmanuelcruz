import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import useToast from "../../hooks/useToast";
import { FC } from "react";
import { ToastProps } from "../../types/types";

// Definir constantes para los tipos de notificación
const SUCCESS = "success";

// Definir constantes para los estilos
const ICON_COLOR_SUCCESS = "#236d37";
const ICON_COLOR_ERROR = "#731f23";
const TOAST_COLOR_SUCCESS = "#3ab65c";
const TOAST_COLOR_ERROR = "#bf1d1d";

const Toast: FC<ToastProps> = ({ message, type, show, onClose }) => {
  const { progress, isEntering, isVisibleSlide, handleClose } = useToast({
    show,
    onClose,
  });
  // Selecciona el icono y estilo según el tipo de notificación
  const icon = type === SUCCESS ? <FaCheckCircle /> : <FaExclamationCircle />;
  const iconColor = type === SUCCESS ? ICON_COLOR_SUCCESS : ICON_COLOR_ERROR;
  const toastColor = type === SUCCESS ? TOAST_COLOR_SUCCESS : TOAST_COLOR_ERROR;

  return (
    show && (
      <article className="toast-container">
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
      </article>
    )
  );
};

export default Toast;
