/// <reference types="cypress" />

describe('The sample element', () => {
  it('Navigates to the page', () => {
    cy.visit('http://localhost:5173');
  });
  it('inputs the first name', () => {
    cy.get('[data-testId=firstName]')
      .should('exist')
      .type('Adekunle', { delay: 100 });
  });
  it('inputs the last name', () => {
    cy.get('[data-testId=lastName]')
      .should('exist')
      .click()
      .type('Adeniyi', { delay: 100 });
  });
  it('adds a user', () => {
    cy.get('[data-testId=generate]').should('exist').click();
    cy.get('[data-testId=delete-1]').should('exist');
  });
  it('delets a user', () => {
    cy.wait(1000);
    cy.get('[data-testId=delete-1]')
      .should('exist')
      .click()
      .should('not.exist');
  });
  it('Adds multiple users', () => {
    cy.get('[data-testId=firstName]')
      .should('exist')
      .type('{selectAll}Daniel', { delay: 100 });
    cy.get('[data-testId=lastName]')
      .should('exist')
      .focus()
      .type('{selectAll}Paul', { delay: 100 });
    cy.get('[data-testId=generate]').should('exist').click();
    cy.get('[data-testId=delete-1]').should('exist');

    cy.get('[data-testId=firstName]')
      .should('exist')
      .type('{selectAll}Nanisca', { delay: 100 });
    cy.get('[data-testId=lastName]')
      .should('exist')
      .focus()
      .type('{selectAll}David', { delay: 100 });
    cy.get('[data-testId=generate]').should('exist').click();
    cy.get('[data-testId=delete-2]').should('exist');

    cy.get('[data-testId=firstName]')
      .should('exist')
      .type('{selectAll}Israel', { delay: 100 });
    cy.get('[data-testId=lastName]')
      .should('exist')
      .focus()
      .type('{selectAll}Nathan', { delay: 100 });
    cy.get('[data-testId=generate]').should('exist').click();
    cy.get('[data-testId=delete-3]').should('exist');

    cy.get('[data-testId=firstName]')
      .should('exist')
      .type('{selectAll}Jubril', { delay: 100 });
    cy.get('[data-testId=lastName]')
      .should('exist')
      .focus()
      .type('{selectAll}Abdul', { delay: 100 });
    cy.get('[data-testId=generate]').should('exist').click();
    cy.get('[data-testId=delete-4]').should('exist');

    cy.get('[data-testId=firstName]')
      .should('exist')
      .type('{selectAll}James', { delay: 100 });
    cy.get('[data-testId=lastName]')
      .should('exist')
      .focus()
      .type('{selectAll}Stephen', { delay: 100 });
    cy.get('[data-testId=generate]').should('exist').click();
    cy.get('[data-testId=delete-5]').should('exist');
  });
  it('delete a specific user [Israel Nathan]', () => {
    cy.wait(2000);
    cy.get('div').contains('Israel Nathan').should('exist');
    cy.get('[data-testId=delete-3]').should('exist').click();
    cy.get('div').contains('Israel Nathan').should('not.exist');
  });
});
