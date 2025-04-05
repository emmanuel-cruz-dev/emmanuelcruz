import { useState } from "react";
import { useGalleryLogicReturn } from "../types/types";

const useGalleryLogic = (initialIndex: number): useGalleryLogicReturn => {
  const [index, setIndex] = useState(initialIndex);
  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  return { index, handleIndexChange };
};

export default useGalleryLogic;
