describe("Visualizar feed de publicações", () => {
    it("Visualizar o feed", () => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get(".feedOption").click();
    });
});
