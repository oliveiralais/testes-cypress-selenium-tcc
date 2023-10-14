
describe('Cenarios', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/fornecedores")
        cy.contains("Inserir Novo").click()
    });
    
    it('Cadastrar novo fornecedor', () => {
        
        criarTansacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
        cy.get(':nth-child(6) > .me-2').click()
    });
    
    it('Cadastrar fornecedor com campo incorreto', () => {
        
        criarTansacao(".a"," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
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
        
        criarTansacao("ModaShirt Inc."," A ModaShirt Inc. é uma renomada fornecedora de camisas de alta qualidade."
                    , "+55 (16) 3222-2587", "Avenida da Moda, 456, Bairro Fashionista, Cidade da Moda", '#ativo' )
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