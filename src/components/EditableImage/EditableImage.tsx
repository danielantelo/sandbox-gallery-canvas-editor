import { useEffect, useRef } from "react";

export function EditableImage({ src }: { src: string }) {
  const canvas = useRef<HTMLCanvasElement>();

  useEffect(() => {
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      const image = new Image();
      image.src = src;
      image.onload = () => {
        context?.drawImage(image, 0, 0, image.width, image.height);
      };
    }
  }, []);

  // const onDownload = () => {
  //   var imgBase64 = canvas.current.toDataURL();
  //   // console.log("imgBase64:", imgBase64);
  //   var imgURL = "data:image/" + imgBase64;
  //   var triggerDownload = $("<a>").attr("href", imgURL).attr("download", "layout_"+new Date().getTime()+".jpeg").appendTo("body");
  //   triggerDownload[0].click();
  //   triggerDownload.remove();
  // };

  return (
    <>
      {/* <canvas ref={canvas} height={500} width={500} />
      <button onClick={onDownload}>dl</button> */}
    </>
  );
}
