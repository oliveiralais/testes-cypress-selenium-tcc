function editarTexto(identificacao, campo, dado, erro, mensagem) {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.wait(2000)
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get(campo).clear().type(dado)
    cy.get('#modalidadeEsportiva').select('Futsal - Masculino')
    if(erro == false){

        cy.contains('button', 'Concluir').click()
        
    }else{

        cy.contains('button', 'Concluir').click()
        cy.validator(mensagem)

    }

}

describe('Analise Valor Lmite', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/listar-autoridades')

    });

    it('NomeAutorirdadeValidoLimiteSuperiorMenosUM', () => {
        
        editarTexto('gui1@gmail.com', '#nome', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', false)
       

    });
    it('NomeAutorirdadeValidoLimiteSuperiorExato', () => {
        
        editarTexto('gui1@gmail.com', '#nome', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', false)

    });
    
    it('NomeAutoridadeInvalidoLimiteSuperiorMaisUM', () => {

        editarTexto('gui1@gmail.com', '#nome', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', true, 'Máximo de 50 caracteres.')
        
    });

    it('NomeAutorirdadeInvalidoLimiteInferiorMenosUm', () => {
        
        editarTexto('gui1@gmail.com', '#nome', 'Aaa', true, 'Mínimo de 4 caracteres.')

    });
    it('NomeAutorirdadeValidoLimiteInferiorExato', () => {
        
        editarTexto('gui1@gmail.com', '#nome', 'Aaaa', false)

    }); 
    it('NomeAutorirdadeValidoLimiteInferiorMaisUM', () => {

        editarTexto('gui1@gmail.com', '#nome', 'Aaaaa', false)
        
    });

    it('IdentificacaoFiscalValidoCPFIgual', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '663.916.760-38', false)

    });

    it('IdentificacaoFiscalValidoCNPJIgual', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '94.145.393/0001-75', false)

    });

    it('TelefoneInvalidoLimiteMenosUm', () => {

        editarTexto('CampoTelefone', '#telefone', '(14) 99999-000', true, 'Mínimo de 15 caracteres.')
        
    });

    it('TelefoneValidoLimiteIgual', () => {

        editarTexto('CampoTelefone', '#telefone', '(99) 99999-9999', false)
        
    });

    it('TelefoneInvalidoLimiteMenosUm', () => {

        editarTexto('CampoTelefone', '#telefone', '(14) 99999-99999', true, 'Insira um telefone valido.')
        
    });

    it('EmailInvalidoLimiteInferiorMenosUm', () => {

        editarTexto('CampoEmail', '#email', 'a@aaa.com', true, 'Mínimo de 10 caracteres.')
        
    });

    it('EmailValidoLimiteinferiorIgual', () => {

        editarTexto('CampoEmail', '#email', 'aa@aaa.com', false)
        
    });

    it('EmailValidoLimiteInferiorMaisUm', () => {

        editarTexto('CampoEmail', '#email', 'aaa@aaa.com', false)
        
    });

    it('EmailValidoLimiteSuperiorMenosUm', () => {

        editarTexto('CampoEmail', '#email', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com', false)
        
    });

    it('EmailValidoLimiteSuperiorIgual', () => {

        editarTexto('CampoEmail', '#email', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com', false)
        
    });

    it('EmailInvalidoLimiteInferiorMenosUm', () => {

        editarTexto('CampoEmail', '#email', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com', true, 'Máximo de 50 caracteres.')
        
    });

    it('FuncaoInvalidaLimiteInferiorMenosUm', () => {
        
        editarTexto('CampoFuncao', '#funcao', 'Aaa', true, 'Mínimo de 4 caracteres.')

    });

    it('FuncaoValidaLimiteInferiorIgual', () => {
        
        editarTexto('CampoFuncao', '#funcao', 'Aaaa', false)

    });

    it('FuncaoValidaLimiteInferiorMaisUm', () => {
        
        editarTexto('CampoFuncao', '#funcao', 'Aaaaa', false)

    });

    it('FuncaoValidaLimiteSuperiorMenosUm', () => {
        
        editarTexto('CampoFuncao', '#funcao', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', false)

    });

    it('FuncaoValidaLimiteSuperiorIgual', () => {
        
        editarTexto('CampoFuncao', '#funcao', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', false)

    });

    it('FuncaoInvalidaLimiteSuperiorMaisUm', () => {
        
        editarTexto('CampoFuncao', '#funcao', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', true, 'Máximo de 30 caracteres.')

    });

    it('CertificaoInvalidaLImiteInferiorMenosUm', () => {

        editarTexto('CampoCertificacao', '#certificacao', '1234', true, 'Mínimo de 5 caracteres.')

    });

    it('CertificaoValidaLimiteInferiorIgual', () => {

        editarTexto('CampoCertificacao', '#certificacao', '12345', false)

    });

    it('CertificaoValidaLimiteInferiorMaisUm', () => {

        editarTexto('CampoCertificacao', '#certificacao', '123456', false)

    });

    it('CertificaoValidaLimiteSuperiorMenosUm', () => {

        editarTexto('CampoCertificacao', '#certificacao', '99999999999999999999999999999',false)

    });

    it('CertificaoValidaLimiteSuperiorIgual', () => {

        editarTexto('CampoCertificacao', '#certificacao', '999999999999999999999999999999',false)

    });

    it('CertificaoInvalidaLimiteSuperiorMaisUm', () => {

        editarTexto('CampoCertificacao', '#certificacao', '9999999999999999999999999999999',true, 'Máximo de 30 caracteres')

    });



    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/listar-autoridades')

    });

    it('IdentificacaoFiscalInvalidaCPFMenosUm', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '123.456.789-0', true, 'Mínimo de 14 caracteres.')

    });

    it('IdentificacaoFiscalInvalidaCNPJMenosUm', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '67.402.337/0001-0', true, 'Insira um CPF ou CNPJ válido.')

    });

    it('IdentificacaoFiscalInvalidaCPFMaisUm', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '035.083.970-090', true, 'Insira um CPF ou CNPJ válido.')

    });


    it('IdentificacaoFiscalInvalidaCNPJMaisUm', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '10.945.261/0001-380', true, 'Mínimo de 18 caracteres.')

    });

});

