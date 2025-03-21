import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ images, initialIndex, isOpen, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  return (
    <div>
      {isOpen && (
        <Lightbox
          slides={images.map((image) => ({ src: image }))}
          open={isOpen}
          close={onClose}
          index={initialIndex}
          onIndexChange={setIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
