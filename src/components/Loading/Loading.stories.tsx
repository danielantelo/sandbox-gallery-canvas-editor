import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
} as Meta<typeof Loading>;

export const Default: StoryObj<typeof Loading> = {
  args: {},
};
