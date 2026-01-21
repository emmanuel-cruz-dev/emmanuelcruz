import { FC } from "react";
import { FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useToast } from "../../hooks";
import {
  ICON_COLOR_ERROR,
  ICON_COLOR_SUCCESS,
  SUCCESS,
  TOAST_COLOR_ERROR,
  TOAST_COLOR_SUCCESS,
} from "../../constants/constants";
import { ToastProps } from "../../types/types";

const Toast: FC<ToastProps> = ({ message, type, show, onClose }) => {
  const { progress, isEntering, isVisibleSlide, handleClose } = useToast({
    show,
    onClose,
  });

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
