

describe('Particionamento por equivalencia', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/modalidades-esportivas")
        cy.contains("Inserir Novo").click()
    });

    it('Equivalencia valida', () => {

        criarTansacao("Futsal Feminino", "#coletivo", "#feminino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Equivalencia invalida campos obrigatorios', () => {

        cy.get('#nome').click().blur()
        cy.get('#coletivo').check()
        cy.get('#masculino').check()
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Equivalencia invalida tamanho superior', () => {

        criarTansacao("uQgbuzoDDmegJgajfMkWOkalDFAsXLEroXVVqOmBQAFGdQlJFKU", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Equivalencia invalida tipo nulo', () => {

        cy.get('#nome').type("Futsal Feminino")
        cy.get('#feminino').check()
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Equivalencia invalida tipo genero', () => {

        cy.get('#nome').type("Futsal Feminino")
        cy.get('#coletivo').check()
        cy.get('form.ng-dirty > .me-2').click()
        
    });


});

function criarTansacao(nome, tipo, genero){

    cy.get('#nome').type(nome)
    cy.get(tipo).check()
    cy.get(genero).check()

}
