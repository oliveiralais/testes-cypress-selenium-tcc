describe('Desativar Fornecedor', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
    });

    it('RemocaoProdutoBemSucedida', () => {
        removerFornecedores('1', false)
    });

    it('RemocaoCanceladaPatrocinador', () => {
        removerFornecedores('1', true)
    });

});

function removerFornecedores(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 5; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Fornecedor').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}