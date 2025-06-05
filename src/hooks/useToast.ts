import {
  PROGRESS_DECREMENT,
  PROGRESS_INTERVAL_MS,
  SLIDE_OUT_DURATION_MS,
  TOAST_DURATION_MS,
} from "../constants/constants";
import { UseToastProps, UseToastReturn } from "../types/types";
import { useEffect, useState } from "react";

const useToast = ({ show, onClose }: UseToastProps): UseToastReturn => {
  const [progress, setProgress] = useState(100);
  const [isVisibleSlide, setIsVisibleSlide] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    if (show) {
      setIsEntering(true);
      setIsVisibleSlide(true);
      setProgress(100);

      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - PROGRESS_DECREMENT));
      }, PROGRESS_INTERVAL_MS);

      const timeout = setTimeout(() => {
        setIsVisibleSlide(false);

        setTimeout(() => {
          onClose();
        }, SLIDE_OUT_DURATION_MS);
      }, TOAST_DURATION_MS);

      setTimeout(() => {
        setIsEntering(false);
      }, SLIDE_OUT_DURATION_MS);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(timeout);
      };
    }
  }, [show, onClose]);

  const handleClose = () => {
    setIsVisibleSlide(false);
    setTimeout(() => {
      onClose();
    }, SLIDE_OUT_DURATION_MS);
  };

  return { progress, isEntering, isVisibleSlide, handleClose };
};

export default useToast;
