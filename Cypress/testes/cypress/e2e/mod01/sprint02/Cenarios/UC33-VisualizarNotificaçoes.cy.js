describe('Cenario 1', () => {
  it('ATH-753 : EditarUsuárioComSucesso', () => {
    cy.visit('http://localhost:4200/login')

    cy.get('input#email').clear().type('exemplo@gmail.com');
    cy.get('input#password').clear().type('1234');
    cy.get('.text-center > .btn').click()

    cy.get(':nth-child(1) > #navbarDropdown').click()

  })
})




