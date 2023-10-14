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
describe('Analise Valor Limite', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/modalidades-esportivas')

    });

    it('ModalidadeEsportivaAlteradaLimiteSuperiorMenosUm', () => {

        editarModalidade('5', 'mSTNlKHhignlEEykmpXXVwzffEeBcuoyYWyKdelqhqIblUvkY', '#coletivo', '#feminino', false)
        
    });

    it('ModalidadeEsportivaAlteradaLimiteSuperiorExato', () => {

        editarModalidade('5', 'mSTNlKHhignlEEykmpXXVwzffEeBcuoyYWyKdelqhqIblUavkY', '#coletivo', '#feminino', false)
        
    });

    it('ModalidadeEsportivaAlteradaLimiteSuperiorMaisUm', () => {

        editarModalidade('5', 'mSTNlKHhignlEEykmpXXVwzffEeBcuoyYWyKdelqhqmnIblUvkY', '#coletivo', '#feminino', true, 'Máximo de 50 caracteres.')
        
    });

    
    it('ModalidadeEsportivaAlteradaLimiteInferiorMenosUm', () => {
        
        editarModalidade('5', 'aaa', '#coletivo', '#feminino', true, 'Mínimo de 4 caracteres.')
        
    });

    it('ModalidadeEsportivaAlteradaLimiteInferiorExato', () => {

        editarModalidade('5', 'golf', '#coletivo', '#feminino', false)

        
    });

    it('ModalidadeEsportivaAlteradaLimiteInferiorMaisUm', () => {

        editarModalidade('5', 'volei', '#coletivo', '#feminino', false)
        
    });

   
});