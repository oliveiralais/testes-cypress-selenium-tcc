describe("Comentários", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        
    });

    it("Verificando a criação de comentário com o limite exato", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();

        cy.get('.commentContainer > #descricao').type(
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        
        cy.get('.commentContainer > .btn').click({ force: true });
        cy.get(":nth-child(4) > .card").should("exist");
    });

    it("Verificando a criação de comentário com o limite exato +1", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();

        cy.get('.commentContainer > #descricao').type(
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        
        cy.get('.commentContainer > .btn').click({ force: true });
        cy.get('app-add-comments > .flex-row > .card-body > :nth-child(3)').should("have.text", "Comentário acima do limite.");
    });

});