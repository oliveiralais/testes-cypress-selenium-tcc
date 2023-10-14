describe('Cadastro do patrocinador - Particionamento por Equivalencia', () => {
    
    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
        cy.contains("Inserir Novo").click()
    });

    it('EquivalenciaInvalidaNomeNulo', () => {
        cy.get('#pessoaFisica').check({force:true})
        cy.get('#cpf_cnpj').type('234.234.234-52')
        cy.get('#telefone').type('(19) 98765-4321')
        cy.get('#email').type('emailzasso@gmail.com')
        cy.get('#website').type('urlmassa.com')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
    });

    it('EquivalenciaInvalidaNomeTamanhoInferior', () => {


        cadastrarPatrocinadorPessoaFisica("a", "234.234.234-52", "(19) 98765-4321", "emailzasso@gmail.com", "urlmassa.com")

        
        cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaNomeTamanhoSuperior', () => {

        cadastrarPatrocinadorPessoaFisica("Vkkj7ZhlGJi18nZNgp85uuddKn3o2j15e16dnEMvdV5b9iON8FWkh8ZZfU78B4Gx3", "234.234.234-52", "(19) 98765-4321", "emailzasso@gmail.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaPessoaFisicaNula', () => {
        cy.get('#nome').type('Vkgfdgsfg3')
        cy.get('#cpf_cnpj').type('234.234.234-52')
        cy.get('#telefone').type('(19) 98765-4321')
        cy.get('#email').type('emailzasso@gmail.com')
        cy.get('#website').type('urlmassa.com')

        cy.contains('button', 'Concluir Cadastro').click()
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaCPFTamanhoInferior', () => {

        cadastrarPatrocinadorPessoaFisica("Vkgfdgsfg3", "620.705.720-1", "(19) 98765-4321", "emailzasso@gmail.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaCPF/CNPJNulo', () => {
        cy.get('#pessoaFisica').check({force:true})
        cy.get('#nome').type('Vkgfdgsfg3')
        cy.get('#telefone').type('(19) 98765-4321')
        cy.get('#email').type('emailzasso@gmail.com')
        cy.get('#website').type('urlmassa.com')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
    });

    it('EquivalenciaInvalidaCPFIncorreto', () => {

        cadastrarPatrocinadorPessoaFisica("Vkgfdgsfg3", "620.704", "(19) 98765-4321", "emailzasso@gmail.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaCNPJIncorreto', () => {

        cadastrarPatrocinadorPessoaJuridica("Teste", "9/0001-15", "(19) 98765-4321", "emailzasso@gmail.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaTelefoneTamanhoSuperior', () => {

        cadastrarPatrocinadorPessoaFisica("Vkkttt", "234.234.234-52", "12345678901234567", "emailzasso@gmail.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaTelefoneNulo', () => {
        cy.get('#pessoaFisica').check({force:true})
        cy.get('#nome').type('Vkgfdgsfg3')
        cy.get('#cpf_cnpj').type('234.234.234-52')
        cy.get('#email').type('emailzasso@gmail.com')
        cy.get('#website').type('urlmassa.com')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
    });

    it('EquivalenciaInvalidaEmailNulo', () => {
        cy.get('#pessoaFisica').check({force:true})
        cy.get('#nome').type('Vkgfdgsfg3')
        cy.get('#cpf_cnpj').type('234.234.234-52')
        cy.get('#telefone').type('(19) 98765-4321')
        cy.get('#website').type('urlmassa.com')

        cy.contains('button', 'Concluir Cadastro').click()
        cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
    });

    it('EquivalenciaInvalidaEmailTamanhoInferior', () => {

        cadastrarPatrocinadorPessoaFisica("Vkagsdttt", "234.134.234-52", "(19) 98765-4321", "b@b.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaEmailIncorreto', () => {

        cadastrarPatrocinadorPessoaFisica("Vkgfdgsfg3", "234.134.234-52", "(19) 98765-4321", "emailemailemail", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EquivalenciaInvalidaCNPJTamanhoInferior', () => {

        cadastrarPatrocinadorPessoaJuridica("Vkagsdttt", "29.433.024/001-16", "(19) 98765-4321", "bdasdasdasd@bing.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

});

function cadastrarPatrocinadorPessoaFisica(nome, cpf, tel, email, url){
    cy.get('#pessoaFisica').check({force:true})
    cy.get('#nome').type(nome)
    cy.get('#cpf_cnpj').type(cpf)
    cy.get('#telefone').type(tel)
    cy.get('#email').type(email)
    cy.get('#website').type(url)

    cy.contains('button', 'Concluir Cadastro').click()
}

function cadastrarPatrocinadorPessoaJuridica(nome, cpf, tel, email, url){
    cy.get('#pessoaJuridica').check({force:true})
    cy.get('#nome').type(nome)
    cy.get('#cpf_cnpj').type(cpf)
    cy.get('#telefone').type(tel)
    cy.get('#email').type(email)
    cy.get('#website').type(url)

    cy.contains('button', 'Concluir Cadastro').click()
}