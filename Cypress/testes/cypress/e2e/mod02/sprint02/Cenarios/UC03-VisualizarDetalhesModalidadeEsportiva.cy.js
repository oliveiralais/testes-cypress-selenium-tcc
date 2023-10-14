
describe('Cenários', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/modalidades-esportivas')

    });
    
    it('VisualizarDetalhesComSucesso', () => {
        
        visualizar('1')

    });
});

function visualizar(identificacao) {

    const visua = '[data-bs-target="#detailsModal"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 4; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(visua).click();

    })

}