describe('Advertir Usuario - Analise Valor Limite', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.visit("http://localhost:4200/dashboard/gerenciar-denuncias");
        
    });

    it('Verificando da mensagem com tamanho 254 (Limite Superior -1)', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mt-3 > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        .type("Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado");
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #confirmAdvertir > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        
        cy.get('.alert').should("have.text", "Usuário foi advertido com sucesso! ");

    });

    it('Verificando da mensagem com tamanho 255 (Limite Superior)', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mt-3 > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        .type("CCuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado");
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #confirmAdvertir > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.get('.alert').should("have.text", "Usuário foi advertido com sucesso! ");

    });

    it('Verificando da mensagem com tamanho 256 (Limite Superior +1)', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mt-3 > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        .type("CCCuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado");
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #confirmAdvertir > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.get('.alert').should("have.text", "Máximo de 255 caracteres.");

    });
    
});

