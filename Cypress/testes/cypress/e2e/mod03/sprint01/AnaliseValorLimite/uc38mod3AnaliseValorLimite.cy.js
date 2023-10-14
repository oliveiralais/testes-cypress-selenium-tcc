
describe('Analise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
        cy.contains("Inserir Novo").click()
    });
    
    it('Nome do fornecedor limite inferior menos um', () => {

        criarTansacao("Ab"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite inferior exato', () => {

        criarTansacao("Abc"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite inferior mais um', () => {

        criarTansacao("Abcd"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    

    it('Nome do fornecedor limite superior menos um', () => {

        criarTansacao("JhOsJgayKFyCaLyVavevEZITrJbklGHNicgaKkzBKDftfUhoWmvvYwmFtDQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite superior exato', () => {

        criarTansacao("JhOsJgayKFyCaLyVavevEZITrJbklGHNicgaKkzBKDftfUhoWmvvsYwmFtDQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Nome do fornecedor limite superior mais um', () => {

        criarTansacao("JhOsJgayKFyCaLyvVavevEZITrJbklGHNicgaKkzBKDftfUhoWmvvsYwmFtDQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite inferior menos um', () => {

        criarTansacao("ModaShirt Inc.","a."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite inferior exato', () => {

        criarTansacao("ModaShirt Inc.","abc"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Descrição do fornecedor limite inferior mais um', () => {

        criarTansacao("ModaShirt Inc.","abc"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite superior menos um', () => {

        criarTansacao("ModaShirt Inc.","FuXcUFCZxhoLQUbIxYrdhWrOMHTKquGmgDyTCdRoLiQFYdwstGsVvCvbynQigLnoSgezOKaPIoCHNmyrJHGVRnnRMHvsTwcbQdbjsfendKMYSxnPTeGCNmswlwiowdqyRARvlvbblqarbukVFOrXJwVXYITfhCCXvMSQGSgMJtpAauRgCTvyDdOfvwhfrSioKXrACIcQplTvQemcbyyBOuVtIdzYIWoHHsCtaNRdqrUAmUcjHWloZuazaMFCWB"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Descrição do fornecedor limite superior exato', () => {

        criarTansacao("ModaShirt Inc.","FuXcUFCZxhoLQUbIxYradhWrOMHTKquGmgDyTCdRoLiQFYdwstGsVvCvbynQigLnoSgezOKaPIoCHNmyrJHGVRnnRMHvsTwcbQdbjsfendKMYSxnPTeGCNmswlwiowdqyRARvlvbblqarbukVFOrXJwVXYITfhCCXvMSQGSgMJtpAauRgCTvyDdOfvwhfrSioKXrACIcQplTvQemcbyyBOuVtIdzYIWoHHsCtaNRdqrUAmUcjHWloZuazaMFCWB"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Descrição do fornecedor limite superior mais um', () => {

        criarTansacao("ModaShirt Inc.","FuXcUFCZxhosLQUbIxYradhWrOMHTKquGmgDyTCdRoLiQFYdwstGsVvCvbynQigLnoSgezOKaPIoCHNmyrJHGVRnnRMHvsTwcbQdbjsfendKMYSxnPTeGCNmswlwiowdqyRARvlvbblqarbukVFOrXJwVXYITfhCCXvMSQGSgMJtpAauRgCTvyDdOfvwhfrSioKXrACIcQplTvQemcbyyBOuVtIdzYIWoHHsCtaNRdqrUAmUcjHWloZuazaMFCWB"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Contato do fornecedor limite inferior menos um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+5", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Contato do fornecedor limite inferior exato', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Contato do fornecedor limite inferior mais um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55(", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Contato do fornecedor limite superior menos um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "EbJIfhSPlMWPdOczgPhxhGXiubZuLvBSDlXWsdKZuKMxQOLpSrtLpVYrXTgqhqffzWLjbRljXnWNxgtlXcGMNiXWkwCNyNkjmKE", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    it('Contato do fornecedor limite superior exato', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "EbJIfhSPlMWPdOczgPhxhGXiubZuaLvBSDlXWsdKZuKMxQOLpSrtLpVYrXTgqhqffzWLjbRljXnWNxgtlXcGMNiXWkwCNyNkjmKE", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Contato do fornecedor limite superior mais um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "EbJIfhSPlMWPdOczgPhxhGXiubZuaLvBSDalXWsdKZuKMxQOLpSrtLpVYrXTgqhqffzWLjbRljXnWNxgtlXcGMNiXWkwCNyNkjmKE", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Endereço do fornecedor limite inferior menos um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Ab", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite inferior exato', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Abc", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite inferior mais um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Abcd", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Endereço do fornecedor limite superior menos um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "kJqMdQNKjrfOMmbKoYzdEgckWHpcqHtDOPEQNzCoGbsjhkhJxAqfajRZnRWYaiRCpOqFHxBFBGutzqYSrNBxlJOghpdvxiHPkJg", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite superior exato', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "kJqMdQNKjrfOMmabKoYzdEgckWHpcqHtDOPEQNzCoGbsjhkhJxAqfajRZnRWYaiRCpOqFHxBFBGutzqYSrNBxlJOghpdvxiHPkJg", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

    it('Endereço do fornecedor limite superior mais um', () => {

        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "kJqMdQNKjrfOMmafbKoYzdEgckWHpcqHtDOPEQNzCoGbsjhkhJxAqfajRZnRWYaiRCpOqFHxBFBGutzqYSrNBxlJOghpdvxiHPkJg", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });

});

function criarTansacao(nome, descricao, contato, endereco, ativo){

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#contato').type(contato)
    cy.get('#endereco').type(endereco)
    cy.get(ativo).click()

}