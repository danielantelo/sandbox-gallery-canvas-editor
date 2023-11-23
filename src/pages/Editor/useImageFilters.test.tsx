import { act, renderHook, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useImageFilters } from "./useImageFilters";

describe("useImageFilters", () => {
  it("manages blur and grayscale values", async () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <BrowserRouter>{children}</BrowserRouter>
    );
    const { result } = renderHook(() => useImageFilters(), {
      wrapper,
    });
    expect(result.current.blur).toEqual(0);
    expect(result.current.grayscale).toEqual(0);

    act(() => {
      result.current.onChangeBlur(5);
    });

    await waitFor(() => {
      expect(result.current.blur).toEqual(5);
      expect(window.location.href).toBe("http://localhost/?blur=5");
    });

    act(() => {
      result.current.onChangeGrayscale(80);
    });

    await waitFor(() => {
      expect(result.current.grayscale).toEqual(80);
      expect(window.location.href).toBe(
        "http://localhost/?blur=5&grayscale=80"
      );
    });
  });
});
