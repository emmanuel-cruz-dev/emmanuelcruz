import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
      }
    }
  }, [hash]);

  return null;
};

export default HashScroll;
