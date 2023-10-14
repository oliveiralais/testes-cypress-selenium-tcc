describe('Denunciar Publicações', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click()

    });

    it('Denunciar uma publicação com sucesso', () => {

        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1').type("Denuncio a publicação do usuário @NomeDeUsuario por conter discurso de ódio");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " Denúncia enviada com sucesso! Obrigado! ");
        
    });

    it('Campos de preenchimento obrigatório da denúncia em branco.', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get('.text-danger').should("have.text", "Selecione o motivo da denúncia!")
        
    });
});

