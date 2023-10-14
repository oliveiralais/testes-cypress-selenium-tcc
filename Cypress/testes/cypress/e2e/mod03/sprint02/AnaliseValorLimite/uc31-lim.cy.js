describe('Editar Patrocinadores - Análise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
    });

 
    it('NomePatrocinadoresInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('6', '2', '#nome', 'ds', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('NomePatrocinadoresValidoLimiteInferiorExatamente', () => {
        cy.editarTexto('6', '2', '#nome', 'abc', 'Atualizar', false)
    });

    it('NomePatrocinadoresValidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('6', '2', '#nome', 'aBcd', 'Atualizar', false)
    });

    it('NomePatrocinadoresValidoLimiteSuperiorMenosUm', () => {
        cy.editarTexto('6', '2', '#nome', 'mJzBLhGWZGfpRkimRmTfLZXUmAlbanxEVDLSlIsirLnPeLbLKqSLPCJYMZN', 'Atualizar', false)
    });

    it('NomePatrocinadoresValidoLimiteSuperiorExatamente', () => {
        cy.editarTexto('6', '2', '#nome', 'mJzBLhGWZGfpRkimRmTfLZXUmAlbalnxEVDLSlIsirLnPeLbLKqSLPCJYMZN', 'Atualizar', false)
    });

    it('NomePatrocinadoresInvalidoLimiteSuperiorMaisUm', () => {
        cy.editarTexto('6', '2', '#nome', 'mJzBLhGWZGfpRkimRmTfLZXUmAlbalnxEVDLSlIsirLnPeLbLKqSLPCJYMZN2', 'Atualizar', true, 'Máximo de 60 caracteres.')
    });

    it('CPFPatrocinadoresInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('6', '2', '#cpf_cnpj', '557.657.940-2', 'Atualizar', true, 'Mínimo de 14 caracteres.')
    });

    it('CPFPatrocinadoresInvalidoLimiteInferiorExatamente', () => {
        cy.editarTexto('6', '2', '#cpf_cnpj', '557.657.940-25', 'Atualizar', false)
    });

    it('CPFPatrocinadoresInvalidoLimiteInferiorMaissUm', () => {
        cy.editarTexto('6', '2', '#cpf_cnpj', '557.657.940-252', 'Atualizar', true, 'Insira um CPF ou CNPJ válido.')
    });

    it('CNPJPatrocinadoresInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('6', '2', '#cpf_cnpj', '55.639.296/0001-8', 'Atualizar', true, 'Insira um CPF ou CNPJ válido.')
    });

    it('CNPJPatrocinadoresInvalidoLimiteInferiorExatamente', () => {
        cy.editarTexto('6', '2', '#cpf_cnpj', '55.639.296/0001-87S', 'Atualizar', false)
    });

    it('CNPJPatrocinadoresInvalidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('6', '2', '#cpf_cnpj', '55.639.296/0001-872', 'Atualizar', true, 'Máximo de 18 caracteres.')
    });

    it('TelefonePatrocinadoresValidoLimiteSuperiorMenosUm', () => {
        cy.editarTexto('6', '2', '#telefone', '(019) 8888-888846', 'Atualizar', false)
    });

    it('TelefonePatrocinadoresValidoLimiteSuperiorExatamente', () => {
        cy.editarTexto('6', '2', '#telefone', '(019) 98888-777471', 'Atualizar', false)
    });

    it('TelefonePatrocinadoresInvalidoLimiteSuperiorMaisUm', () => {
        cy.editarTexto('6', '2', '#telefone', '(019) 98888-8888918', 'Atualizar', true, 'Máximo de 18 caracteres.')
    });

    it('EmailPatrocinadoresInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('6', '2', '#email', 'oi@uol.br', 'Atualizar', true, 'Mínimo de 10 caracteres.')
    });

    it('EmailPatrocinadoresInvalidoLimiteInferiorExatamente', () => {
        cy.editarTexto('6', '2', '#email', 'tst@uol.br', 'Atualizar', false)
    });

    it('EmailPatrocinadoresInvalidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('6', '2', '#email', 'vic@uol.com', 'Atualizar', false)
    });

});
