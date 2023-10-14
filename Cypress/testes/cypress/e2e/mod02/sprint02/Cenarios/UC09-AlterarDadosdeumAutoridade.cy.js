function editarTexto(identificacao, campo, dado) {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6;
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get(campo).clear().type(dado)


}
describe('Cenários', () => {

    beforeEach('', () => {

        cy.visit('http://localhost:4200/dashboard/listar-autoridades')

    });

    it('AutoridadeAlteradaComSucesso', () => {


        editarTexto('Bandeirinha', '#funcao', 'Segundo Árbitro')
        cy.get('#modalidadeEsportiva').select('Basquete - Masculino')

        cy.contains('button', 'Concluir')

    });

    it('AlteracaoCamposSemPreenchimento', () => {
        const editar = ':nth-child(1) > .svg-inline--fa';
        cy.contains('tr', '(00) 00000-0000').then(($row) => {

            const rowIndex = $row.index() + 1;
            const columnIndex = 6;
            cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

        })
        cy.get('#nome').clear()
        cy.get('#email').clear()
        cy.get('#telefone').clear()
        cy.get('#identificacaoFiscal').clear()
        cy.get('#certificacao').clear()
        cy.get('#funcao').clear()
        cy.get('#telefone').clear()

        cy.contains('button', 'Concluir')

        cy.validator('Campo obrigatório')
    });

    it('AlteracaoCampoPreenchimentoIncorreto', () => {

        editarTexto('(00) 00000-0000', '#certificacao', '1')
        cy.contains('button', 'Concluir')
        cy.validator('Mínimo de 5 caracteres')

    })
});