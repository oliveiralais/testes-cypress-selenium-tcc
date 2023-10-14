

describe('Particionamento de Equivalencia', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
        cy.contains("Inserir Novo").click()
    });
    
    it('Equivalencia cadastro produto', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
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

        criarTansacao("aa", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia nome tamanho superior', () => {

        criarTansacao("ObovbNIIBbzLbsUemIHmyFeEHFBFKwOOOCvJjElweNWlbzLHsJEEkwUhGxpxh", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
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

        criarTansacao("Camisa Atletica 2023", "aa", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia descrição tamanho superior', () => {

        criarTansacao("Camisa Atletica 2023", "phFouRYvMswZRJvCULTpIjkNFKuKITTIywVqelAnCVykhBGkEVejiFDEMStbeKNHxWyTPSAPdIJzEZRlCuFpHcHemjFHpulTlHEFStJawwBHjfrFBUaWCcqLEsbCYHdnBzfEZzTvrZQtQTjUkZdBdwAfBFBOOIuwcgbAJMKhzbBuUByGjAAfxHmAfckmbmeBrtzVgvRoIteeqWmIKSRaBmvKzUQxrNyORSMAKIDXzmCgmScaCzYESooAFuNYiXVq", 50, "A venda"
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
        
        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", -5, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia quantidade não inteira', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 5.5, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia quantidade zerada', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 0, "A venda"
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

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "aa"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia status tamanho superior', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "fgBcqCOZIbGNSgNRfsmMXhnBntLvhvw"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto exclusivo ativo', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto exclusivo inativo', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(3) > #nao', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto excluido ativo', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(2) > #sim', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Equivalencia produto excluido inativo', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()
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