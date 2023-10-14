describe('Remover Patrocinador', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
    });

    it('RemocaoPatrocinadorBemSucedida', () => {
        removerPatrocinador('1', false)
    });

    it('RemocaoCanceladaPatrocinador', () => {
        removerPatrocinador('1', true)
    });


});

function removerPatrocinador(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Patrocinador').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}