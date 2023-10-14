function criarAutoridade(nome, email, telefone, idFiscal, certificacao, funcao){

    cy.get('#nome').type(nome)    
    cy.get('#email').type(email)
    cy.get('#telefone').type(telefone)
    cy.get('#identificacaoFiscal').type(idFiscal)
    cy.get('#certificacao').type(certificacao)
    cy.get('#funcao').type(funcao)
    cy.get('#modalidadeEsportiva').select('Futsal - Masculino');
}

describe('Particionamento de Equivalência', () => {

    beforeEach('', () => {
        cy.viewport(1920,1080)
        cy.visit("http://localhost:4200/dashboard/listar-autoridades")
        cy.contains("Inserir Novo").click()
    });


    it('EquivalenciaValidaTodosCamposValidos', () => {

        criarAutoridade('Jack Frost', 'guilhm@gmail.com', '(14) 99774-5341', '600.781.290-10', '24924124145', 'Quarto Arbitro');
        cy.contains('button', 'Cadastrar').click()
        //sucesso

    });

    it('EquivalenciaInvalidaNomeNUlo', () => {
   
        cy.get('#email').type('guilh@gmail.com')
        cy.get('#telefone').type('(14) 99774-5241')
        cy.get('#identificacaoFiscal').type('273.189.730-96')
        cy.get('#certificacao').type('24124124145')
        cy.get('#funcao').type('Bandeirinha')
        cy.get('#modalidadeEsportiva').select('Futsal - Masculino')

        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Campo obrigatório.')
        //Sucesso
        
    });

    it('EquivalenciaInvalidaNomeTamanhoSuperior', () => {
        
        criarAutoridade('Jack Frost Ahahahshahhahahahahahhahahhahaahahahahaa', 'guilah@gmail.com', '(14) 95774-5241', '521.288.700-38', '24194124145', 'Juiz');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 50 caracteres.')
        //falha

    });

    it('EquivalenciaInvalidaCPFSuperior', () => {
        
        criarAutoridade('JackFrost', 'guileh@gmail.com', '(14) 99774-5241', '063.656.190-909', '247724124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um CPF ou CNPJ válido.')
        //falha

    });

    it('EquivalenciaInvalidaCPFNulo', () => {

        cy.get('#nome').type('Jack Frostt')
        cy.get('#email').type('gauilh@gmail.com')
        cy.get('#telefone').type('(14) 93774-5241')
        
        cy.get('#certificacao').type('14124124145')
        cy.get('#funcao').type('Bandeirinha')
        cy.get('#modalidadeEsportiva').select('Futsal - Masculino')

        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Campo obrigatório.')
        
        //Sucesso
        
    });

    it('EquivalenciaInvalidaTelefoneNulo', () => {
        
        cy.get('#nome').type('Jack Fro')
        cy.get('#email').type('guasilh@gmail.com')
        cy.get('#identificacaoFiscal').type('123.456.789-08')
        cy.get('#certificacao').type('34124124145')
        cy.get('#funcao').type('Bandeirinha')
        cy.get('#modalidadeEsportiva').select('Futsal - Masculino')

        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Campo obrigatório.')
        //Sucesso
        
    });

    it('EquivalenciaInvalidaTelefoneComLetras', () => {

        criarAutoridade('JackFro', 'gufdeilh@gmail.com', '(14) 99774-524a', '123.456.789-09', '94124124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um telefone válido.')
        //falha
        
    });

    it('EquivalenciaInvalidaTelefoneComEspeciais', () => {

        criarAutoridade('Jack Fros tAhahahsh', 'guilhas@gmail.com', '(14) 99774-524@', '123.456.789-08', '54124124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um telefone válido.')
        //falha
        
    });

    it('EquivalenciaInvalidaTelefoneInferior', () => {
        
        criarAutoridade('Jack Frost Ahahahshahhahahah', 'guilsadh@gmail.com', '(14) 99774-524', '123.456.789-55', '247724124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 15 caracteres.')
        //sucesso

    });

    it('EquivalenciaInvalidaTelefonesSuperior', () => {

        criarAutoridade('Jack Frost Ahahahsha', 'guilsadh@gmail.com', '(14) 99774-52411', '123.456.789-56', '29124024145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um telefone válido.')
        //falha

    });

    it('EquivalenciaInvalidaEmailNulo', () => {

        cy.get('#nome').type('Guizin da Atletica')
        cy.get('#telefone').type('(14) 99774-5241')
        cy.get('#identificacaoFiscal').type('123.456.789-15')
        cy.get('#certificacao').type('24164124145')
        cy.get('#funcao').type('Bandeirinha')
        cy.get('#modalidadeEsportiva').select('Futsal - Masculino')

        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Campo obrigatório.')
        //Sucesso
        
    });

    it('EquivalenciaInvalidaEmailInferior', () => {

        criarAutoridade('Guizin Jogador', 'g@gma.com', '(14) 99774-5341', '124.456.789-05', '24124121145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 10 caracteres.')
        //sucesso
        
    });

    it('EquivalenciaInvalidaEmailSuperior', () => {

        criarAutoridade('Guizin Jogador Bom', 'guizinahahahahahahahahahahahahahahahahaha@gmail.com', '(14) 99774-5541', '125.456.789-05', '23124121149', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 50 caracteres.')
        //falha

    });

    it('EquivalenciaInvalidaEmailSemCaractere@', () => {

        criarAutoridade('Guizin Jogador Ruim', 'guizinnnngmail.com', '(14) 99774-0341', '024.456.789-05', '24124121245', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um E-mail válido.')
        //falha
        
    });

    it('EquivalenciaInvalidaFuncaoNula', () => {

        cy.get('#nome').type('Guizin Jogador Ah')
        cy.get('#email').type('guianasda@gma.com')
        cy.get('#telefone').type('(14) 99674-5341')
        cy.get('#identificacaoFiscal').type('120.456.789-05')
        cy.get('#certificacao').type('14124121145')
        cy.get('#modalidadeEsportiva').select('Futsal - Masculino')

        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Campo obrigatório.')
        //Sucesso
        
    });

    it('EquivalenciaInvalidaFuncaoSuperior', () => {

        criarAutoridade('Guizin Jogador Ahg', 'guianasasdada@gma.com', '(14) 99684-5341', '120.450.789-05', '14124121149', 'Juizzzzzzzzzzzzzzzzzzzzzzzzzzzz');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 30 caracteres.')
        //falha

    });

    it('EquivalenciaInvalidaFuncaoComCaractereEspcial', () => {

        criarAutoridade('Guizin Jogador Aho', 'guianasdaaa@gma.com', '(14) 99674-5351', '120.456.789-12', '14124121140', 'B@ndeirinha');
        cy.contains('button', 'Cadastrar').click();
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira uma Função válida.')
        //falha
        
    });

    it('EquivalenciaInvalidaCertificacaoNula', () => {

        cy.get('#nome').type('Guizin Jogador Ahq')
        cy.get('#email').type('guianasasdaaada@gma.com')
        cy.get('#telefone').type('(14) 99694-5341')
        cy.get('#identificacaoFiscal').type('645.055.170-47')
        cy.get('#funcao').type('Bandeirinha')
        cy.get('#modalidadeEsportiva').select('Futsal - Masculino') 

        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Campo obrigatório.')
        //Sucesso
        
    });

    
    it('EquivalenciaInvalidaCertificacaoSuperior', () => {

        criarAutoridade('Guizin Jogador Aht', 'guianaqqqsda@gma.com', '(14) 99674-5141', '128.456.789-05', '2839710397120371203173070123971', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 30 caracteres.')
        //falha
        
    });

    it('EquivalenciaInvalidaCPFInferior', () => {

        criarAutoridade('Jack Frost', 'guiadaleh@gmail.com', '(14) 99774-5241', '123.456.789-0', '244724124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 14 caracteres.')
        //falha

    });

    it('EquivalenciaInvalidaNomeAutoridadeTamanhoInferior', () => {

        criarAutoridade('Jac', 'guilasdah@gmail.com', '(14) 95874-5241', '123.450.789-04', '24194194145', 'Juiz');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 4 caracteres.')
        //sucesso

    });

    it('EquivalenciaInvalidaCPFContendoLetras', () => {
        
        criarAutoridade('Jack Frosttad', 'gauilqweqh@gmail.com', '(11) 93774-5241', 'a23.456.789-00', '14121124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um CPF ou CNPJ válido.')
        //falha

    });

    it('EquivalenciaInvalidaFuncaoInferior', () => {

        criarAutoridade('Guizin Jogador', 'guianasdada@gma.com', '(12) 99684-5341', '120.350.789-05', '14124121140' ,'Jui');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 4 caracteres.')
        //sucesso

    });

    it('EquivalenciaInvalidaCertificacaoInferior', () => {

        criarAutoridade('Guizin Jogador Ahtad', 'guianaasqqqsda@gma.com', '(14) 99974-5141', '128.450.789-05', '2839', 'Bandeirinha');
        cy.contains('button', 'Cadastrar')
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Mínimo de 5 caracteres.')
        //sucesso

    });

    it('EquivalenciaInvalidaCPFForaDoFormato', () => {

        criarAutoridade('Jack Frost', 'guileadah@gmail.com', '(11) 99774-5241', '1969.80.810-11', '247720124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        //Falha

    });

    it('EquivalenciaInvalidaCPNJForaDoFormato', () => {

        criarAutoridade('Jack Frost Uueu', 'guileadah@gmail.com', '(11) 99774-5241', '979.69.253/0001-00', '2007724124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        //Falha
        
    });
    it('EquivalenciaInvalidaCNPJInferior', () => {

        criarAutoridade('Jack Frost', 'guilehqq@gmail.com', '(14) 99774-1241', '06.127.703/0001-6', '247724124145', 'Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Insira um CPF ou CNPJ válido.')
        //Falha
        
        
    });

    

    it('EquivalenciaInvalidaCNPJSuperior', () => {

        criarAutoridade('Jack Frost Mb', 'guilekkh@gmail.com', '(14) 99874-5241', '86.250.027/0001-580', ' 247728124145','Bandeirinha');
        cy.contains('button', 'Cadastrar').click()
        cy.get('.text-danger > div').should('be.visible').and('contain', 'Máximo de 18 caracteres.')
        //Falha


    });

    

});