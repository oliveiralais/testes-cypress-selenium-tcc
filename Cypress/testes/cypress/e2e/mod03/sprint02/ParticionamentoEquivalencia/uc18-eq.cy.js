describe('Adicionar Lote De Ingressos A Eventos - Particionamento por Equivalência', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/lotes-evento/1")
    });

    it('EquivalenciaValidaAdicaoLoteIngressosEventosCorreta', () => {
        adicionarLote('40', '20.00', '20')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosValorNulo', () => {
        cy.contains('Inserir Novo').click()

        cy.get('#quantidade').type('10')
        cy.get('#vendaMinima').type('5')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosValorNegativo', () => {
        adicionarLote('45', '-20.00', '25')
        cy.validator('O valor deve ser maior ou igual a 0.')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosQuantidadeNula', () => {
        cy.contains('Inserir Novo').click()

        cy.get('#valor').type('15.00')
        cy.get('#vendaMinima').type('13')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosQuantidadeNegativa', () => {
        adicionarLote('-120', '10.00', '55')
        cy.validator('O valor deve ser maior ou igual a 0.')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosQuantidadeNaoInteira', () => {
        adicionarLote('30.15', '10.00', '55')
        //cy.validator('')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosVendaNula', () => {
        cy.contains('Inserir Novo').click()

        cy.get('#quantidade').type('30')
        cy.get('#valor').type('15.00')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.validator('Campo obrigatório.')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosVendaNegativa', () => {
        adicionarLote('220', '19.00', '-20')
        cy.validator('O valor deve ser maior ou igual a 0.')
    });

    it('EquivalenciaInvalidaAdicaoLoteIngressosEventosVendaNaoInteira', () => {
        adicionarLote('525', '90.00', '10.52')
        //cy.validator('')
    });

});

function adicionarLote(qtd, valor, vendaMinima){

    cy.contains('Inserir Novo').click()

    cy.get('#quantidade').type(qtd)
    cy.get('#valor').type(valor)
    cy.get('#vendaMinima').type(vendaMinima)

    cy.contains('button', 'Concluir Cadastro').click()
}