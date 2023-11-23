import { drawImage, downloadAsImage } from "./imaging";

const canvas = document.createElement("canvas");

describe("drawImage", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("downloads an image", () => {
    const img = {
      click: jest.fn(),
      crossOrigin: "",
      src: "",
    } as unknown as HTMLImageElement;

    const drawSpy = jest.fn(() => ({}));
    jest.spyOn(document, "createElement").mockImplementation(() => img);
    jest
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockImplementationOnce(
        () => ({ drawImage: drawSpy } as unknown as RenderingContext)
      );

    drawImage(canvas, "/myimage.png", [100, 50]);

    expect(img.crossOrigin).toBe("anonymous");
    expect(img.src).toBe("/myimage.png");

    img.onload?.({} as Event);
    expect(drawSpy).toHaveBeenCalledTimes(1);
  });
});

describe("downloadAsImage", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("creates an anchor element and clicks on it to download the content of the canvas as an image", () => {
    const a = {
      click: jest.fn(),
      download: "",
      href: "",
    } as unknown as HTMLAnchorElement;

    jest.spyOn(document, "createElement").mockImplementation(() => a);
    jest
      .spyOn(HTMLCanvasElement.prototype, "toDataURL")
      .mockImplementationOnce(() => "data:image/png;base64...");

    downloadAsImage(canvas, "test");

    expect(a.download).toBe("test.png");
    expect(a.href).toBe("data:image/png;base64...");
    expect(a.click).toHaveBeenCalledTimes(1);
  });
});
