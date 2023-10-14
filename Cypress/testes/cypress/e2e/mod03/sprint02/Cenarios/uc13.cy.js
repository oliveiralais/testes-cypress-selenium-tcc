

describe('Cenarios', () => {
    it('Listar Eventos', () => {
        cy.visit("http://localhost:4200/login")

        cy.get('#email').type('teste@gmail.com')
        cy.get('#password').type('P@ssword')

        cy.get('.text-center > .btn').click()

        cy.get('[href="/dashboard/eventos"]').click()

    });
});
