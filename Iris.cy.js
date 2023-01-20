/// <reference types="cypress"/>


it('Test 1 Postisive Flow', function () {

    cy.visit('https://osa-web.t-cg.co.uk/')
    cy.title().should('eq', 'OurSchoolsApp')
    cy.get('#main').click().type('B16 8PE')
    cy.get('[data-testid="searchPostcodeButton"]').click()
    cy.wait(7000)
    cy.get('[aria-label="go to homepage for Contact Group 5th Floor,  Lyndon House 5862 Hagley Road,  Birmingham,  B16 8PE"]')
        .click()
    cy.get(':nth-child(1) > .list-group > .mx-1 > [data-testid="loadRecentNewsItemFromNewsList"] > .col-5 > .rounded')
        .click()
})

it('Test 2 Negative Flow', function () {
    cy.visit('https://osa-web.t-cg.co.uk/qatest')
    cy.get('#main').click().type('B16 8PE')
    cy.get('[data-testid="searchPostcodeButton"]').click()
    cy.wait(7000)
    cy.get('[aria-label="go to homepage for Contact Group 5th Floor,  Lyndon House 5862 Hagley Road,  Birmingham,  B16 8PE"]')
        .click()
    cy.visit('https://osa-web.t-cg.co.uk/qatest')
    cy.title().should('eq', 'OurSchoolsApp')
    cy.contains('News')
    cy.contains('Mark All Read')
    cy.contains('July 2022')
    cy.contains('June 2022')

})
