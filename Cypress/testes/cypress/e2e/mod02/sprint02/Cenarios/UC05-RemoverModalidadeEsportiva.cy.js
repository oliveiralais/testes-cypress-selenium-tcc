describe('Cenários', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/modalidades-esportivas')

    });

    it('CancelarRemover', () => {

        removerModalidade('6', true)
        
    });

    it('RemoverModalidadeComSucesso', () => {

        removerModalidade('6', false)
        
    });

    
});

function removerModalidade(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 4; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Modalidade').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}