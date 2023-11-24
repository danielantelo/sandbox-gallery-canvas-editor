export async function downloadImage(src: string, fileName: string) {
  const blob = await fetch(src).then((res) => res.blob());
  const content = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = content;
  link.download = fileName;
  link.click();
}
