describe('Editar Produtos Cadastrados na Loja - Análise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()
        cy.get('[href="/dashboard/list-product"]').click()
    });


    it('NomeProdutoInvalidoLimiteInferiorMenosUm', () => {
        editarTexto1('#nome', 'dsdd', 'Concluir Cadastro', true, 'Mínimo de 5 caracteres.')
    });

    it('NomeProdutoValidoLimiteInferiorExatamente', () => {
        editarTexto1('#nome', 'vbaxd', 'Concluir Cadastro', false)
    });

    it('NomeProdutoValidoLimiteInferiorMaisUm', () => {
        editarTexto1('#nome', 'okokok', 'Concluir Cadastro', false)
    });

    it('NomeProdutoValidoLimiteSuperiorMenosUm', () => {
        editarTexto1('#nome', 'FXFB4y49p4MnDGunEIfp1Il8Ctx25cDxyrDxqxG1NbtFKc2pN', 'Concluir Cadastro', false)
    });

    it('NomeProdutoValidoLimiteSuperiorExatamente', () => {
        editarTexto1('#nome', 'UowdfmMtdMAgNXH9GLCUaBVDK2Ng5w55KF1nMyUSHn7ruslcLT', 'Concluir Cadastro', false)
    });

    it('NomeProdutoInvalidoLimiteSuperiorMaisUm', () => {
        editarTexto1('#nome', 'CxlsRFzXRxlySfFzy0uPhneUD4vD8G75jmNRvBaVp6WMoC6J6IT', 'Concluir Cadastro', true, 'Máximo de 50 caracteres.')
    });

    it('DescricaoProdutoInvalidoLimiteInferiorMenosUm', () => {
        editarTexto1('#descricao', 'xdxd', 'Concluir Cadastro', true, 'Mínimo de 5 caracteres.')
    });

    it('DescricaoProdutoValidoLimiteInferiorExatamente', () => {
        editarTexto1('#descricao', 'adsds', 'Concluir Cadastro', false)
    });

    it('DescricaoProdutoValidoLimiteInferiorMaisUm', () => {
        editarTexto1('#descricao', 'xdxdxd', 'Concluir Cadastro', false)
    });

    it('DescricaoProdutoValidoLimiteSuperiorMenosUm', () => {
        editarTexto1('#descricao', 'IxdXk2oWonQzJGzb9ANSMzHrzQdXwYP7qqLq9sTw38H34rHawporHEDya4U8dD0zHYQjC5YtjMvl9eCzb9zyhNLxFVpGRmcgC0WWW9yr9NoT42uOFtp4QMlNJQ5UPEhttJ0b57PguXkhrdOArf1tTGP8GHeR9vqtcGv5qVx9rFPoAK8JJ1u7VR2dxGJ5Sp81pK4p8na9A9qVP39REsrvZEozOljFngOA7LXxtNAopAyd1ZWMqUuU4MoQxRmK2T', 'Concluir Cadastro', false)
    });

    it('DescricaoProdutoValidoLimiteSuperiorExatamente', () => {
        editarTexto1('#descricao', 'w42QaRmy3mvGBTguCqgg87kTUZOIdu9HtXfkQ4yPZRn9MdcmYDuA16EeVvE8FViP0ZEP8ipyySDs3V4wdw3AVn7hyzisCrtQnCv6le7mYziyYUocIfGbT9TFD5Cmnt6MQAHghhmWP0VnkJQDOu4exfOfYrxTCPrvAd5n8WRg1FkMSzas12aN6c58UPQFTfpwz6XgoM4uYciJjRbsCVofdFAKgvXA7U9FrVIOR0RMg2iqpjfd4KJPFhc6S2E2u2y', 'Concluir Cadastro', false)
    });

    it('DescricaoProdutoInvalidoLimiteSuperiorMaisUm', () => {
        editarTexto1('#descricao', 'r27ruaMFwJmxW6FpJxM8YvxMau0NTRE7wjSzNQFP0LXBHvQnVKlTjKQyS1O5XmBWxLBHw7Pr4ukb20IooJi9MZOmaX5T0WPHabrcq3zV39hhBpiyShfs3Mu1dfdZY6XM2VQC6yaNSKGPjVHrEcTsyaNYtAVJhk8p52FvgAREptXe6JrPdEqdQl0xRXP9a2BXXZygWz96LmCnyBWBcljzfCSfs6bmJWrCocLNCQx0e2SO2PFXIOFHPSvCFzhBUc8M', 'Concluir Cadastro', true, 'Máximo de 255 caracteres.')
    });

    it('QuantidadeInvalidoLimiteInferiorMenosUm', () => {
        editarTexto1('#quantidade', '-2', 'Concluir Cadastro', true, 'Insira uma quantidade válida.')
    });

    it('QuantidadeInvalidoLimiteInferiorExatamente', () => {
        editarTexto1('#quantidade', '0', 'Concluir Cadastro', true, 'Insira uma quantidade válida.')
    });

    it('QuantidadeValidoLimiteInferiorMaisUm', () => {
        editarTexto1('#quantidade', '1', 'Concluir Cadastro', false)
    });

    it('StatusInvalidoLimiteInferiorMenosUm', () => {
        editarTexto1('#status', 'yuuy', 'Concluir Cadastro', true, 'Mínimo de 5 caracteres.')
    });
    
    it('StatusValidoLimiteInferiorExatamente', () => {
        editarTexto1('#status', 'ststs', 'Concluir Cadastro', false)
    });

    it('StatusValidoLimiteInferiorMaisUm', () => {
        editarTexto1('#status', 'statou', 'Concluir Cadastro', false)
    });

    it('StatusValidoLimiteSuperiorMenosUm', () => {
        editarTexto1('#status', 'epf7uxXR6uOT8ZGMH4kdWol7RmYqe', 'Concluir Cadastro', false)
    });

    it('StatusValidoLimiteSuperiorExatamente', () => {
        editarTexto1('#status', 'zy7RdWupMjfmBLEdavpwhYS43iHzx5', 'Concluir Cadastro', false)
    });

    it('StatusInvalidoLimiteSuperiorMaisUm', () => {
        editarTexto1('#status', '5Wq6BWhOfXrFtqUuOBXHTFLBGElkxxN', 'Concluir Cadastro', true, 'Máximo de 30 caracteres.')
    });

});

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