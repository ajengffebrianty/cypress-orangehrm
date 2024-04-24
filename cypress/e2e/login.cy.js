import { LoginPage } from "./pages/login"
import { DashboardPage } from "./pages/dashboard"

const login = new LoginPage()
const dashboard = new DashboardPage()


beforeEach(()=> {
  //baseUrl already set in cypress.config.js
  cy.visit('/')
  //store CSV data in fixtures
  cy.fixture('globalData.json').as('userData');
})

describe('Login Test cases', () => {

  it('login failed',function() {
    login.enterUsername(this.userData.invalidUsername)
    login.enterPassword(this.userData.invalidPassword)
    login.clickLogin()
    login.getErrorMessage().should('have.attr', login.errorMessageText())
  })

  it('login success', function(){
    login.enterUsername(this.userData.username)
    login.enterPassword(this.userData.password)
    login.clickLogin()
    dashboard.getBanner().should('be.visible')
    dashboard.getHeader().should('have.text', dashboard.getDashboardText())
  })


})