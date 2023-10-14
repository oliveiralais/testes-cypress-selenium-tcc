describe('Editar Patrocinadores - Particionamento por Equivalência', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
    });

    it('EquivalenciaInvalidaNomePatrocinadorNulo', () => {
        cy.editarNulo('6', '1', '#nome', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaValidaEdicaoPatrocinadorCorreta', () => {
        editarTexto4('#pessoaJuridica','Mark Zuke','markZuke@meta.com','(16) 99592-6483','470.902.128-74','about.meta.com','#ativo')

        cy.contains('button', 'Atualizar').click()
    });

    it('EquivalenciaInvalidaCpfPatrocinadorTamanhoInferior', () => {
        cy.editarTexto('6', '1', '#cpf_cnpj', '620.705.720-1', 'Atualizar', true, 'Insira um CPF ou CNPJ válido.')
    });

    it('EquivalenciaInvalidaCpf_CnpjPatrocinadorNulo', () => {
        cy.editarNulo('6', '1', '#cpf_cnpj', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaCpfPatrocinadorIncorreto', () => {
        cy.editarTexto('6', '1', '#cpf_cnpj', '620.705', 'Atualizar', true, 'Insira um CPF ou CNPJ válido.')
    });

    it('EquivalenciaInvalidaCnpjPatrocinadorIncorreto', () => {
        cy.editarTexto('6', '1', '#cpf_cnpj', ' 9/0001-15', 'Atualizar', true, 'Insira um CPF ou CNPJ válido.')
    });

    it('EquivalenciaInvalidaTelefonePatrocinadorTamanhoSuperior', () => {
        cy.editarTexto('6', '1', '#telefone', '12345678901234567', 'Atualizar', true, 'Máximo de 18 caracteres.')
    });
    
    it('EquivalenciaInvalidaTelefonePatrocinadorNulo', () => {
        cy.editarNulo('6', '1', '#telefone', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaEmailPatrocinadorNulo', () => {
        cy.editarNulo('6', '1', '#email', 'Atualizar', 'Campo obrigatório.')
    });

    it('EquivalenciaInvalidaEmailPatrocinadorTamanhoInferior', () => {
        cy.editarTexto('6', '1', '#email', 'b@b.com', 'Atualizar', true, 'Mínimo de 10 caracteres.')
    });

    it('EquivalenciaInvalidaEmailPatrocinadorIncorreto', () => {
        cy.editarTexto('6', '1', '#email', ' emailemailemail', 'Atualizar', true, 'Email inválido')
    });

    it('EquivalenciaInvalidaCnpjPatrocinadorTamanhoInferior', () => {
        cy.editarTexto('6', '1', '#cpf_cnpj', '29.433.024/001-16', 'Atualizar', true, 'Insira um CPF ou CNPJ válido.')
    });

});

function editarTexto4(status, nome, email, telefone, cpf, url, status2){

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', 1).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = 6; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#telefone').clear()
    cy.get('#cpf_cnpj').clear()
    cy.get('#website').clear()

    cy.get(status).click()
    cy.get('#nome').type(nome)
    cy.get('#email').type(email)
    cy.get('#telefone').type(telefone)
    cy.get('#cpf_cnpj').type(cpf)
    cy.get('#website').type(url)
    cy.get(status2).click()
}