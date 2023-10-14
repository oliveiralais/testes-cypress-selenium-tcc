describe('Editar Produtos Cadastrados na Loja', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.get('[href="/dashboard/list-product"]').click()
    });

    it('EdicaoProdutoBemSucedida', () => {
        cy.editarRadiobutton('7','3', '#nao', 'Concluir Cadastro')
    });

    it('EdicaoProdutoCamposIncorretos', () => {
        cy.editarTexto('7', '3', '#nome', 'sOuFxmAwi8c0ioUKmNL6VaFk48INcr6pcf4gpHle8PD1ocpYwVtU4Amot0S6B', 'Concluir Cadastro', false)
    });

    it('EdicaoProdutoCamposEmBranco', () => {
        cy.editarNulo('7', '3', '#nome', 'Concluir Cadastro', 'Campo obrigatório.')
    });

    it('EdicaoProdutoCamposEmBranco', () => {
        cy.editarTexto('7', '3', '#nome', 'Camisa Atletica 2023', 'Concluir Cadastro', false)
    });

    it('EdicaoProdutoCancelada', () => {
        cancelar('Caneca V2023')
    });

});

function cancelar(identificacao){
    
    const editar = ':nth-child(2) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; //Coloca a coluna do seu aqui
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

        cy.contains('Cancelar').click()

    })
}
