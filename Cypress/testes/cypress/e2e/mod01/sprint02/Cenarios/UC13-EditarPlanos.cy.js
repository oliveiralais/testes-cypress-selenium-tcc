describe('Cenario 1', () => {
  it('ATH-727 : EditarPlanoBemSucedida', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')

    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#nome').clear().type('Camisetas');
    
    cy.contains("Atualizar").click()
  })
})

describe('Cenario 2', () => {
  it('ATH-728 : EditarPlanoCampoIncorreto', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')

    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#custo').clear().type('Camisetas');
    
    cy.contains("Atualizar").click()
  })
})

describe('Cenario 3', () => {
  it('ATH-729 : EditarPlanoCampoEmBranco', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')

    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#nome').clear()
    
    cy.contains("Atualizar").click()
  })
})



