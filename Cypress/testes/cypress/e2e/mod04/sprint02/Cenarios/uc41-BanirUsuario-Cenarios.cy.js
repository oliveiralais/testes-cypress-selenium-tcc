describe('Banir Usuario - Cenários', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.visit("http://localhost:4200/dashboard/gerenciar-denuncias");
        
    });

    it('Banir usuário da plataforma, a partir de uma denúncia.', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > banir-usuario > .btn-sm').click();
        cy.get(':nth-child(1) > :nth-child(8) > banir-usuario > #banirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .ng-untouched > .mt-3 > :nth-child(2) > .form-check > #flexRadioDefault1').click();
        cy.get(':nth-child(1) > :nth-child(8) > banir-usuario > #banirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .ng-untouched > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > banir-usuario > #confirmBan > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.get('.alert').should("have.text", "Usuário foi banido com sucesso! ");

    });

});

