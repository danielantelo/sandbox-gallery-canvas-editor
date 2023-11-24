export function drawImage(
  canvas: HTMLCanvasElement,
  src: string,
  dimensions: [number, number],
  filters?: { [key: string]: string }
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw Error("issue with 2d context on canvas");

  const image = new Image();
  // fix tainted exception for downloading x-origin
  image.crossOrigin = "anonymous";
  image.src = src;
  image.onload = () => {
    if (filters) {
      ctx.filter = Object.keys(filters)
        .map((key) => `${key}(${filters[key]})`)
        .join(" ");
    }
    ctx.drawImage(image, 0, 0, dimensions[0], dimensions[1]);
  };
}

export function downloadAsImage(canvas: HTMLCanvasElement, fileName: string) {
  const imageContent = canvas.toDataURL();
  const downloadLink = document.createElement("a");
  downloadLink.download = fileName;
  downloadLink.href = imageContent;
  downloadLink.click();
}
