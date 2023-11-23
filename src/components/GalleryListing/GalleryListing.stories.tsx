import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { GalleryListing } from "./GalleryListing";
import imagesMock from "./__fixtures__/images.json";

export default {
  title: "Components/GalleryListing",
  decorators: [withRouter],
  component: GalleryListing,
} as Meta<typeof GalleryListing>;

export const Default: StoryObj<typeof GalleryListing> = {
  args: {
    images: imagesMock
  },
};
