describe('Cenarios', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/login")
  });

  it('Login com Sucesso', () => {

    realizarLogin("exemplo@gmail.com", "1234")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/dashboard')
      
  });

  it('Login campos vazios', () => {

    realizarLogin(" ", " ")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/login')
      
  });

  it('Login com campos errados', () => {

    realizarLogin("teste", "123")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/login')
      
  });

  

});

function realizarLogin(email, senha){

  cy.get('#email').type(email)
  cy.get('#password').type(senha)

}