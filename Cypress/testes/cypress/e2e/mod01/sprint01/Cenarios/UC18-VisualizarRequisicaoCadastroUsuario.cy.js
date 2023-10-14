describe('Visualizando Requisição', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/dashboard/visualizar-req-cadastro')
  });

  it('Visualizando as requisições de usuário do Projeto', () => {
    cy.wait(1500)
    cy.contains('button', 'Avançar')
    .click()

    cy.wait(1000)
    cy.contains('button', 'Voltar')
    .click()
    cy.wait(1000)
  })

  it('Requisição aprovada com sucesso', () => {
    cy.wait(1500)
    cy.contains('td','Marcos')
    .siblings()
    .children('button')
    .eq(0)
    .click()

    cy.wait(500)

    cy.contains('button', 'Aprovar')
    .click()

    cy.wait(500)

  })

  it('Requisição reprovada com sucesso', () => {
    cy.wait(1500)
    cy.contains('td','Marcos')
    .siblings()
    .children('button')
    .eq(1)
    .click()

    cy.wait(500)

    cy.contains('button', 'Recusar')
    .click()

    cy.wait(500)

  })
})
