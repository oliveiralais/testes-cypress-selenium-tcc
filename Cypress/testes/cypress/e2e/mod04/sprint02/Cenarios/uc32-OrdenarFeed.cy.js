describe('Ordenar feed de publicações', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/home");
        cy.get('.mt-sm-2 > .btn').click();
        cy.get('#email').type("user@user.com");
        cy.get('#password').type("pass");
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click();
        cy.get('#product-feed-tab').click({force: true});
        cy.get('.feedOption').click({force: true});
    });
    it('Ordenar feed com sucesso', () => {
        cy.get('app-general-feed > .container > .form-select').select('Mais recente');
    });
});