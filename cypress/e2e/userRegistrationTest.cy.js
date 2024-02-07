import registerPage from "../pages/registerPage";

describe("User registration flow", () => {
  const registobjects = new registerPage();

  it("Launch register url", () => {
    cy.visit(Cypress.env("URL"));
  });

  it("Registration flow", () => {
    cy.fixture("registrationDetails").then((data) => {
      registobjects.firstNameField(data.FirstName);
      registobjects.lastNameField(data.LastName);
      registobjects.emailField(data.Email);
      registobjects.telephoneField(data.Contact);
      registobjects.passwordField(data.Password);
      registobjects.confirmPasswordField(data.ConfirmPassword);
    });
  });

  registobjects.firstName;
});
