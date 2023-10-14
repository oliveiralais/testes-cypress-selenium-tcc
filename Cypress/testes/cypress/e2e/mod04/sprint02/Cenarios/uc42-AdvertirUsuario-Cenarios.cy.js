describe('Advertir Usuario - Cenários', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.visit("http://localhost:4200/dashboard/gerenciar-denuncias");
        
    });

    it('Advertir usuário da plataforma, a partir de uma denúncia.', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mt-3 > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        .type("Cuidado Spam");
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #confirmAdvertir > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.get('.alert').should("have.text", "Usuário foi advertido com sucesso! ");

    });
    
});

