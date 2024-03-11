class registerPage {
  firstName = "#input-firstname";
  lastName = "#input-lastname";
  email = "#input-email";
  telePhone = "#input-telephone";
  password = "#input-password";
  passwordConfirm = "#input-confirm";
  policyCheckbox = 'input[type="checkbox"]';
  continue = ".btn.btn-primary";

  firstNameField(FN) {
    cy.get(this.firstName).type(FN);
  }
  lastNameField(LN) {
    cy.get(this.lastName).type(LN);
  }
  emailField(Email) {
    cy.get(this.email).type(Email);
  }
  telephoneField(Phn) {
    cy.get(this.telePhone).type(Phn);
  }
  passwordField(Pwd) {
    cy.get(this.password).type(Pwd);
  }
  confirmPasswordField(ConfirmPwd) {
    cy.get(this.passwordConfirm).type(ConfirmPwd);
  }
  checkBox() {
    cy.get(this.policyCheckbox).check();
  }
  continueButton() {
    cy.get(this.continue).should("be.enabled").click();
  }
  errorMessage() {
    cy.get("div[class='alert alert-danger alert-dismissible']")
    .should("have.text"," Warning: You must agree to the Privacy Policy!");
  }
  checkBox() {
    cy.get("input[type='checkbox']").click();
  }
  confirmationMessge() {
    cy.get("h1")
      .invoke("text")
      .then(($message) => {
        cy.log($message);
      });
  }
}
export default registerPage;
