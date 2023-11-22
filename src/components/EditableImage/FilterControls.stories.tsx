import type { Meta, StoryObj } from "@storybook/react";
import { FilterControls } from "./FilterControls";

export default {
  title: "Components/FilterControls",

  component: FilterControls,
} as Meta<typeof FilterControls>;

export const Default: StoryObj<typeof FilterControls> = {
  args: {},
};
