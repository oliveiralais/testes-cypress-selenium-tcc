describe('Cenarios', () => {
    it('Listar Eventos', () => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()

        cy.get('[href="/dashboard/eventos"]').click()
        cy.get('[href="/dashboard/eventos"]').click()

    });
});

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
        cancelarPatrocinador('2')
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

describe('Remover Patrocinador', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
    });

    it('RemocaoCanceladaPatrocinador', () => {
        removerPatrocinador('2', true)
    });

    it('RemocaoPatrocinadorBemSucedida', () => {
        removerPatrocinador('1', false)
    });

});

function removerPatrocinador(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Patrocinador').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}
describe('Cenarios', () => {
    it('Listar Patrocínios', () => {
        cy.visit("http://localhost:4200/dashboard/patrocinador/1/patrocinios")
    });
});

describe('Editar Fornecedor', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
    });

    it('EdicaoFornecedorBemSucedida', () => {
        cy.editarRadiobutton('5','1','#desativado', 'Atualizar')
    });

    it('EdicaoFornecedorCamposIncorretos', () => {
        cy.editarTexto('5', '1', '#nome', 'sOuFxmAwi8c0ioUKmNL6VaFk48INcr6pcf4gpHle8PD1ocpYwVtU4Amot0S6B', 'Atualizar', false)
    });

    
    it('EdicaoFornecedorCamposEmBranco', () => {
        cy.editarNulo('5', '1', '#nome', 'Atualizar', 'Campo obrigatório.')
    });

    it('EdicaoFornecedorCancelada', () => {
        removerFornecedores('2')
    });
    
});

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

describe('Desativar Fornecedor', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
    });

    it('RemocaoCanceladaPatrocinador', () => {
        removerFornecedores('1', true)
    });
    
    it('RemocaoProdutoBemSucedida', () => {
        removerFornecedores('1', false)
    });

});

function removerFornecedores(identificacao, cancelar) {

    const remover = '[data-bs-target="#modalConfirmacao"]';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 5; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(remover).click();

    })
    if(cancelar == false){

        cy.contains('button', 'Excluir Fornecedor').click()
        
    }else{

        cy.contains('button', 'Cancelar').click()

    }

}


