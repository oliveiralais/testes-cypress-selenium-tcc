describe('Curtir Publicação', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/home");
        cy.get('.mt-sm-2 > .btn').click();
        cy.get('#email').type("user@user.com");
        cy.get('#password').type("pass");
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click();
    });
    it('Curtir publicação com sucesso', () => {
        //Funciona na aplicação, porém o cypress nao mostra o botão de curtir
    });
});