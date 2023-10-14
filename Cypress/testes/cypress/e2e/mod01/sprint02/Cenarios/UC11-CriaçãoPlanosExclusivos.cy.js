describe('Cenario 1', () => {
  it('ATH-824 : CriarPlanoBemSucedida', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('Camisetas e Canecas');
    cy.get('textarea#vantagens').type('Esse plano proporciona a ganhar uma camiseta e caneca');
    cy.get('input#custo').type('128');
    cy.contains("Finalizar").click()
  })
})

describe('Cenario 2', () => {
  it('ATH-825 : CriarPlanoCampoIncorreto', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('Camisetas e Canecas');
    cy.get('textarea#vantagens').type('Esse plano proporciona a ganhar uma camiseta e caneca');
    cy.get('input#custo').type('aaa');
    cy.contains("Finalizar").click()
  })
})

describe('Cenario 3', () => {
  it('ATH-826 : CriarPlanoCampoEmBranco', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')

    cy.contains("Finalizar").click()
  })
})




