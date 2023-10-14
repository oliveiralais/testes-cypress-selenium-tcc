describe('Cenario 1', () => {
  it('ATH-753 : EditarUsuárioComSucesso', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('Paulo');
    
    cy.contains("Atualizar").click()
  })
})

describe('Cenario 2', () => {
  it('ATH-754 : EditarUsuárioCamposEmBranco', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Cenario 3', () => {
  it('ATH-755 : EditarUsuárioCampoSenhaIncorreto', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.wait(3000);
    cy.get(':nth-child(3) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('Paulo');
    
    cy.contains("Atualizar").click()
  })
})

describe('Cenario 4', () => {
  it('ATH-756 : EditarUsuárioCampoEmailIncorreto', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.wait(3000);
    cy.get(':nth-child(4) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('Paulo');
    
    cy.contains("Atualizar").click()
  })
})



