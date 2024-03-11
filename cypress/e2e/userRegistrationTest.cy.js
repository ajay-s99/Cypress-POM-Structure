import registerPage from "../pages/registerPage";

describe("User registration flow", () => {
  const registorbjects = new registerPage();
  beforeEach(function () {
    cy.visit(Cypress.env("URL"));
  });
  it("Registration flow", () => {
    cy.visit(Cypress.env("URL"));
    cy.fixture("registrationDetails").then((data) => {
      registorbjects.firstNameField(data.FirstName);
      registorbjects.lastNameField(data.LastName);
      registorbjects.emailField(data.Email);
      registorbjects.telephoneField(data.Contact);
      registorbjects.passwordField(data.Password);
      registorbjects.confirmPasswordField(data.ConfirmPassword);
      registorbjects.continueButton();
      registorbjects.errorMessage();
      registorbjects.checkBox();
      registorbjects.continueButton();
      registorbjects.confirmationMessge();
    });
  });
});
