import { fireEvent, render, screen } from "@testing-library/react";

import { FilterControls } from "./FilterControls";

describe("FilterControls", () => {
  it("triggers the onChange callbacks", async () => {
    const mockedBlurFn = jest.fn();
    const mockedGrayscaleFn = jest.fn();
    render(
      <FilterControls
        blur={0}
        grayscale={0}
        onChangeBlur={mockedBlurFn}
        onChangeGrayscale={mockedGrayscaleFn}
      />
    );

    fireEvent.change(screen.getByLabelText('Blur level'), { target: { value: 10 } });
    expect(mockedBlurFn).toHaveBeenCalledWith(10);

    fireEvent.change(screen.getByLabelText('Grayscale level'), { target: { value: 100 } });
    expect(mockedGrayscaleFn).toHaveBeenCalledWith(100);
  });
});
