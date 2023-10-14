

describe('Analise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
        cy.contains("Inserir Novo").click()
    });
    
    it('Nome do produto limite inferior menos um', () => {

        CriarTransacao("Ab", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite inferior exato', () => {

        CriarTransacao("Pet", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite inferior mais um', () => {

        CriarTransacao("Lata", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite superior menos um', () => {

        CriarTransacao("OmJKsuChVptkPsKUSTiTsYFtnKHJSwhICiLpVJWaKQPiEdojosTflnIDioF", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite superior exato', () => {

        CriarTransacao("hMNEOtkFhbqXheqgzLmCyUmspVIblrttdaiFLBFoZTlOPsvRGNCbMEfxXKCb", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite superior mais um', () => {

        CriarTransacao("hMNEOtkFhbqXheqgzLmCyUmspVIblrttdaiFLBFoZTlOPsvRGNCbMEfxXKCbE", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite inferior menos um', () => {

        CriarTransacao("Camisa Atletica 2023", "ab", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite inferior exato', () => {

        CriarTransacao("Camisa Atletica 2023", "abc", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite inferior mais um', () => {

        CriarTransacao("Camisa Atletica 2023", "abcd", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite superior menos um', () => {

        CriarTransacao("Camisa Atletica 2023", "AWyizVzDDvmxTPRJRCpzToRhZJbeCLfKMiInRVwlAJDpoIafxGCTpcdMNaPAEizRzFrtFRXksWVEgwMjbPGTTPKTJeKfCHRdOZshjsaVlkovMBWfzRkoBPiKMfMJWdAtoIppEFagrjiibzAhmzVMBppEtrhXdIudqmeMMzpGrNHRVHzPsUXdcQrxqOBMApDMWfTLGWisDFRRQYWAZncjZEOuYbdINYqkadrSFyzNpPEWMMjqWrTdFVtWhaeFNL", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite superior exato', () => {

        CriarTransacao("Camisa Atletica 2023", "AWyizVzDDvsmxTPRJRCpzToRhZJbeCLfKMiInRVwlAJDpoIafxGCTpcdMNaPAEizRzFrtFRXksWVEgwMjbPGTTPKTJeKfCHRdOZshjsaVlkovMBWfzRkoBPiKMfMJWdAtoIppEFagrjiibzAhmzVMBppEtrhXdIudqmeMMzpGrNHRVHzPsUXdcQrxqOBMApDMWfTLGWisDFRRQYWAZncjZEOuYbdINYqkadrSFyzNpPEWMMjqWrTdFVtWhaeFNL", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite superior mais um', () => {

        CriarTransacao("Camisa Atletica 2023", "AWyizVzDDcvsmxTPRJRCpzToRhZJbeCLfKMiInRVwlAJDpoIafxGCTpcdMNaPAEizRzFrtFRXksWVEgwMjbPGTTPKTJeKfCHRdOZshjsaVlkovMBWfzRkoBPiKMfMJWdAtoIppEFagrjiibzAhmzVMBppEtrhXdIudqmeMMzpGrNHRVHzPsUXdcQrxqOBMApDMWfTLGWisDFRRQYWAZncjZEOuYbdINYqkadrSFyzNpPEWMMjqWrTdFVtWhaeFNL", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Quantidade do produto limite inferior menos um', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", -1, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Quantidade do produto limite inferior exato', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 0, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Quantidade do produto limite inferior mais um', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 1, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Status do produto limite inferior menos um', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "ab"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite inferior exato', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "abc"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite inferior mais um', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "abcd"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Status do produto limite superior menos um', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "uwDkMQrktbUsGpmXApfVunwwAWNgN"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite superior exato', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "qKkBwwZQiChPOiuqmdcrjHgIGyoVzQ"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite superior mais um', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "ZfhoCoXagqlvwGjWDlzIWVLwayhwqGo"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
});


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


describe('Analise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
        cy.contains("Inserir Novo").click()
    });
    
    it('Nome do fornecedor limite inferior menos um', () => {

        criarTransacao("Ab"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite inferior exato', () => {

        criarTransacao("Abc"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite inferior mais um', () => {

        criarTransacao("Abcd"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    

    it('Nome do fornecedor limite superior menos um', () => {

        criarTransacao("JhOsJgayKFyCaLyVavevEZITrJbklGHNicgaKkzBKDftfUhoWmvvYwmFtDQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite superior exato', () => {

        criarTransacao("JhOsJgayKFyCaLyVavevEZITrJbklGHNicgaKkzBKDftfUhoWmvvsYwmFtDQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite superior mais um', () => {

        criarTransacao("JhOsJgayKFyCaLyvVavevEZITrJbklGHNicgaKkzBKDftfUhoWmvvsYwmFtDQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite inferior menos um', () => {

        criarTransacao("ModaShirt Inc.","a."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite inferior exato', () => {

        criarTransacao("ModaShirt Inc.","abc"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Descrição do fornecedor limite inferior mais um', () => {

        criarTransacao("ModaShirt Inc.","abc"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite superior menos um', () => {

        criarTransacao("ModaShirt Inc.","FuXcUFCZxhoLQUbIxYrdhWrOMHTKquGmgDyTCdRoLiQFYdwstGsVvCvbynQigLnoSgezOKaPIoCHNmyrJHGVRnnRMHvsTwcbQdbjsfendKMYSxnPTeGCNmswlwiowdqyRARvlvbblqarbukVFOrXJwVXYITfhCCXvMSQGSgMJtpAauRgCTvyDdOfvwhfrSioKXrACIcQplTvQemcbyyBOuVtIdzYIWoHHsCtaNRdqrUAmUcjHWloZuazaMFCWB"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite superior exato', () => {

        criarTransacao("ModaShirt Inc.","FuXcUFCZxhoLQUbIxYradhWrOMHTKquGmgDyTCdRoLiQFYdwstGsVvCvbynQigLnoSgezOKaPIoCHNmyrJHGVRnnRMHvsTwcbQdbjsfendKMYSxnPTeGCNmswlwiowdqyRARvlvbblqarbukVFOrXJwVXYITfhCCXvMSQGSgMJtpAauRgCTvyDdOfvwhfrSioKXrACIcQplTvQemcbyyBOuVtIdzYIWoHHsCtaNRdqrUAmUcjHWloZuazaMFCWB"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Descrição do fornecedor limite superior mais um', () => {

        criarTransacao("ModaShirt Inc.","FuXcUFCZxhosLQUbIxYradhWrOMHTKquGmgDyTCdRoLiQFYdwstGsVvCvbynQigLnoSgezOKaPIoCHNmyrJHGVRnnRMHvsTwcbQdbjsfendKMYSxnPTeGCNmswlwiowdqyRARvlvbblqarbukVFOrXJwVXYITfhCCXvMSQGSgMJtpAauRgCTvyDdOfvwhfrSioKXrACIcQplTvQemcbyyBOuVtIdzYIWoHHsCtaNRdqrUAmUcjHWloZuazaMFCWB"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Contato do fornecedor limite inferior menos um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+5", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Contato do fornecedor limite inferior exato', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Contato do fornecedor limite inferior mais um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55(", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Contato do fornecedor limite superior menos um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "EbJIfhSPlMWPdOczgPhxhGXiubZuLvBSDlXWsdKZuKMxQOLpSrtLpVYrXTgqhqffzWLjbRljXnWNxgtlXcGMNiXWkwCNyNkjmKE", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    it('Contato do fornecedor limite superior exato', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "EbJIfhSPlMWPdOczgPhxhGXiubZuaLvBSDlXWsdKZuKMxQOLpSrtLpVYrXTgqhqffzWLjbRljXnWNxgtlXcGMNiXWkwCNyNkjmKE", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Contato do fornecedor limite superior mais um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "EbJIfhSPlMWPdOczgPhxhGXiubZuaLvBSDalXWsdKZuKMxQOLpSrtLpVYrXTgqhqffzWLjbRljXnWNxgtlXcGMNiXWkwCNyNkjmKE", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Endereço do fornecedor limite inferior menos um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Ab", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite inferior exato', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Abc", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite inferior mais um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Abcd", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Endereço do fornecedor limite superior menos um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "kJqMdQNKjrfOMmbKoYzdEgckWHpcqHtDOPEQNzCoGbsjhkhJxAqfajRZnRWYaiRCpOqFHxBFBGutzqYSrNBxlJOghpdvxiHPkJg", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite superior exato', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "kJqMdQNKjrfOMmabKoYzdEgckWHpcqHtDOPEQNzCoGbsjhkhJxAqfajRZnRWYaiRCpOqFHxBFBGutzqYSrNBxlJOghpdvxiHPkJg", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite superior mais um', () => {

        criarTransacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "kJqMdQNKjrfOMmafbKoYzdEgckWHpcqHtDOPEQNzCoGbsjhkhJxAqfajRZnRWYaiRCpOqFHxBFBGutzqYSrNBxlJOghpdvxiHPkJg", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

});


describe('Listar Produtos Cadastrados na Loja', () => {
    it('ListagemProdutosBemSucedida', () => {
        cy.visit("http://localhost:4200/dashboard")
        cy.get('[href="/dashboard/list-product"]').click()
        //cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", " Camiseta V2023 Tamanho M ")
    });
});



describe('Cenarios', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
        cy.contains("Inserir Novo").click()
    });

    it('Cadastrar um novo produto', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()
        
    });
    
    it('Cadastrar produto com campo incorreto', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", "Doze", "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Cadastrar produto com campo em branco', () => {

        cy.get('#nome').type("Camisa Atletica 2023")
        cy.get('#descricao').type("Camisa DryFit perfeita para todo Lagarto Doido.")
        cy.get('#quantidade').type(50)
        cy.get('#status').click().blur();
        cy.get(':nth-child(5) > :nth-child(2) > #sim').check()
        cy.get(':nth-child(6) > :nth-child(3) > #nao').check()
        cy.get('#fornecedor').select(0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Cancelar Cadastro', () => {
        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > :nth-child(2)').click()

    });
    
});


describe('Listar Patrocinadores', () => {
    it('ListagemPatrocinadoresBemSucedida', () => {
        cy.visit("http://localhost:4200/dashboard")
        cy.get('[href="/dashboard/patrocinadores"]').click()
        //cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", " Alberto Setoguchi Júnior ")
    });
});

describe('Cadastro do patrocinador', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
        cy.contains("Inserir Novo").click()
    });

    it('Inserindo novo patrocinador', () => {

        cadastrarPatrocinadorPessoaFisica("Mark Zuckerberg", "470.902.128-74", "(19) 99592-6483", "mark@meta.com", "about.meta.com")
        //cy.get('tbody > :nth-child(4) > :nth-child(4)').should("have.text", " 470.902.128-74 ")
    });
    it('Inserindo novo patrocinador com campos incorretos', () => {

        cadastrarPatrocinadorPessoaFisica("a", "3", "21", "aa", "https://")
        //cy.get(':nth-child(2) > .text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });
    it('Inserindo novo patrocinador com campos em brancos', () => {

        cy.contains('button', 'Concluir Cadastro').click()
        //cy.get(':nth-child(1) > .text-danger > div').should("have.text", "Campo obrigatório.")
    });
    it('Cancelando inserção do novo patrocinador', () => {

        cy.get('a.btn').click()
        //assert
    });
});


describe('Cenarios', () => {
    it('Listar fornecedores', () => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
    });
});


describe('Cenarios', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
        cy.contains("Inserir Novo").click()
    });
    
    it('Cadastrar novo fornecedor', () => {
        
        criarTransacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Cadastrar fornecedor com campo incorreto', () => {
        
        criarTransacao(".a"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    

    it('Cadastrar fornecedor com campo nulo', () => {
        
        cy.get('#nome').type("ModaShirt Inc.")
        cy.get('#descricao').type("A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade.")
        cy.get('#contato').click().blur()
        cy.get('#endereco').type("Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda")
        cy.get('#ativo').click()
    });
    
    it('Cancelar Cadastro', () => {
        
        criarTransacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > :nth-child(2)').click()
    });

    
});

function criarTransacao(nome, descricao, contato, endereco, ativo){

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#contato').type(contato)
    cy.get('#endereco').type(endereco)
    cy.get(ativo).click()

}



describe('Particionamento de Equivalencia', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
        cy.contains("Inserir Novo").click()
    });
    
    it('Equivalencia cadastro produto', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia nome nulo', () => {

        cy.get('#nome').click().blur()
        cy.get('#descricao').type("Camisa DryFit perfeita para todo Lagarto Doido.")
        cy.get('#quantidade').type(50)
        cy.get('#status').type("A venda")
        cy.get(':nth-child(5) > :nth-child(2) > #sim').check()
        cy.get(':nth-child(6) > :nth-child(3) > #nao').check()
        cy.get('#fornecedor').select(0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia nome tamanho inferior', () => {

        CriarTransacao("aa", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia nome tamanho superior', () => {

        CriarTransacao("ObovbNIIBbzLbsUemIHmyFeEHFBFKwOOOCvJjElweNWlbzLHsJEEkwUhGxpxh", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia descrição nulo', () => {

        cy.get('#nome').type("Camisa Atletica 2023")
        cy.get('#descricao').click().blur()
        cy.get('#quantidade').type(50)
        cy.get('#status').type("A venda")
        cy.get(':nth-child(5) > :nth-child(2) > #sim').check()
        cy.get(':nth-child(6) > :nth-child(3) > #nao').check()
        cy.get('#fornecedor').select(0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia descrição tamanho inferior', () => {

        CriarTransacao("Camisa Atletica 2023", "aa", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia descrição tamanho superior', () => {

        CriarTransacao("Camisa Atletica 2023", "phFouRYvMswZRJvCULTpIjkNFKuKITTIywVqelAnCVykhBGkEVejiFDEMStbeKNHxWyTPSAPdIJzEZRlCuFpHcHemjFHpulTlHEFStJawwBHjfrFBUaWCcqLEsbCYHdnBzfEZzTvrZQtQTjUkZdBdwAfBFBOOIuwcgbAJMKhzbBuUByGjAAfxHmAfckmbmeBrtzVgvRoIteeqWmIKSRaBmvKzUQxrNyORSMAKIDXzmCgmScaCzYESooAFuNYiXVq", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia quantidade nulo', () => {

        cy.get('#nome').type("Camisa Atletica 2023")
        cy.get('#descricao').type("Camisa DryFit perfeita para todo Lagarto Doido.")
        cy.get('#quantidade').click().blur()
        cy.get('#status').type("A venda")
        cy.get(':nth-child(5) > :nth-child(2) > #sim').check()
        cy.get(':nth-child(6) > :nth-child(3) > #nao').check()
        cy.get('#fornecedor').select(0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia quantidade negativa', () => {
        
        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", -5, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia quantidade não inteira', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 5.5, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia quantidade zerada', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 0, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia status nulo', () => {

        cy.get('#nome').type("Camisa Atletica 2023")
        cy.get('#descricao').type("Camisa DryFit perfeita para todo Lagarto Doido.")
        cy.get('#quantidade').type(50)
        cy.get('#status').click().blur()
        cy.get(':nth-child(5) > :nth-child(2) > #sim').check()
        cy.get(':nth-child(6) > :nth-child(3) > #nao').check()
        cy.get('#fornecedor').select(0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia status tamanho inferior', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "aa"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia status tamanho superior', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "fgBcqCOZIbGNSgNRfsmMXhnBntLvhvw"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto exclusivo ativo', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto exclusivo inativo', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(3) > #nao', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto excluido ativo', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(2) > #sim', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto excluido inativo', () => {

        CriarTransacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()
    });
    
});

function CriarTransacao(nome, descricao, quantidade, status, exclusivo, excluido, fornecedor){

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#quantidade').type(quantidade)
    cy.get('#status').type(status)
    cy.get(exclusivo).check()
    cy.get(excluido).check()
    cy.get('#fornecedor').select(fornecedor)

}

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
        //cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
    });

    it('EquivalenciaInvalidaNomeTamanhoInferior', () => {


        cadastrarPatrocinadorPessoaFisica("a", "234.234.234-52", "(19) 98765-4321", "emailzasso@gmail.com", "urlmassa.com")

        
        //cy.get('.text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
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
        //cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
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
        //cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
    });

    it('EquivalenciaInvalidaEmailNulo', () => {
        cy.get('#pessoaFisica').check({force:true})
        cy.get('#nome').type('Vkgfdgsfg3')
        cy.get('#cpf_cnpj').type('234.234.234-52')
        cy.get('#telefone').type('(19) 98765-4321')
        cy.get('#website').type('urlmassa.com')

        cy.contains('button', 'Concluir Cadastro').click()
        //cy.get('.text-danger > div').should("have.text", "Campo obrigatório.")
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

