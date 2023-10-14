describe('Advertir Usuario - Particionamento de Equivalencia', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('lais_oliveira@gmail.com')
        cy.get('#password').type('laiso123')
        cy.get('.text-center > .btn').click();
        cy.visit("http://localhost:4200/dashboard/gerenciar-denuncias");
        
    });

    it('Verificar se o preenchimento correto de todos os campos é aceito', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mt-3 > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        .type("Cuidado Spam");
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #confirmAdvertir > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.get('.alert').should("have.text", "Usuário foi advertido com sucesso! ");

    });

    it('Verificar se a mensagem de aviso nula é recusada', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-danger').click();
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #confirmAdvertir > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
        cy.get('.alert').should("have.text", " Descrição está vazia! ");

    });

    it('Verificando se a mensagem com tamanho > 255 é recusada', () => {
        
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > .btn-sm').click();
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(8) > advertir-usuario > #advertirModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > .mt-3 > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        .type("Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam Cuidado Spam");
        
        cy.get('.alert').should("have.text", "Máximo de 255 caracteres.");

    });
    
});

