function criarAutoridade(nome, email, telefone, idFiscal, certificacao, funcao){

    cy.get('#nome').type(nome)    
    cy.get('#email').type(email)
    cy.get('#telefone').type(telefone)
    cy.get('#identificacaoFiscal').type(idFiscal)
    cy.get('#certificacao').type(certificacao)
    cy.get('#funcao').type(funcao)
    cy.get('#modalidadeEsportiva').select('Futsal - Masculino');
}
    //Teste de Cenários
    describe('Cenários', () => {
        
        beforeEach('', () => {
            cy.viewport(1920,1080)
            cy.visit("http://localhost:4200/dashboard/listar-autoridades")
            cy.contains("Inserir Novo").click()
        });
    
        it('CadastroComSucesso', () => {

            criarAutoridade('Guilherme Alves', 'guilh@gmail.com', '(14) 99774-5241',  '679.093.050-79', '24124124145', 'Bandeirinha')
            cy.contains('button', 'Cadastrar').click()
            //sucesso

        });

    
        it('CadastroCampoNaoPreenchido', () => {
            
            cy.contains('button', 'Cadastrar').click()
            cy.url().should('include', '/cadastro-autoridades')
            //sucesso
            
        });

        it('CancelarCadastro', () => {

            cy.contains('Voltar').click()
            cy.url().should('include', '/listar-autoridades')
            //sucesso
            
        });
    
    });


//Teste de Cenários
