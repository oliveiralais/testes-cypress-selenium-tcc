describe('Cenario 1', () => {
  it('ATH-783 : EditarCadastroAtleticaComSucesso', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('dodoes');
    
    cy.contains("Atualizar").click()
  })
})

describe('Cenario 2', () => {
  it('ATH-784 : EditarCadastroAtleticaCamposEmBranco', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear()
    
    cy.contains("Atualizar").click()
  })
})

//describe('Cenario 3', () => {
  //it('ATH-785 : EditarCadastroAtleticaCampoLogoIncorreto', () => {
    //cy.visit('http://localhost:4200/dashboard/listagem-atletica')


    //cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    //cy.get('input#logo').clear()
    
    //cy.contains("Atualizar").click()
  //})
//})

describe('Cenario 4', () => {
  it('ATH-786 : EditarCadastroAtleticaCancelado', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    
    
    cy.contains("Voltar").click()
  })
})



