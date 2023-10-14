

describe('Analise do Valor Limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/list-product")
        cy.contains("Inserir Novo").click()
    });
    
    it('Nome do produto limite inferior menos um', () => {

        criarTansacao("Ab", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite inferior exato', () => {

        criarTansacao("Pet", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite inferior mais um', () => {

        criarTansacao("Lata", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite superior menos um', () => {

        criarTansacao("OmJKsuChVptkPsKUSTiTsYFtnKHJSwhICiLpVJWaKQPiEdojosTflnIDioF", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite superior exato', () => {

        criarTansacao("hMNEOtkFhbqXheqgzLmCyUmspVIblrttdaiFLBFoZTlOPsvRGNCbMEfxXKCb", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Nome do produto limite superior mais um', () => {

        criarTansacao("hMNEOtkFhbqXheqgzLmCyUmspVIblrttdaiFLBFoZTlOPsvRGNCbMEfxXKCbE", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite inferior menos um', () => {

        criarTansacao("Camisa Atletica 2023", "ab", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite inferior exato', () => {

        criarTansacao("Camisa Atletica 2023", "abc", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite inferior mais um', () => {

        criarTansacao("Camisa Atletica 2023", "abcd", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite superior menos um', () => {

        criarTansacao("Camisa Atletica 2023", "AWyizVzDDvmxTPRJRCpzToRhZJbeCLfKMiInRVwlAJDpoIafxGCTpcdMNaPAEizRzFrtFRXksWVEgwMjbPGTTPKTJeKfCHRdOZshjsaVlkovMBWfzRkoBPiKMfMJWdAtoIppEFagrjiibzAhmzVMBppEtrhXdIudqmeMMzpGrNHRVHzPsUXdcQrxqOBMApDMWfTLGWisDFRRQYWAZncjZEOuYbdINYqkadrSFyzNpPEWMMjqWrTdFVtWhaeFNL", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite superior exato', () => {

        criarTansacao("Camisa Atletica 2023", "AWyizVzDDvsmxTPRJRCpzToRhZJbeCLfKMiInRVwlAJDpoIafxGCTpcdMNaPAEizRzFrtFRXksWVEgwMjbPGTTPKTJeKfCHRdOZshjsaVlkovMBWfzRkoBPiKMfMJWdAtoIppEFagrjiibzAhmzVMBppEtrhXdIudqmeMMzpGrNHRVHzPsUXdcQrxqOBMApDMWfTLGWisDFRRQYWAZncjZEOuYbdINYqkadrSFyzNpPEWMMjqWrTdFVtWhaeFNL", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Descrição do produto limite superior mais um', () => {

        criarTansacao("Camisa Atletica 2023", "AWyizVzDDcvsmxTPRJRCpzToRhZJbeCLfKMiInRVwlAJDpoIafxGCTpcdMNaPAEizRzFrtFRXksWVEgwMjbPGTTPKTJeKfCHRdOZshjsaVlkovMBWfzRkoBPiKMfMJWdAtoIppEFagrjiibzAhmzVMBppEtrhXdIudqmeMMzpGrNHRVHzPsUXdcQrxqOBMApDMWfTLGWisDFRRQYWAZncjZEOuYbdINYqkadrSFyzNpPEWMMjqWrTdFVtWhaeFNL", 50, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Quantidade do produto limite inferior menos um', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", -1, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Quantidade do produto limite inferior exato', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 0, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Quantidade do produto limite inferior mais um', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 1, "A venda"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Status do produto limite inferior menos um', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "ab"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite inferior exato', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "abc"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite inferior mais um', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "abcd"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });
    
    it('Status do produto limite superior menos um', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "uwDkMQrktbUsGpmXApfVunwwAWNgN"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite superior exato', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "qKkBwwZQiChPOiuqmdcrjHgIGyoVzQ"
                    ,':nth-child(5) > :nth-child(2) > #sim', ':nth-child(6) > :nth-child(3) > #nao', 0)
        cy.get(':nth-child(8) > .me-2').click()

    });

    it('Status do produto limite superior mais um', () => {

        criarTansacao("Camisa Atletica 2023", "Camisa DryFit perfeita para todo Lagarto Doido.", 50, "ZfhoCoXagqlvwGjWDlzIWVLwayhwqGo"
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