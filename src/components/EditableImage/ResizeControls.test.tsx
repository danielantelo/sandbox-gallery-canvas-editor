import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ResizeControls } from "./ResizeControls";

describe("ResizeControls", () => {
  it("triggers the onChange callback", async () => {
    const mockedFn = jest.fn();
    render(
      <ResizeControls width={500} height={500} onChangeDimensions={mockedFn} />
    );

    act(() => {
      // @TODO figure typing in materialui TextInput
      // userEvent.type(screen.getByLabelText("New width"), "600");
      // userEvent.type(screen.getByLabelText("New height"), "700");
      userEvent.click(screen.getByText("Apply"));
    });

    expect(mockedFn).toHaveBeenCalledWith(500, 500);
  });
});
