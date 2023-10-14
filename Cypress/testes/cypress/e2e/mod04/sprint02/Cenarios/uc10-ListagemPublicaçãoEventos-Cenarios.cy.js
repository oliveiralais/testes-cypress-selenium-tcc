describe('Listagem Publicações de Eventos - Cenários', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();

    });

    it('Listar todas as publicações de eventos no feed', () => {
        
        cy.get('#event-feed-tab').click();

        cy.get('').should("have.text", "Halloween 2023");

    });

    it('Checar como o sistema responde a um feed sem publicações de eventos', () => {
        
        cy.get('#event-feed-tab').click();

    });
    
});

