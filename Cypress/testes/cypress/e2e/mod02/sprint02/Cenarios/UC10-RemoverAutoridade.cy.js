function remover(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Autoridade').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}

//Sucesso
describe('Cenários', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/listar-autoridades')

    });

    it('RemoverAutoridadeComSucesso', () => {

        remover('TesteExcluir', false)
        
    });

    it('CancelarRemover', () => {

        remover('CampoEmail', true)
        
    });
});