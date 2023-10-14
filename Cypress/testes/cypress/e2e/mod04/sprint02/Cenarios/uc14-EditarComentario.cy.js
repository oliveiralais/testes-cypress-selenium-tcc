/// <reference types="cypress" />

describe('Editar comentários', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/home");
        cy.get('.mt-sm-2 > .btn').click();
        cy.get('#email').type("user@user.com");
        cy.get('#password').type("pass");
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click();
        cy.get(':nth-child(2) > app-general-post > .card > .card-body > .contentImg').click();
    });
    
    it('Editar um comentário com sucesso', () => {
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid > .btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item > .editOption').click();
        cy.wait(500)
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > #editarPublicacaoModal > .modal-dialog > .modal-content > :nth-child(2) > .modal-body > form.ng-pristine > .mb-2 > #descricao').type("WOW, que jogada meu amigo Octavio, incrível");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();
        cy.get(':nth-child(1) > .card > .card-body > :nth-child(1) > :nth-child(2) > .text-muted').should('contain', "WOW, que jogada meu amigo Octavio, incrível")
    });

    it('Editar comentário vazio', () => {
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid > .btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item > .editOption').click();
        cy.wait(500)
        //Não permite o salvamento de um comentário vazio, aprovado
    });
    it('Editar comentário acima do limite', () => {
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid > .btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item > .editOption').click();
        cy.wait(500)
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > #editarPublicacaoModal > .modal-dialog > .modal-content > :nth-child(2) > .modal-body > form.ng-pristine > .mb-2 > #descricao').type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssddddddddddddddddddddddddddddddddddd sdsdsd sd sdsd s ds s ds dssdsdsds afdadfda fadf daf adf adfadfadaddfadfadfadfadfafa");
        cy.get('.mb-2 > :nth-child(3)').should('contain', "Máximo de 255 caracteres.")
    });
});