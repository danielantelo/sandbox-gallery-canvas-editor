import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

export default {
  title: "Components/Layout",
  component: Layout,
} as Meta<typeof Layout>;

export const Default: StoryObj<typeof Layout> = {
  args: {},
};
