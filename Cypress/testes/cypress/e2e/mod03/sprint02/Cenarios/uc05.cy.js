describe('Remover Produtos Cadastrados na Loja', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
    });

    it('RemocaoProdutoBemSucedida', () => {
        remover('Camiseta', false)
    });

    it('RemocaoProdutoCancelada', () => {
        remover('Caneca', true)
    });

});

function remover(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Produto').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}