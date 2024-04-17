export class DashboardPage {
    getBanner() {
        return cy.get('.oxd-brand-banner > img')
    }
    getHeader() {
       return cy.get('h6')
    }
    getProfile() {
        return cy.get('.oxd-userdropdown-tab')
    }
    getAttendance() {
        return cy.contains('Time at work')
    }
    getMyActions() {
        return cy.contains('My Actions')
    }
    getQuickLaunch() {
        return cy.contains('Quick Launch')
    }
    getBuzz() {
        return cy.contains('Buzz Latest Posts')
    }
    getDashboardText() {
        return "Dashboard"
    }

}