describe('Adicionar Lote De Ingressos A Eventos', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/lotes-evento/1")
    });

    it('AdicaoLoteIngressosBemSucedida', () => {
        adicionarLote('500', '15.50', '30')
    });

    it('AdicaoLoteIngressosCamposIncorretos', () => {
        adicionarLote('-50', '30', '30')
        cy.validator('O valor deve ser maior ou igual a 0.')
    });

    it('AdicaoLoteIngressosCamposEmBranco', () => {
        cy.contains('Inserir Novo').click()
        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('AdicaoLoteIngressosCancelada', () => {
        cy.contains('Inserir Novo').click()
        cy.contains('Cancelar').click()
    });

});

function adicionarLote(qtd, valor, vendaMinima){

    cy.contains('Inserir Novo').click()

    cy.get('#quantidade').type(qtd)
    cy.get('#valor').type(valor)
    cy.get('#vendaMinima').type(vendaMinima)

    cy.contains('button', 'Concluir Cadastro').click()
}