describe('Vincular Descontos para Atletas em Produtos na Loja', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.get('[href="/dashboard/list-product"]').click()
    });

    it('VinculoDeDescontoNoProdutoBemSucedido', () => {
        vincularDesconto('Camiseta Atletica 2023', '15')
    });

    it('VinculoDeDescontoNoProdutoCampoIncorreto', () => {
        vincularDesconto('Caneca V2023', '@')
    });

    it('VinculoDeDescontoNoProdutoCancelado', () => {
        const editar = ':nth-child(1) > .svg-inline--fa';
        cy.contains('tr', 'Tirante Verde').then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
        cy.contains('Inserir Novo').click()
        cy.contains('Cancelar').click()
    });

});

function vincularDesconto(identificacao, porcentagem){

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.contains('Inserir Novo').click()
    cy.get('#porcentagem').type(porcentagem)
    cy.contains('button', 'Concluir Cadastro').click()

}
