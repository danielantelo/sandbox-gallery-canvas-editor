import { act, renderHook, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { usePagination } from "./usePagination";

const wrapper = ({ children }: { children: JSX.Element }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("usePagination", () => {
  it("goes to next and previous pages", async () => {
    const { result, rerender } = renderHook(() => usePagination(), {
      wrapper,
    });

    expect(result.current.pageNumber).toEqual(1);

    act(() => {
      result.current.onNextPage();
    });

    await waitFor(() => {
      expect(window.location.href).toBe("http://localhost/page/2");
    });

    act(() => {
      result.current.onPrevPage();
    });

    await waitFor(() => {
      expect(window.location.href).toBe("http://localhost/page/1");
    });
  });
});
