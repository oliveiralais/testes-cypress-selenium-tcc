describe('Gerenciar Denúncias', () => {
    it('Listar todas as denúncias cadastradas feitas pelos usuários na plataforma.', () => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.visit("http://localhost:4200/dashboard/gerenciar-denuncias")
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Spam")
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should("have.text", "Tem muitas publicações iguais a essas")
    });
});

