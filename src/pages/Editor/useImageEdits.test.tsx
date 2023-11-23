import { act, renderHook } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useImageEdits } from "./useImageEdits";

describe("useImageEdits", () => {
  beforeEach(() => {
    window.history.pushState({}, "", new URL("http://localhost/"));
  });

  it("manages height and width values", async () => {
    const { result } = renderHook(() => useImageEdits(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <BrowserRouter>{children}</BrowserRouter>
      ),
    });

    act(() => {
      result.current.onChangeDimensions(100, 80);
    });

    expect(result.current.width).toEqual(100);
    expect(result.current.height).toEqual(80);
    expect(window.location.href).toBe("http://localhost/?width=100&height=80");
  });

  it("manages blur and grayscale values", async () => {
    const { result } = renderHook(() => useImageEdits(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <BrowserRouter>{children}</BrowserRouter>
      ),
    });

    expect(result.current.blur).toEqual(0);
    expect(result.current.grayscale).toEqual(0);

    act(() => {
      result.current.onChangeBlur(5);
    });

    expect(result.current.blur).toEqual(5);
    expect(window.location.href).toBe("http://localhost/?blur=5");

    act(() => {
      result.current.onChangeGrayscale(80);
    });

    expect(result.current.grayscale).toEqual(80);
    expect(window.location.href).toBe("http://localhost/?blur=5&grayscale=80");
  });
});
