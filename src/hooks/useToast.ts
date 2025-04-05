import { useEffect, useState } from "react";

const PROGRESS_INTERVAL_MS = 100;
const TOAST_DURATION_MS = 5000;
const SLIDE_OUT_DURATION_MS = 500;
const PROGRESS_DECREMENT = 100 / (TOAST_DURATION_MS / PROGRESS_INTERVAL_MS);

const useToast = ({ show, onClose }) => {
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
        setProgress((prev) => Math.max(0, prev - PROGRESS_DECREMENT));
      }, PROGRESS_INTERVAL_MS);

      // Oculta el toast después de 5 segundos
      const timeout = setTimeout(() => {
        setIsVisibleSlide(false);

        // Espera a que termine la animación antes de desmontar el componente
        setTimeout(() => {
          onClose();
        }, SLIDE_OUT_DURATION_MS); // Duración de la animación `slide-out`
      }, TOAST_DURATION_MS);

      // Remueve la clase de entrada después de la animación
      setTimeout(() => {
        setIsEntering(false);
      }, SLIDE_OUT_DURATION_MS);

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
    }, SLIDE_OUT_DURATION_MS); // Espera la duración de la animación
  };

  return { progress, isEntering, isVisibleSlide, handleClose };
};

export default useToast;
