/// <reference types="cypress" />
export class LoginPage {

    username_textbox = '[name = "username"]'
    password_textbox = '[name="password"]'
    login_btn = '[type="submit"]'
    forgotpassword_link = 'Forgot your password? '
    errormessage_content = '.oxd-alert-content'
    errormessage = "Invalid credentials"

    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin() {
        cy.get(this.login_btn).click()
    }

    clickForgotPassword() {
        cy.contains(this.forgotpassword_link).click()
    }

    getErrorMessage() {
        return cy.get(this.errormessage_content).find('.oxd-text')
    }

    errorMessageText() {
        return this.errormessage
    }
}