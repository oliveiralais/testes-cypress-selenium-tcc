describe('Excluindo Planos', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/dashboard/listagem-planos")
  });

  it('Excluindo plano', () => {

    cy.contains('td','Plano básico')
    .siblings()
    .children('button')
    .eq(1)
    .click()

    cy.wait(1000)

    cy.contains('button', 'Excluir')
    .click()
      
  });
  it('Cancelando exclusão de  plano', () => {

    cy.contains('td','Plano médio')
    .siblings()
    .children('button')
    .eq(1)
    .click()

    cy.wait(1000)

    cy.contains('button', 'Cancelar')
    .click()
      
  });
  
});