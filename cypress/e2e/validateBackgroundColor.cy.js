describe("Verify the background color of css element", () => {
  it("validate background color", () => {
    cy.visit("https://www.croma.com/my-account");
    cy.get("button[class='card-button btn btn-default login-btn']").should(
      "have.css",
      "background-color",
      "rgb(18, 218, 168)"
    );
  });
});
