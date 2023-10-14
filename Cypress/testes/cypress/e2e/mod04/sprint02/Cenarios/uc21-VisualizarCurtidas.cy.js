describe('Visualizar Curtidas', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/home");
        cy.get('.mt-sm-2 > .btn').click();
        cy.get('#email').type("gustavo_eu@gmail.com");
        cy.get('#password').type("senha123");
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click();
    });
    it('Visualizar curtidas com sucesso', () => {
        cy.wait(500);
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .w-20 > :nth-child(1) > div').should('contain', 0);
        cy.wait(500);
        cy.get(':nth-child(2) > app-general-post > .card > .card-body > .w-20 > :nth-child(1) > div').should('contain', 4);
        
    });
});