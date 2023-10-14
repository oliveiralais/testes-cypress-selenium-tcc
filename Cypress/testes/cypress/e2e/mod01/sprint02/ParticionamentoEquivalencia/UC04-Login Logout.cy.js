describe('Particionamento Equivalencia', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/login")
  });

  it('EquivalenciaInvalidaSenhaTamanhoSuperior  ', () => {

    realizarLogin("marcos@gmail.com", "Exemplo1234567891011")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('EquivalenciaInvalidaEmailSemCaractere@', () => {

    realizarLogin("Paulogmail.com", "Exemplo123")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('EquivalenciaValidosTodosOsCamposValidos', () => {

    realizarLogin("exemplo@gmail.com", "1234")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/dashboard')
      
  });

  it('EquivalenciaInvalidaEmailNulo', () => {

    realizarLogin(" ", "Exemplo123")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('EquivalenciaInvalidaEmailTamanhoSuperior', () => {

    realizarLogin("marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "Exemplo123")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('EquivalenciaInvalidaSenhaNulo', () => {

    realizarLogin("teste@gmail.com", " ")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

  it('EquivalenciaInvalidaSenhaTamanhoInferior', () => {

    realizarLogin("teste@gmail.com", "teste")
    cy.contains('button', 'Login')
    .click()
    cy.url().should('include', '/login')
      
  });

});

function realizarLogin(email, senha){

  cy.get('#email').type(email)
  cy.get('#password').type(senha)

}