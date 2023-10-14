describe('Cadastro do patrocinador - Analise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
        cy.contains("Inserir Novo").click()
    });

    it('NomeInvalidoLimiteInferiorMenosUm', () => {
        cadastrarPatrocinadorPessoaFisica("ab", "134.534.234-52", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('NomeValidoLimiteInferiorExatamente', () => {
        cadastrarPatrocinadorPessoaFisica("Tom", "584.463.210-92", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('NomeValidoLimiteInferiorMaisUm', () => {
        cadastrarPatrocinadorPessoaFisica("Noah", "732.868.640-56", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('NomeValidoLimiteSuperiorMenosUm', () => {
        cadastrarPatrocinadorPessoaFisica("YJxbVdGnhjAcVBdcyPafljpmubgARreHyFCzSTnokRanwNzWjEWvhjrFqQr", "122.195.430-05", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('NomeValidoLimiteSuperiorExatamente', () => {

        
        cadastrarPatrocinadorPessoaFisica("zsbTYjnWpYmaQiMBLBgOmlHSbRGZDksFLOUShkCtwvdURdveaoPlfQgqnxwt", "829.050.140-40", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('NomeValidoLimiteSuperiorMaisUm', () => {
        cadastrarPatrocinadorPessoaFisica("yZqziXZzWbJzcqRQXHcJuojwtTsTpFAzbkptkumUgQEPVnsquSSJsDCMCDCbQ", "677.153.970-91", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('CPFInvalidoLimiteInferiorMenosUm', () => {
        cadastrarPatrocinadorPessoaFisica("Pedro Santos", "557.657.940-2", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('CPFValidoLimiteInferiorExatamente', () => {
        cadastrarPatrocinadorPessoaFisica("Pedro Garcia", "557.657.940-25", "(19) 98265-4321", "emailsdao@gmail.com", "https://www.woopfh.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('CPFInvalidoLimiteInferiorMaisUm', () => {
        cadastrarPatrocinadorPessoaFisica("Pedro Santos", "557.657.940-252", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('CNPJInvalidoLimiteInferiorMenosUm', () => {
        cadastrarPatrocinadorPessoaJuridica("Johny", "55.639.296/0001-8", "(19) 98265-4321", "emailsddo@gmail.com", "https://www.urldaora.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('CNPJValidoLimiteInferiorExatamente', () => {
        cadastrarPatrocinadorPessoaJuridica("Johny", "55.639.296/0001-87", "(19) 98265-4321", "emailsddaa@gmail.com", "https://www.urldda.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('CNPJInvalidoLimiteInferiorMaisUm', () => {
        cadastrarPatrocinadorPessoaJuridica("Peter", "55.639.296/0001-872", "(19) 98265-4321", "emaiasaaaaa@gmail.com", "https://www.ugrndf.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('TelefoneValidoLimiteSuperiorMenosUm', () => {
        cadastrarPatrocinadorPessoaFisica("Ben Tennyson", "621.210.350-01", "(019) 8888-8888", "emafasdaaa@gmail.com", "https://www.http.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('TelefoneValidoLimiteSuperiorExatamente', () => {
        cadastrarPatrocinadorPessoaFisica("Gwen Tennyson", "233.414.440-17", "(019) 98888-7777", "emafggdaaa@gmail.com", "https://www.hsttp.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('TelefoneInvalidoLimiteSuperiorMaisUm', () => {
        cadastrarPatrocinadorPessoaFisica("Maxwell", "850.052.700-51", "(019) 98888-88889", "emafggdaaa@gmail.com", "https://www.hsttp.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EmailInvalidoLimiteInferiorMenosUm', () => {
        cadastrarPatrocinadorPessoaFisica("Vilgax", "684.035.310-95", "(019) 92228-4489", "oi@uol.br", "https://www.hatp.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EmailValidoLimiteInferiorExatamente', () => {
        cadastrarPatrocinadorPessoaFisica("Vilgax", "684.035.310-95", "(019) 92228-4489", "tst@uol.br", "https://www.hatp.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });

    it('EmailValidoLimiteInferiorMaisUm', () => {
        cadastrarPatrocinadorPessoaFisica("Lobo", "486.737.770-89", "(019) 91128-4489", "vic@uol.com", "https://www.hattp.com")

        
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