import { useEffect, useRef } from "react";

interface EditableImageProps {
  src: string;
  width: number;
  height: number;
  blur?: number;
  grayscale?: number;
}

export function EditableImage({
  src,
  width,
  height,
  blur = 0,
  grayscale = 0,
}: EditableImageProps) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      const image = new Image();
      image.src = src;
      image.onload = () => {
        context?.drawImage(image, 0, 0, width, height);
      };
    }
  }, [src]);

  return (
    <canvas
      ref={canvas}
      height={height}
      width={width}
      style={{ display: 'block', filter: `blur(${blur}px) grayscale(${grayscale}%)` }}
    />
  );
}
