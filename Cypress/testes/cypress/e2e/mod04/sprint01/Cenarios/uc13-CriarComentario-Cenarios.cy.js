describe("Criar Comentário", () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
    });

    it("Criar comentário com sucesso", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();
        cy.get('.commentContainer > #descricao').type("Sou um comentário!");
        cy.contains('button', 'Enviar').click();

        cy.get('app-comments').filter(':contains("Sou um comentário!")').should("exist");
        
    });

    it("Criar comentário com falha", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();
        cy.get('.commentContainer > #descricao').type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        cy.get('app-add-comments > .flex-row > .card-body > :nth-child(3)').should("have.text", "Comentário acima do limite.");

    });

    it("Falha ao criar comentário em branco", () => {
        cy.get(".feedOption").click();
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .contentImg > .card-img-top').click();
        cy.get(".commentContainer > #descricao").click({ force: true });
        cy.get('.commentContainer > .btn').click({ force: true });
        cy.get('.text-danger').should("have.text", "Preencha o campo!");
    });
});
