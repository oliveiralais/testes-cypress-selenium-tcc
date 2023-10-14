describe('Editar Fornecedores - Análise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
    });

 
    it('NomeFornecedorInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('5', '1', '#nome', 'ds', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('NomeFornecedorValidoLimiteInferiorExatamente', () => {
        cy.editarTexto('5', '1', '#nome', 'abc', 'Atualizar', false)
    });

    it('NomeFornecedorValidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('5', '1', '#nome', 'aBcd', 'Atualizar', false)
    });

    it('NomeFornecedorValidoLimiteSuperiorMenosUm', () => {
        cy.editarTexto('5', '1', '#nome', 'mJzBLhGWZGfpRkimRmTfLZXUmAlbanxEVDLSlIsirLnPeLbLKqSLPCJYMZN', 'Atualizar', false)
    });

    it('NomeFornecedorValidoLimiteSuperiorExatamente', () => {
        cy.editarTexto('5', '1', '#nome', 'mJzBLhGWZGfpRkimRmTfLZXUmAlbalnxEVDLSlIsirLnPeLbLKqSLPCJYMZN', 'Atualizar', false)
    });

    it('NomeFornecedorInvalidoLimiteSuperiorMaisUm', () => {
        cy.editarTexto('5', '1', '#nome', 'mJzBLhGWZGfpRkimRmTfLZXUmAlbalnxEVDLSlIsirLnPeLbLKqSLPCJYMZN2', 'Atualizar', true, 'Máximo de 60 caracteres.')
    });

    it('DescricaoFornecedorInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('5', '1', '#descricao', 'xd', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('DescricaoFornecedorValidoLimiteInferiorExatamente', () => {
        cy.editarTexto('5', '1', '#descricao', 'ABc', 'Atualizar', false)
    });

    it('DescricaoFornecedorValidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('5', '1', '#descricao', 'ABcD', 'Atualizar', false)
    });

    it('DescricaoFornecedorValidoLimiteSuperiorMenosUm', () => {
        cy.editarTexto('5', '1', '#descricao', 'IxdXk2oWonQzJGzb9ANSMzHrzQdXwYP7qqLq9sTw35H34rHawporHEDya4U5dD0zHYQjC5YtjMvl9eCzb9zyhNLxFVpGRmcgC0WWW9yr9NoT42uOFtp4QMlNJQ5UPEhttJ0b57PguXkhrdOArf1tTGP5GHeR9vqtcGv5qVx9rFPoAK5JJ1u7VR2dxGJ5Sp51pK4p5na9A9qVP39REsrvZEozOljFngOA7LXxtNAopAyd1ZWMqUuU4MoQxRmK2T', 'Atualizar', false)
    });

    it('DescricaoFornecedorValidoLimiteSuperiorExatamente', () => {
        cy.editarTexto('5', '1', '#descricao', 'w42QaRmy3mvGBTguCqgg57kTUZOIdu9HtXfkQ4yPZRn9MdcmYDuA16EeVvE5FViP0ZEP5ipyySDs3V4wdw3AVn7hyzisCrtQnCv6le7mYziyYUocIfGbT9TFD5Cmnt6MQAHghhmWP0VnkJQDOu4exfOfYrxTCPrvAd5n5WRg1FkMSzas12aN6c55UPQFTfpwz6XgoM4uYciJjRbsCVofdFAKgvXA7U9FrVIOR0RMg2iqpjfd4KJPFhc6S2E2u2y', 'Atualizar', false)
    });

    it('DescricaoFornecedorInvalidoLimiteSuperiorMaisUm', () => {
        cy.editarTexto('5', '1', '#descricao', 'r27ruaMFwJmxW6FpJxM5YvxMau0NTRE7wjSzNQFP0LXBHvQnVKlTjKQyS1O5XmBWxLBHw7Pr4ukb20IooJi9MZOmaX5T0WPHabrcq3zV39hhBpiyShfs3Mu1dfdZY6XM2VQC6yaNSKGPjVHrEcTsyaNYtAVJhk5p52FvgAREptXe6JrPdEqdQl0xRXP9a2BXXZygWz96LmCnyBWBcljzfCSfs6bmJWrCocLNCQx0e2SO2PFXIOFHPSvCFzhBUc5M', 'Atualizar', true, 'Máximo de 255 caracteres.')
    });

    it('ContatoFornecedorInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('5', '1', '#contato', 'xd', 'Atualizar', true, 'Mínimo de 3 caracteres.')
    });

    it('ContatoFornecedorValidoLimiteInferiorExatamente', () => {
        cy.editarTexto('5', '1', '#contato', 'ABc', 'Atualizar', false)
    });

    it('ContatoFornecedorValidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('5', '1', '#contato', 'ABcD', 'Atualizar', false)
    });

    it('ContatoFornecedorValidoLimiteSuperiorMenosUm', () => {
        cy.editarTexto('5', '1', '#contato', 'QPWbHuTPdnnKGIWHssngFagJVhqaRGrzVTuqVLRatynnGdsvpTYnQxJkGZlumJCZMIdNRVRncuMUvAKupflTpmGsSQFoZhzPufo', 'Atualizar', false)
    });

    it('ContatoFornecedorValidoLimiteSuperiorExatamente', () => {
        cy.editarTexto('5', '1', '#contato', 'QPWbHuTPdnnKGIWHssngFagJVhqaRGrzVTuqVLRatynnGdsvpTYnQxJkGZlumJCZMIdNRVRncuMUvAKupflTpmGsSQFoZhzPufoQ', 'Atualizar', false)
    });

    it('ContatoFornecedorInvalidoLimiteSuperiorMaisUm', () => {
        cy.editarTexto('5', '1', '#contato', 'QPWbHuTPdnnKGIWHssngFagJVhqaRGrzVTuqVLRatynnGdsvpTYnQxJkGZlumJCZMIdNRVRncuMUvAKupflTpmGsSQFoZhzPufoQ1', 'Atualizar', true, 'Máximo de 100 caracteres.')
    });

    it('EndereçoFornecedorInvalidoLimiteInferiorMenosUm', () => {
        cy.editarTexto('5', '1', '#endereco', 'xd', 'Atualizar', true, 'Endereço muito pequeno')
    });

    it('EndereçoFornecedorValidoLimiteInferiorExatamente', () => {
        cy.editarTexto('5', '1', '#endereco', 'ABc', 'Atualizar', false)
    });

    it('EndereçoFornecedorValidoLimiteInferiorMaisUm', () => {
        cy.editarTexto('5', '1', '#endereco', 'ABcD', 'Atualizar', false)
    });

    it('EndereçoFornecedorValidoLimiteSuperiorMenosUm', () => {
        cy.editarTexto('5', '1', '#endereco', 'QPWbHuTPdnnKGIWHssngFagJVhqaRGrzVTuqVLRatynnGdsvpTYnQxJkGZlumJCZMIdNRVRncuMUvAKupflTpmGsSQFoZhzPufo', 'Atualizar', false)
    });

    it('EndereçoFornecedorValidoLimiteSuperiorExatamente', () => {
        cy.editarTexto('5', '1', '#endereco', 'QPWbHuTPdnnKGIWHssngFagJVhqaRGrzVTuqVLRatynnGdsvpTYnQxJkGZlumJCZMIdNRVRncuMUvAKupflTpmGsSQFoZhzPufoQ', 'Atualizar', false)
    });

    it('EndereçoFornecedorInvalidoLimiteSuperiorMaisUm', () => {
        cy.editarTexto('5', '1', '#endereco', 'QPWbHuTPdnnKGIWHssngFagJVhqaRGrzVTuqVLRatynnGdsvpTYnQxJkGZlumJCZMIdNRVRncuMUvAKupflTpmGsSQFoZhzPufoQ1', 'Atualizar', true, 'Máximo de 100 caracteres.')
    });
   
});