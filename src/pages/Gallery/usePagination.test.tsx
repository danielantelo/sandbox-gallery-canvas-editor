import { act, renderHook } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { usePagination } from "./usePagination";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    page: "2",
  }),
}));

describe("usePagination", () => {
  it("goes to next", async () => {
    const { result } = renderHook(() => usePagination(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <BrowserRouter>{children}</BrowserRouter>
      ),
    });

    act(() => {
      result.current.onNextPage();
    });

    expect(window.location.href).toBe("http://localhost/page/3");
  });

  it("goes to previous page", async () => {
    const { result } = renderHook(() => usePagination(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <BrowserRouter>{children}</BrowserRouter>
      ),
    });

    act(() => {
      result.current.onPrevPage();
    });

    expect(window.location.href).toBe("http://localhost/page/1");
  });
});
