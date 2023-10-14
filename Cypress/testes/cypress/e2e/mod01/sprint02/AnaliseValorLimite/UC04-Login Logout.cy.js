describe('Anallise Valor Limite', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/login")
  });

  it('EmailValidoSuperiorMenosUm ', () => {

    realizarLogin("marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com", "123")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/dashboard')
      
  });

  it('EmailValidoSuperiorExato', () => {

    realizarLogin("marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com", "123")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/dashboard')
      
  });

  it('EmailInvalidoSuperiorMaisUm', () => {

    realizarLogin("marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com", "Exemplo123")
    cy.contains('button', 'Login')
    cy.validator('Máximo de 80 caracteres.')
      
  });

  it('SenhaInvalidoInferiorMenosUm', () => {

    realizarLogin("marcos@gmail.com", "12")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('SenhaValidoInferiorExato', () => {

    realizarLogin("marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com", "123")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/dashboard')
      
  });

  it('SenhaValidoInferiorMaisUm', () => {

    realizarLogin("exemplo@gmail.com", "1234")
    cy.contains('button', 'Login')
    .click()
    cy.wait(500)
    cy.url().should('include', '/dashboard')
      
  });

  it('SenhaValidoSuperiorMenosUm', () => {

    realizarLogin("marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com", "1234567891234567891")
    cy.contains('button', 'Login')
    cy.wait(500)
    cy.url().should('include', '/login')
      
  });

  it('SenhaValidoSuperiorExato', () => {

    realizarLogin("marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com", "Exemplo123456789011")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('SenhaInvalidoSuperiorMaisUm', () => {

    realizarLogin("marcos@gmail.com", "Exemplo123456789011")
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