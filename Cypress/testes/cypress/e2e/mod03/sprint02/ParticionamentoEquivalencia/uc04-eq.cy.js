describe('Editar Produtos Cadastrados na Loja - Particionamento por Equivalência', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.get('[href="/dashboard/list-product"]').click()
    });

    it('EquivalenciaValidaEdicaoProdutoCorreta', () => {
        editarTexto2('Caneca Verde', 'Caneca da cor verde 300ml', '150', 'Inativo')

        cy.contains('button', 'Concluir Cadastro').click()
    });

    it('EquivalenciaInvalidaNomeProdutoNulo', () => {
        editarNulo2('#nome', 'Concluir Cadastro', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaNomeProdutoTamanhoInferior', () => {
        editarTexto1('#nome', 'x', 'Concluir Cadastro', true, 'Mínimo de 5 caracteres.')
    });

    it('EquivalenciaInvalidaNomeProdutoTamanhoSuperior', () => {
        editarTexto1('#nome', 'JFkWdFOizMn4ElN80PsROI1UkO1rjVZiOBMthqv2ctYcCctTko9kBlJKwm00ijZb6', 'Concluir Cadastro', true, 'Máximo de 50 caracteres.')
    });

    it('EquivalenciaInvalidaDescricaoProdutoNula', () => {
        editarNulo2('#descricao', 'Concluir Cadastro', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaDescricaoProdutoTamanhoInferior', () => {
        editarTexto1('#descricao', 'd', 'Concluir Cadastro', true, 'Mínimo de 5 caracteres.')
    });

    it('EquivalenciaInvalidaDescricaoProdutoTamanhoSuperior', () => {
        editarTexto1('#descricao', '3zcx7AiJsR2d4W69WIInF9QQG4D6qq8LTi5kGye0XShyzIe08bwYg1hCHbtAy4UtfIGBF1ndQ8cPJjrJWeBsxmYcWFJxi9USu4lh3T1wGSgAH3Pw2nzKl0gIcwzXkQAsqGn5NZoZdZprepdurMetBoDaXlvNwIi3cDMGR38OoJvSo96WL1enz84QhiL0Em7NH8dhZ1NYPAusQogIqDmWk7DpX5GdKXw5b6zjpPhwPgzVYQJrx5JdXUwCmsr79Ajn', 'Concluir Cadastro', true, 'Máximo de 255 caracteres.')
    });

    it('EquivalenciaInvalidaQuantidadeNegativa', () => {
        editarTexto1('#quantidade', '-110', 'Concluir Cadastro', true, 'Insira uma quantidade válida.')
    });

    it('EquivalenciaInvalidaQuantidadeNula', () => {
        editarNulo2('#quantidade', 'Concluir Cadastro', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaQuantidadeNaoInteira', () => {
        editarTexto1('#quantidade', '43,12', 'Concluir Cadastro', true, 'Insira uma quantidade válida.')
    });

    it('EquivalenciaInvalidaQuantidadeZero', () => {
        editarTexto1('#quantidade', '0', 'Concluir Cadastro', true, 'Insira uma quantidade válida.')
    });

    it('EquivalenciaInvalidaStatusNulo', () => {
        editarNulo2('#status', 'Concluir Cadastro', 'Campo obrigatório.')
    });
    
    it('EquivalenciaInvalidaStatusTamanhoInferior', () => {
        editarTexto1('#status', 'qw', 'Concluir Cadastro', true, 'Mínimo de 5 caracteres.')
    });

    it('EquivalenciaInvalidaStatusTamanhoSuperior', () => {
        editarTexto1('#status', '0kOqGAlFQJ9jqJWwmzFrXpIdCjYQZEe', 'Concluir Cadastro', true, 'Máximo de 30 caracteres.')
    });

});

function editarTexto2(nome, descricao, qtd, status){

    const editar = ':nth-child(2) > .svg-inline--fa';
    cy.contains('tr', 3).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = 7; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get('#nome').clear()
    cy.get('#descricao').clear()
    cy.get('#quantidade').clear()
    cy.get('#status').clear()

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#quantidade').type(qtd)
    cy.get('#status').type(status)
}

function editarTexto1(campo, dado, nomeBotao, erro, mensagem){
    const editar = ':nth-child(2) > .svg-inline--fa';
    cy.contains('tr', 3).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 7; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get(campo).clear().type(dado)
    if(erro == false){

        cy.contains('button', nomeBotao).click()
        
    }else{

        cy.contains('button', nomeBotao).click()
        cy.validator(mensagem)

    }
}

function editarNulo2(campo, nomeBotao, mensagem){

    const editar = ':nth-child(2) > .svg-inline--fa';
    cy.contains('tr', 3).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = 7; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get(campo).clear()
    cy.contains('button', nomeBotao).click()
    cy.validator(mensagem)

}