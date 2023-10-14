

describe('Cenarios', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/modalidades-esportivas")
        cy.contains("Inserir Novo").click()
    });

    it('Cadastrar uma nova modalidade', () => {

        criarTansacao("Vôlei Masculino", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Cadastrar modalidade já existente', () => {

        criarTansacao("Vôlei Masculino", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Cadastrar campos obrigatorios', () => {

        cy.get('#nome').click().blur()
        cy.get('#coletivo').check()
        cy.get('#masculino').check()
        cy.get('form.ng-dirty > .me-2').click()
        
    });

    it('Cadastrar campos dados invalidos', () => {

        criarTansacao("uQgbuzoDDmegJgajfMkWOkalDFAsXLEroXVVqOmBQAFGdQlJFKU", "#coletivo", "#masculino")
        cy.get('form.ng-dirty > .me-2').click()
        
    });

});

function criarTansacao(nome, tipo, genero){

    cy.get('#nome').type(nome)
    cy.get(tipo).check()
    cy.get(genero).check()

}
