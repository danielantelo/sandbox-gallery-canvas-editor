import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ResizeControls } from "./ResizeControls";

describe("ResizeControls", () => {
  it("triggers the onChange callback", async () => {
    const mockedFn = jest.fn();
    render(
      <ResizeControls width={500} height={500} onChangeDimensions={mockedFn} />
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(screen.getByRole("textbox", { name: /width/i }), "0");
      // @TODO figure out why this one is picking up the width box again
      //userEvent.type(screen.getByRole("textbox", { name: /height/i }), "1");
      userEvent.click(screen.getByText("Apply"));
    });

    expect(mockedFn).toHaveBeenCalledWith(5000, 500);
  });
});
