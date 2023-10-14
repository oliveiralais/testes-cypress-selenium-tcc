function editarModalidade(identificacao, nome, button1, button2, erro, mensagem) {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 4;
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get('#modalidade_name').type(nome)
    cy.get(button1).click()
    cy.get(button2).click()

    if (erro == false) {

        cy.contains('button', 'Concluir').click()

    } else {

        cy.contains('button', 'Concluir').click()
        cy.validator(mensagem)

    }

}
describe('Particionamento de Equivalência', () => {

    beforeEach('', () => {

        cy.visit('http://localhost:4200/dashboard/modalidades-esportivas')

    });

    it('ModalidadeEsportivaAlteradaComSucesso', () => {

        editarModalidade('5', 'Futebol de Salão', '#coletivo', '#feminino', false)

    });

    it('ModalidadeEsportivaAlteradaNomeVazio', () => {

        const editar = ':nth-child(1) > .svg-inline--fa';
        cy.contains('tr', '5').then(($row) => {

            const rowIndex = $row.index() + 1;
            const columnIndex = 4;
            cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

        })
        cy.get('#coletivo').click()
        cy.get('#feminino').click()

        cy.contains('button', 'Concluir').click()

        cy.validator('Campo obrigatório')

    });

    it('ModalidadeEsportivaAlteradaNomeTamanhoInferior', () => {

        editarModalidade('5', 'aa', '#coletivo', '#feminino', true, 'Mínimo de 4 caracteres.')
        

    });

    it('ModalidadeEsportivaAlteradaIncorreto', () => {

        editarModalidade('5', 'huNiZjiJAqvwdmUAoUAmwxtyySfGCfINrQakoIyAIqeQCanChFy', '#coletivo', '#feminino', true, 'Máximo de 50 caracteres.')

    });


});