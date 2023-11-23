import { forwardRef, useEffect, useRef } from "react";
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
    const fallBackRef = useRef<HTMLCanvasElement>(null);
    const canvasRef = ref || fallBackRef;
    const { src, width, height, blur = 0, grayscale = 0 } = props;

    useEffect(() => {
      if (canvasRef && "current" in canvasRef && canvasRef.current) {
        drawImage(canvasRef.current, src, [width, height], {
          blur: `${blur}px`,
          grayscale: `${grayscale}%`,
        });
      }
    }, [src, width, height, blur, grayscale, canvasRef]);

    return <canvas ref={canvasRef} height={height} width={width} />;
  }
);
