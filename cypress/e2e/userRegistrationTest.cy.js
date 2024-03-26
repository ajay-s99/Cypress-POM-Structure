import registerPage from "../pages/registerPage";

describe("User registration flow", () => {
  const registerObjects = new registerPage();
  beforeEach(function () {
    cy.visit(Cypress.env("URL"));
  });
  it("Registration flow", () => {
    cy.visit(Cypress.env("URL"));
    cy.fixture("registrationDetails").then((data) => {
      registerObjects.firstNameField(data.firstName);
      registerObjects.lastNameField(data.lastName);
      registerObjects.emailField(data.email);
      registerObjects.telephoneField(data.contact);
      registerObjects.passwordField(data.password);
      registerObjects.confirmPasswordField(data.confirmPassword);
      registerObjects.continueButton();
      registerObjects.errorMessage();
      registerObjects.checkBox();
      registerObjects.continueButton();
      registerObjects.confirmationMessge();
    });
  });
});
