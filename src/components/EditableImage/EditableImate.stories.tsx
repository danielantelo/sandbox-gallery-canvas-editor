import type { Meta, StoryObj } from "@storybook/react";
import { EditableImage, EditableImageProps } from "./EditableImage";

export default {
  title: "Components/EditableImage",
  component: EditableImage,
} as Meta<typeof EditableImage>;

const baseArgs: EditableImageProps = {
  src: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  height: 500,
  width: 500,
};

export const Default: StoryObj<typeof EditableImage> = {
  args: {
    ...baseArgs,
  },
};

export const Blurred: StoryObj<typeof EditableImage> = {
  args: {
    ...baseArgs,
    blur: 10,
  },
};

export const Grayscaled: StoryObj<typeof EditableImage> = {
  args: {
    ...baseArgs,
    grayscale: 100,
  },
};
