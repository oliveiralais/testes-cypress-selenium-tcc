describe('Editar Patrocinadores', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
    });

    it('EdicaoFornecedorComSucesso', () => {
        cy.editarTexto('6', '1', '#nome', 'Teste01', 'Atualizar', false)
    });

    it('EdicaoFornecedorCamposIncorretos', () => {
        cy.editarTexto('6', '1', '#nome', 'sOuFxmAwi8c0ioUKmNL6VaFk48INcr6pcf4gpHle8PD1ocpYwVtU4Amot0S6B', 'Atualizar', true, 'Máximo de 60 caracteres.')
    });

    
    it('EdicaoFornecedorCamposEmBranco', () => {
        cy.editarNulo('6', '1', '#nome', 'Atualizar', 'Campo obrigatório.')
    });

    it('EdicaoFornecedorCancelada', () => {
        cancelarPatrocinador('1')
    });
    
});

function cancelarPatrocinador(identificacao){
    
    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; //Coloca a coluna do seu aqui
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

        cy.contains('Cancelar').click()

    })
}
