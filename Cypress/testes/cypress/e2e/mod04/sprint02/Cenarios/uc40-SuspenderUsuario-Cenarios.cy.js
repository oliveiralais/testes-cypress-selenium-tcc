describe('Suspender Usuario - Cenários', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.visit("http://localhost:4200/dashboard/gerenciar-denuncias");
        
    });

    it('Suspender usuário da plataforma, a partir de uma denúncia.', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > .btn-sm').click();
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > #suspenderModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > :nth-child(4) > :nth-child(5) > .form-check > #flexRadioDefault2').click();
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > #suspenderModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mb-4 > .col-md-3 > .form-group > #numeroInput').type(3);
        cy.get('form.ng-dirty > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > #confirmSuspender > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.wait(500);

        cy.get('.modal-body > .row > .col-md-12 > .alert').should("have.text", "Usuário foi suspenso com sucesso! ");

    });

    it('Campos em branco da suspensão recusada', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > .btn-sm').click();
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > #suspenderModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > suspender-usuario > #confirmSuspender > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.wait(500);

        cy.get('.modal-body > .row > .col-md-12 > .alert').should("have.text", " A duração da suspensão precisa ser maior que 0 e menor que 30 dias. ");

    });
    
});

