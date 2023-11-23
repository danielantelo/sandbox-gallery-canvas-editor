describe("Gallery", () => {
  it("looks as expected", () => {
    cy.visit("/");
    cy.wait(2000); // @TODO remove wait hack, should iterate images and wait until they are all loaded/have dimensions
    cy.matchImageSnapshot("gallery");
  });

  it("navigates pages", () => {
    // @TODO
  });
});
