import type { Meta, StoryObj } from "@storybook/react";
import { ResizeControls } from "./ResizeControls";

export default {
  title: "Components/ResizeControls",

  component: ResizeControls,
} as Meta<typeof ResizeControls>;

export const Default: StoryObj<typeof ResizeControls> = {
  args: {
    width: 500,
    height: 500
  },
};
