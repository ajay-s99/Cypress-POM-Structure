describe("Verify the background color of css element", () => {
  it("validate background color", () => {
    cy.visit("https://www.croma.com/my-account");
    cy.get(".terms")
      .contains("Terms of Use")
      .should("have.attr", "href", "https://www.croma.com/terms-of-use");
    cy.get(".terms")
      .contains("Privacy Policy")
      .should("have.attr", "href", "https://www.croma.com/privacy-policy");
  });
});
