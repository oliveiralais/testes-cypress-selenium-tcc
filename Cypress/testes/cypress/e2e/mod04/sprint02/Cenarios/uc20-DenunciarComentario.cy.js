describe('Denunciar Comentário', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/home");
        cy.get('.mt-sm-2 > .btn').click();
        cy.get('#email').type("gustavo_eu@gmail.com");
        cy.get('#password').type("senha123");
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click();
        cy.get(':nth-child(2) > app-general-post > .card > .card-body > .contentImg').click();
    });
    it('Denunciar um comentário com sucesso', () => {
            cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
            cy.wait(500);
            cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .btn-group > .dropdown-menu > li > .dropdown-item').click();
            cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > :nth-child(4) > :nth-child(3) > .form-check > #flexRadioDefault2').click();
            cy.wait(500)
            cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > :nth-child(6) > .col-md-12 > .form-group > #exampleFormControlTextarea1').type("Comentário Desrepeitoso")
            cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-athlantic').click();
            cy.get('.alert').should('contain', 'Denúncia enviada com sucesso! Obrigado!')
        });
    
    it('Denunciar Comentário em branco', () => {
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > :nth-child(4) > :nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500)
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > :nth-child(6) > .col-md-12 > .form-group > #exampleFormControlTextarea1')
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should('contain','O seguinte erro foi encontrado: Constraint Violations')

        
    });
    it('Denunciar comentário limite exato', () => {
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > :nth-child(4) > :nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500)
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > :nth-child(6) > .col-md-12 > .form-group > #exampleFormControlTextarea1').type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssddddddddddddddddddddddddddddddddddd sdsdsd sd sdsd s ds s ds dssdsdsds afdadfda fadf daf adf adfadfadaddfadfadfadfadfaf")
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should('contain', 'Denúncia enviada com sucesso! Obrigado!')
    });
    it('Denunciar comentário limite superior', () => {
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-valid').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > app-denunciar-comentario.ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-untouched > :nth-child(4) > :nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500)
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > :nth-child(6) > .col-md-12 > .form-group > #exampleFormControlTextarea1').type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssddddddddddddddddddddddddddddddddddd sdsdsd sd sdsd s ds s ds dssdsdsds afdadfda fadf daf adf adfadfadaddfadfadfadfadfafa")
        cy.get(':nth-child(1) > .card > .card-body > .d-flex > [style="margin-left: 5px;"] > .ng-untouched > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should('contain','O seguinte erro foi encontrado: Constraint Violations')
    });
});