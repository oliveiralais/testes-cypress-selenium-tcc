

describe('Cenarios', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
        cy.contains("Inserir Novo").click()
    });

    it('Cadastrar um novo produto', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()
        
    });
    
    it('Cadastrar produto com campo incorreto', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", "Doze", "A venda"
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
        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > :nth-child(2)').click()

    });
    
});

function criarTansacao(nome, descricao, quantidade, status, exclusivo, excluido, fornecedor){

    cy.get('#nome').type(nome)
    cy.get('#descricao').type(descricao)
    cy.get('#quantidade').type(quantidade)
    cy.get('#status').type(status)
    cy.get(exclusivo).check()
    cy.get(excluido).check()
    cy.get('#fornecedor').select(fornecedor)

}
