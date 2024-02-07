class registerPage {
  firstName = "#input-firstname";
  lastName = "#input-lastname";
  email = "#input-email";
  telephone = "#input-telephone";
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
    cy.get(this.telephone).type(Phn);
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
    cy.get(this.continue).click();
  }
}
export default registerPage;
