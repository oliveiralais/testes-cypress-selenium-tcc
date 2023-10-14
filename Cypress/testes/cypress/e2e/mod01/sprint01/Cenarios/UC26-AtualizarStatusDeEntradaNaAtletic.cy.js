describe('Cenario 1', () => {
  it('ATH-210 : AtualizacaoStatusBemSucedido', () => {
    cy.visit('http://localhost:4200/dashboard/visualizar-req-cadastro-atletica')
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn-success').click();
    
    cy.contains("Aprovar").click()
    
  })
})

describe('Cenario 2', () => {
  it('ATH-211 : AtualizacaoStatusCanceladoBemSucedido', () => {
  cy.visit('http://localhost:4200/dashboard/visualizar-req-cadastro-atletica')
  cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn-success').click();
  
  cy.contains("Cancelar").click()
})
})

describe('Cenario 3', () => {
it('ATH-212 : AtualizacaoStatusRecusada', () => {
  cy.visit('http://localhost:4200/dashboard/visualizar-req-cadastro-atletica')
  cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn-danger').click();
  
  cy.contains("Recusar").click()
})
})

describe('Cenario 4', () => {
it('ATH-626 : AtualizarStatusCanceladoRecusado', () => {
  cy.visit('http://localhost:4200/dashboard/visualizar-req-cadastro-atletica')
  cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn-danger').click();
  
  cy.get('#confirmDenyModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
})
})
