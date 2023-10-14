

describe('Analise do valor limite', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/modalidades-esportivas")
        cy.contains("Inserir Novo").click()
    });

    it('Valor limite tamanho superior -1', () => {

        criarTansacao("SVrAypzbVWuQJEjqgbgpoIrmCgXrNhdIGQBHHYyZFTAMFqSeg", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Valor limite tamanho superior exato', () => {

        criarTansacao("PFmGAkVltYiGiYOAjgpUQaeOldNGmluOaQzrEiqcbYhbstWUnS", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Valor limite tamanho superior +1', () => {

        criarTansacao("uQgbuzoDDmegJgajfMkWOkalDFAsXLEroXVVqOmBQAFGdQlJFKU", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    


});

function criarTansacao(nome, tipo, genero){

    cy.get('#nome').type(nome)
    cy.get(tipo).check()
    cy.get(genero).check()

}
