describe('Cenários', () => {
        
    beforeEach('', () => {
        cy.viewport(1920,1080)
        cy.visit("http://localhost:4200/dashboard")
    });

    it('ListarComSucesso', () => {

        cy.contains('Equipes').click()
        cy.url().should('include', '/equipes')

    });

});