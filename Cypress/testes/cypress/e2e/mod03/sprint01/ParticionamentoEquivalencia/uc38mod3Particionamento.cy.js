
describe('Particionamento de Equivalencia', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
        cy.contains("Inserir Novo").click()
    });
    
    it('Equivalencia cadastro fornecedor', () => {
        
        criarTansacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia nome nulo', () => {
        
        cy.get('#nome').click().blur()
        cy.get('#descricao').type("A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade.")
        cy.get('#contato').type("+55 (16) 3222-2587")
        cy.get('#endereco').type("Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda")
        cy.get('#ativo').click()

    });
    
    it('Equivalencia nome tamanho inferior', () => {
        
        criarTansacao("Aa"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia nome tamanho superior', () => {

        criarTansacao("txHqEBqCuDvjzHdIygRMGeQTieeCXRbUkxIXsbzmHkktrGjZBFqVsEzGhHcEQ"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()

    });
    
    it('Equivalencia descrição nulo', () => {
        
        cy.get('#nome').type("ModaShirt Inc.")
        cy.get('#descricao').click().blur()
        cy.get('#contato').type("+55 (16) 3222-2587")
        cy.get('#endereco').type("Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda")
        cy.get('#ativo').click()

    });
    
    it('Equivalencia descrição tamanho inferior', () => {
        
        criarTansacao("ModaShirt Inc."," a."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia descrição tamanho superior', () => {
        
        criarTansacao("ModaShirt Inc.","fNsqKLuHScjGmpcAWVNMBMJCAFGRUSRVNKMENKNFLKByLWQTsjzcHXwJNoZnjqkTnMruLdhUrGmKxzzTdGCjwScVZfNngnQNEcKCLIdoWJuFacAveQCTvJFMCNpLbLDPlQsbXShqNeAYOoiwbvaJIByzGfgydiAkpTxZAaPKctfhzlOMTmOASlVSVllamNxCFRPWGnCnxTEuvFYFpLfSOcUDWzmyYoUlvNTMmkhaeuqEhuYaPzOBhBQoipchjfXT"
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia endereço nulo', () => {
        
        cy.get('#nome').type("ModaShirt Inc.")
        cy.get('#descricao').type("A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade.")
        cy.get('#contato').type("+55 (16) 3222-2587")
        cy.get('#endereco').click().blur()
        cy.get('#ativo').click()

    });
    it('Equivalencia endereço tamanho inferior', () => {
        
        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "aa", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia endereço tamanho inferior', () => {
        
        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "gYhRBKlChhTslHFzdjFenLFOiAZErmJprWidoGeCoqsoEVJlHqQwLlExnoKZbLbiaUlFULEovsRPiIlHARYbINUjbDfMSKpBvUAoa", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia contato nulo', () => {
        
        cy.get('#nome').type("ModaShirt Inc.")
        cy.get('#descricao').type("A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade.")
        cy.get('#contato').click().blur()
        cy.get('#endereco').type("Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda")
        cy.get('#ativo').click()

    });

    it('Equivalencia contato tamanho inferior', () => {
        
        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+5", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });

    it('Equivalencia contato tamanho superior', () => {
        
        criarTansacao("ModaShirt Inc.","A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "QRShqTalFkohLATFWLnmrKbNVCzXUldPyqRygwsvlVzgzteXjLLFkZNQjEfUNEcPOKVfcfmamEgHMxGNJminVdYbHhZUXljzLejjO", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Equivalencia cadastro fornecedor ativo', () => {
        
        criarTansacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });

    it('Equivalencia cadastro fornecedor ativo', () => {
        
        criarTansacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#desativado' )
        cy.get(':nth-child(6) > :nth-child(2)').click()
    });
    
});

function criarTansacao(nome, descricao, contato, endereco, ativo){

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#contato').type(contato)
    cy.get('#endereco').type(endereco)
    cy.get(ativo).click()

}