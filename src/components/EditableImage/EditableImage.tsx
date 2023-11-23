import { forwardRef, useEffect } from "react";
import { drawImage } from "../../utils/canvas";

export interface EditableImageProps {
  src: string;
  width: number;
  height: number;
  blur?: number;
  grayscale?: number;
}

export const EditableImage = forwardRef<HTMLCanvasElement, EditableImageProps>(
  (props, ref) => {
    const { src, width, height, blur = 0, grayscale = 0 } = props;

    useEffect(() => {
      // @TODO fix typings to avoid in check
      if (ref && "current" in ref && ref.current) {
        drawImage(ref.current, src, [width, height], {
          blur: `${blur}px`,
          grayscale: `${grayscale}%`,
        });
      }
    }, [src, width, height, blur, grayscale, ref]);

    return <canvas ref={ref} height={height} width={width} />;
  }
);
