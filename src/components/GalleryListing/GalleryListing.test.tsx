import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GalleryListing } from "./GalleryListing";
import imagesMock from "./__mocks__/images.json";

describe("GalleryListing", () => {
  it("renders expected list of images", () => {
    render(
      <BrowserRouter>
        <GalleryListing images={imagesMock} />
      </BrowserRouter>
    );
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  it("renders correct image and author and links them to appropriate page", () => {
    render(
      <BrowserRouter>
        <GalleryListing images={imagesMock} />
      </BrowserRouter>
    );

    const firstItem = screen.getAllByRole("listitem")[0];
    const { getByText, getByRole } = within(firstItem);
    expect((getByRole("img") as HTMLImageElement).src).toContain(
      imagesMock[0].src
    );
    expect((getByRole("link") as HTMLAnchorElement).href).toBe(
      "http://localhost/edit/D001"
    );
    expect(getByText("by DanA")).toBeTruthy();

    // @TODO fire click event and confirm url
  });
});
