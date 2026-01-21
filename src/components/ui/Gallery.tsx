import { FC } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useGalleryLogic } from "../../hooks";
import { GalleryProps } from "../../types/types";

const Gallery: FC<GalleryProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const { handleIndexChange } = useGalleryLogic(initialIndex);

  return (
    <div>
      {isOpen && (
        <Lightbox
          slides={images.map((image) => ({ src: image }))}
          open={isOpen}
          close={onClose}
          index={initialIndex}
          carousel={{
            currentIndex: initialIndex,
            onIndexChange: handleIndexChange,
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
