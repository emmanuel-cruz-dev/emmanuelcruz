declare module "yet-another-react-lightbox" {
  import { FC } from "react";

  interface LightboxProps {
    slides: { src: string }[];
    open: boolean;
    close: () => void;
    index?: number;
    carousel?: {
      currentIndex: number;
      onIndexChange?: (index: number) => void;
    };
  }

  const Lightbox: FC<LightboxProps>;
  export default Lightbox;
}
