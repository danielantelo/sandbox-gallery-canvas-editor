import type { Meta, StoryObj } from "@storybook/react";
import { EditableImage } from "./EditableImage";

export default {
  title: "Components/EditableImage",
  component: EditableImage,
} as Meta<typeof EditableImage>;

export const Default: StoryObj<typeof EditableImage> = {
  args: {
    src: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  },
};

export const Blurred: StoryObj<typeof EditableImage> = {
  args: {
    src: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    blur: 10
  },
};

export const Grayscaled: StoryObj<typeof EditableImage> = {
  args: {
    src: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    grayscale: 100
  },
};
