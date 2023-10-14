describe('Denunciar Publicações', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click()
    });

    it('Verificar se o preenchimento correto de todos os campos é aceito', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1').type("Denuncio a publicação do usuário @NomeDeUsuario por conter discurso de ódio");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " Denúncia enviada com sucesso! Obrigado! ");
    });

    it('Verificar se a descrição da denúncia nula é aceita', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        
        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " O seguinte erro foi encontrado: Constraint Violations ");

    });

    
    it('Verificando se a descrição da denúncia com tamanho maior que 255 caracteres é recusado.', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1')
        .type("Eu gostaria de denunciar a publicação feita pelo usuário @NomeDeUsuario, que contém discurso de ódio e incitação à violência. A publicação em questão contém linguagem ofensiva e ameaças direcionadas a um grupo específico de pessoas, o que vai contra as diretrizes de uso da plataforma.");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " O seguinte erro foi encontrado: Constraint Violations ");

    });

    it('Verificar se o motivo da denúncia nulo é recusado', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get('.text-danger').should("have.text", "Selecione o motivo da denúncia!");
        
    });

});

