describe('Editar Descontos para Atletas em Produtos na Loja', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.get('[href="/dashboard/list-product"]').click()
    });

    it('EdicaoDescontoBemSucedida', () => {
        editarDesconto('Caneca V2023', '6')
    });

    it('EdicaoDescontoCampoIncorreto', () => {
        editarDesconto('Caneca V2023', '#')
    });

    it('EdicaoDescontoCancelado', () => {
        cancelar('Caneca V2023')
    });

});

function editarDesconto(identificacao, porcentagem){

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get('tr > :nth-child(3) > :nth-child(1)').click()
    cy.get('#porcentagem').type(porcentagem)
    cy.contains('button', 'Concluir Cadastro').click()

}

function cancelar(identificacao){
    
    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get('tr > :nth-child(3) > :nth-child(1)').click()
    cy.get('a.btn').click()
}