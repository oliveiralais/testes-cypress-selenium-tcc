function visualizar(identificacao, dado) {

    const visua = '[data-bs-target="#detailsModal"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(visua).click();

    })

    cy.contains(dado)

}

//Sucesso

describe('Cenários', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/listar-autoridades')

    });
    
    it('VisualizarDetalhesComSucesso', () => {
        
        visualizar('CampoEmail', '366.073.990-10')

    });
});