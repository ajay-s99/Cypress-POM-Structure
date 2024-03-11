import registerPage from "../pages/registerPage";

describe("User registration flow", () => {
  const registobjects = new registerPage();
  beforeEach(function () {
    cy.visit(Cypress.env('URL'))
  })

  it("Registration flow", () => {
    cy.visit(Cypress.env('URL'))
    cy.fixture("registrationDetails").then((data) => {
      registobjects.firstNameField(data.FirstName);
      registobjects.lastNameField(data.LastName);
      registobjects.emailField(data.Email);
      registobjects.telephoneField(data.Contact);
      registobjects.passwordField(data.Password);
      registobjects.confirmPasswordField(data.ConfirmPassword);
    });
  });
});
