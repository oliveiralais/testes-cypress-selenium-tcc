function criarAutoridade(nome, email, telefone, idFiscal, certificacao, funcao){

    cy.get('#nome').type(nome)    
    cy.get('#email').type(email)
    cy.get('#telefone').type(telefone)
    cy.get('#identificacaoFiscal').type(idFiscal)
    cy.get('#certificacao').type(certificacao)
    cy.get('#funcao').type(funcao)
    cy.get('#modalidadeEsportiva').select('Futsal - Masculino')
    
}

describe('Particionamento de Equivalência', () => {

    beforeEach('', () => {
        cy.viewport(1920,1080)
        cy.visit("http://localhost:4200/dashboard/listar-autoridades")
        cy.contains("Inserir Novo").click()
    });

    it('NomeAutorirdadeValidoLimiteSuperiorMenosUM', () => {

        criarAutoridade('JackFrostTttttttttttttttttttttttttttttttttttttt', 'guilherme@gmail.com', '(14) 90774-5341', '824.176.360-34', '24925124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        

    });

    it('NomeAutoridadValidoLimiteSuperiorExato', () => {

        criarAutoridade('Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'guilhermeada@gmail.com', '(14) 90704-5341', '893.694.960-84', '24925124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso

    });

    it('NomeAutoridadeInvalidoLimiteSuperiorMaisUM ', () => {

        criarAutoridade('Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'guilhermaaaaaae@gmail.com', '(14) 90774-0341', '321.101.920-03', '24925924145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 50 caracteres.')
        //Falha
        
    });
    it('NomeAutorirdadeInvalidoLimiteInferiorMenosUM', () => {

        criarAutoridade('Jac', 'guilasdah@gmail.com', '(14) 95874-5241', '123.450.789-04', '24194194145', 'Juiz');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 4 caracteres.')
        //Sucesso
        

    });

    it('NomeAutoridadValidoLimiteInferiorExato', () => {

        criarAutoridade('Jack', 'guilasdah@gmail.com', '(14) 95874-5241', '107.578.200-77', '24194194145', 'Juiz');
        cy.contains('button', 'Cadastrar')
        //Sucesso

    });

    it('NomeAutoridadeValidoLimiteInferiorMaisUm', () => {

        criarAutoridade('Jackk', 'guilasdarrh@gmail.com', '(14) 95875-5241', '315.617.010-09', '24190194145', 'Juiz');
        cy.contains('button', 'Cadastrar')
        
        //sucesso
        
    });

    it('IdentificacaoFiscalInvalidaCPFMenosUm', () => {
        
        criarAutoridade('Jack Frost Y', 'guaaidasdaleh@gmail.com', '(14) 98064-5241', '123.456.789-0', '007724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 14 caracteres.')
        //Falha
    });

    it('IdentificacaoFiscalValidaCPFIgual', () => {
        
        criarAutoridade('Jack Frost Ya', 'guaaidasdaleh@gmail.com', '(14) 98064-5241', '854.430.110-06', '007724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso

    });

    it('IdentificacaoFiscalInvalidoCPFMaisUm', () => {

        criarAutoridade('Jack Frost G', 'guidasdaasadaleh@gmail.com', '(14) 99000-5241', '881.475.560-470', '047724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um CPF ou CNPJ válido.')
        //Falha

    });

    it('TelefoneInvalidoLimiteSuperiorMenosUm', () => {

        criarAutoridade('Jack Frost L', 'guidaasdasdaooleh@gmail.com', '(14) 99774-524', '434.488.820-03', '237724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 15 caracteres.')
        //Sucesso

    });

    it('TelefoneValidoLimiteSuperiorIgual', () => {
        
        criarAutoridade('Jack Frost W', 'guidaasduasdaooleh@gmail.com', '(14) 99774-5245', '610.166.290-01', '237824194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso

    });

    it('TelefoneInvalidoLimiteSuperiorMaisUm', () => {

        criarAutoridade('Jack Frost M', 'uidaasduasdaooleh@gmail.com', '(14) 99774-52456', '402.996.950-00', '237024194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 15 caracteres.')
        //Falha
        
    });

    it('EmailIvalidoLimiteInferiorMenosUm', () => {

        criarAutoridade('Jack Frost P', 'g@gma.com', '(14) 99774-5249', '901.499.330-70', '237824194140', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 10 caracteres.')
        //Sucesso

        
    });

    it('EmailIValidoLimiteInferiorIgual', () => {

        criarAutoridade('JackFrostB', 'g@gmai.com', '(14) 99734-5245', '038.447.520-56', '137824194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        
    });

    it('EmailValidoLimiteInferiorMaisUm', () => {

        criarAutoridade('JackFrostC', 'g@gmail.com', '(14) 99274-5245', '920.832.000-63', '237804194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        
    });

    it('EmailValidoLimiteSuperiorMenosUm', () => {

        criarAutoridade('JackFrostZ', 'guidaasduasdaooleadasdasdasdasdasdasaah@gmail.com', '(14) 99774-5245', '245.057.180-93', '237824194140', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        
    });

    it('EmailValidoLimiteSuperiorIgual', () => {

        criarAutoridade('Jack Frost Z', 'guidaasduasdaooleadasdasdasdasdasdasaaha@gmail.com', '(14) 99774-5205', '008.507.670-83', '237824294145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        
    });

    it('EmailInvalidoLimiteSuperiorMaisUm', () => {

        criarAutoridade('Jac kFrost W', 'guidaasduasdaooleadasdasdasdasdasdasaahaa@gmail.com', '(14) 99674-5245', '008.507.670-83', '237824194245', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 50 caracteres.')
        //Falha
        
    });

    it('IdentificacaoFiscalInvalidoCNPJMenosUm', () => {

        criarAutoridade('Jack Frost Ya', 'guaaidaasdasdaleh@gmail.com', '(14) 98164-5241', '84.416.943/0001-9', '000724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um CPF ou CNPJ válido.')
        //Falha
        
    });

    it('IdentificacaoFiscalValidoCNPJIgual', () => {

        criarAutoridade('Jack Frost Ha', 'guidasdaleh@gmail.com', '(14) 99774-5241', '75.770.502/0001-09', '247724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        
        
    });

    it('IdentificacaoFiscalInvalidoCNPJMaisUm', () => {

        criarAutoridade('Jack Fros tGd', 'guidasdaaszdaleh@gmail.com', '(14) 99010-5241', '29.591.406/0001-780', '017724194145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 18 caracteres.')
        //Falha

    });

    it('FuncaoInvalidoLimiteInferiorMenosUm', () => {

        criarAutoridade('Jack Frost P', 'gdasdasdad@gma.com', '(14) 99004-5249', '594.500.570-36', '237024194149', 'Ban');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 4 caracteres.')
        //Sucesso
        
    });

    it('FuncaoValidoLimiteInferiorIgual ', () => {

        criarAutoridade('Jack Frost Pf', 'gasdaddad@gma.com', '(24) 99014-5249', '036.714.180-95', '237824194148', 'Band');
        cy.contains('button', 'Cadastrar')
        //Sucesso
    
    });

    it('FuncaoValidoLimiteInferiorMaisUm', () => {
        
        criarAutoridade('Jack Frost Psda', 'gdasdaadad@gma.com', '(14) 99779-5249', '061.687.640-89', '237804194149', 'Bande');
        cy.contains('button', 'Cadastrar')
        //Sucesso
        
    });

    it('FuncaoValidoLimiteSuperiorMenosUm', () => {

        criarAutoridade('Jack Frost Pasda', 'gdasad@gma.com', '(14) 99704-5249', '593.669.940-40', '237824194140', 'Bandeirinhaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Cadastrar')
        //Sucesso
             
    });

    it('FuncaoValidoLimiteSuperiorIgual', () => {

        criarAutoridade('Jack Frost Gh', 'gdasdad@gma.com', '(14) 99114-5249', '951.117.610-20', '2378240000', 'Bandeirinhaaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Cadastrar')
        //Sucesso

        
    });

    it('FuncaoInvalidoLimiteSuperiorMaisUm', () => {

        criarAutoridade('Jack Frost Pad', 'gdaaaasdad@gma.com', '(14) 99104-5249', '307.886.850-82', '230024194149', 'Bandeirinhaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 30 caracteres.')
        //Falha

        
    });
    
    it('CertificacaoInvalidoLimiteInferiorMenosUm', () => {

        criarAutoridade('Jack Frost PRt', 'gdasoooad@gma.com', '(13) 90104-5249', '073.292.660-27', '2370', 'Bandeira');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 5 caracteres.')
        //Sucesso

    });

    it('CertificacaoValidoLimiteInferiorIgual ', () => {

        criarAutoridade('Jack Frost P', 'gdasdaspppp@gmail.com', '(14) 91111-5249', '404.374.910-48', '23990', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso

        
    });
    
    it('CertificacaoValidoLimiteInferiorMaisUm', () => {

        criarAutoridade('Jack Frost Pol', 'gdasdeitoad@gma.com', '(14 )92222-5249', '916.100.110-40', '237021', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Sucesso


    });

    it('CertificacaoValidoLimiteSuperiorMenosUm', () => {

        criarAutoridade('Jack Frost Padd', 'gdappppdasdad@gmail.com', '(14) 96666-5249', '178.585.760-62', '23702419477742412412414141144', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        //Falha

    });

    it('CertificacaoValidoLimiteSuperiorIgual', () => {

        criarAutoridade('Jack Frost P', 'gdasdasasadadad@gma.com', '(14) 93333-5249', '502.780.570-55', '111024194149242412412412412412', 'Bandeirinha');
        cy.contains('button', 'Cadastrar');
        //Sucesso

    });

    it('CertificacaoInvalidoLimiteSuperiorMaisUm', () => {

        criarAutoridade('Jack Frost Pll', 'gasdadpppdadd@gma.com', '(14) 90000-5249', '008.613.550-32', '2378241941481535235463464346337', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 30 caracteres.')
        //Falha
        
    });

});