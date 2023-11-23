describe("Editor", () => {
  it("looks as expected", () => {
    cy.visit("http://localhost:3000/edit/0");
    // @TODO capture image handling overflow
  });

  it("resizes images", () => {
    // @TODO
  });

  it("applies filters to images", () => {
    // @TODO
  });

  it("downloads the modified image", () => {
    // @TODO
  });
});
