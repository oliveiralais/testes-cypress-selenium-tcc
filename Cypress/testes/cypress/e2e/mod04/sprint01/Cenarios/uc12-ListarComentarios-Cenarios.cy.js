describe("Listar Comentários", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
    });

    it("Listagem de comentários com sucesso", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();

        cy.get('app-comments > :nth-child(1) > :nth-child(1) > .card').should("be.visible");
    });

    it("Listagem sem comentários com sucesso", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(3) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();
        cy.get('.no-comment-container > p').should("have.text", "Esta publicação ainda não tem comentários");
    });
});
