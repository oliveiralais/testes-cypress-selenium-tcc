describe('Editar Fornecedores - Particionamento por Equivalência', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
    });

    it('EquivalenciaValidaEdicaoFornecedorCorreta', () => {
        editarTexto3('ModaShirt Inc.', 'A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade, oferecendo uma variedade de estilos, designs e tamanhos para atender às necessidades de moda de nossos clientes. ',
         '+55 (19) 3022-2587 ',' Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda ', '#ativo')

        cy.contains('button', 'Atualizar').click()
    });

    it('EquivalenciaInvalidaNomeFornecedorNulo', () => {
        cy.editarNulo('5', '1', '#nome', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaNomeFornecedorTamanhoInferior', () => {
        cy.editarTexto('5', '1', '#nome', 'x', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('EquivalenciaInvalidaNomeFornecedorTamanhoSuperior', () => {
        cy.editarTexto('5', '1', '#nome', 'JFkWdFOizMn4ElN80PsROI1UkO1rjVZiOBMthqv2ctYcCctTko9kBlJKwm00ijZb6', 'Atualizar', true, 'Máximo de 60 caracteres.')
    });

    it('EquivalenciaInvalidaDescricaoFornecedorNula', () => {
        cy.editarNulo('5', '1', '#descricao', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaDescricaoFornecedorTamanhoInferior', () => {
        cy.editarTexto('5', '1', '#descricao', 'd', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('EquivalenciaInvalidaDescricaoFornecedorTamanhoSuperior', () => {
        cy.editarTexto('5', '1', '#descricao', '3zcx7AiJsR2d4W69WIInF9QQG4D6qq8LTi5kGye0XShyzIe08bwYg1hCHbtAy4UtfIGBF1ndQ8cPJjrJWeBsxmYcWFJxi9USu4lh3T1wGSgAH3Pw2nzKl0gIcwzXkQAsqGn5NZoZdZprepdurMetBoDaXlvNwIi3cDMGR38OoJvSo96WL1enz84QhiL0Em7NH8dhZ1NYPAusQogIqDmWk7DpX5GdKXw5b6zjpPhwPgzVYQJrx5JdXUwCmsr79Ajn', 'Atualizar', true, 'Máximo de 255 caracteres.')
    });

    it('EquivalenciaInvalidaEndereçoFornecedorNula', () => {
        cy.editarNulo('5', '1', '#endereco', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaEndereçoFornecedorTamanhoInferior', () => {
        cy.editarTexto('5', '1', '#endereco', 'd', 'Atualizar', true, 'Endereço muito pequeno')
    });

    it('EquivalenciaInvalidaEnderecoFornecedorTamanhoSuperior', () => {
        cy.editarTexto('5', '1', '#endereco', 'klwtPoWYeBQEoShQcowdsiVy1KJmSgckeVnVWiBCXSrrZGweTVIcoOTkcoxEKKzDKfyyVGoJvggTHgydlLYeqtCFzNsTVHRibwnef', 'Atualizar', true, 'Máximo de 100 caracteres.')
    });
    it('EquivalenciaInvalidaContatoFornecedorNula', () => {
        cy.editarNulo('5', '1', '#contato', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaContatoFornecedorTamanhoInferior', () => {
        cy.editarTexto('5', '1', '#contato', 'd', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('EquivalenciaInvalidaContatoFornecedorTamanhoSuperior', () => {
        cy.editarTexto('5', '1', '#contato', 'klwtPoWYeBQEoShQcowdsiVy1KJmSgckeVnVWiBCXSrrZGweTVIcoOTkcoxEKKzDKfyyVGoJvggTHgydlLYeqtCFzNsTVHRibwnef', 'Atualizar', true, 'Máximo de 100 caracteres.')
    });

    it('EquivalenciaValidaAtivo', () => {
        cy.editarRadiobutton('5','1','#ativo', 'Atualizar')
    });

    it('EquivalenciaValidaDesativo', () => {
        cy.editarRadiobutton('5','1','#desativado', 'Atualizar')
    });

});

function editarTexto3(nome, descricao, contato, endereco, status){

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', 1).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = 5; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get('#nome').clear()
    cy.get('#descricao').clear()
    cy.get('#contato').clear()
    cy.get('#endereco').clear()

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#contato').type(contato)
    cy.get('#endereco').type(endereco)
    cy.get(status).click()
}