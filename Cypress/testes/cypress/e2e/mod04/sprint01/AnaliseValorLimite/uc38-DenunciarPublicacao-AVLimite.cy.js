describe('Denunciar Publicações', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('.feedOption').click()
    });

    it('Verificando descrição da denúncia com tamanho 0 (Limite Inferior -1)', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " O seguinte erro foi encontrado: Constraint Violations ");
        
    });

    it('Verificando descrição da denúncia com tamanho 1 (Limite Inferior)', () => {

        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1').type("a");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " Denúncia enviada com sucesso! Obrigado! ");

    });

    it('Verificando descrição da denúncia com tamanho 2 (Limite Inferior +1)', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1').type("ab");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " Denúncia enviada com sucesso! Obrigado! ");
    });

    
    it('Verificando descrição da denúncia com tamanho 254 (Limite Superior -1)', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1')
        .type("Queria de denunciar a publicação feita pelo usuário @NomeDeUsuario, que contém discurso de ódio e incitação. A publicação em questão contém linguagem ofensiva e ameaças direcionadas a um grupo específico de pessoas, contra diretrizes de uso da plataforma");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " Denúncia enviada com sucesso! Obrigado! ");
        
    });

    it('Verificando descrição da denúncia com tamanho 255 (Limite Superior)', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1')
        .type("Queriaa de denunciar a publicação feita pelo usuário @NomeDeUsuario, que contém discurso de ódio e incitação. A publicação em questão contém linguagem ofensiva e ameaças direcionadas a um grupo específico de pessoas, contra diretrizes de uso da plataforma");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " Denúncia enviada com sucesso! Obrigado! ");

    });

    it('Verificando descrição da denúncia com tamanho 256 (Limite Superior +1)', () => {
        
        cy.get('app-denunciar').click();
        cy.get('app-denunciar > .btn-group > .dropdown-menu > li > .dropdown-item').click();
        cy.get(':nth-child(3) > .form-check > #flexRadioDefault2').click();
        cy.wait(500);
        cy.get('#exampleFormControlTextarea1')
        .type("Queriaaa de denunciar a publicação feita pelo usuário @NomeDeUsuario, que contém discurso de ódio e incitação. A publicação em questão contém linguagem ofensiva e ameaças direcionadas a um grupo específico de pessoas, contra diretrizes de uso da plataforma");

        cy.get('form.ng-valid > .modal-footer > .btn-athlantic').click();
        cy.get('.alert').should("have.text", " O seguinte erro foi encontrado: Constraint Violations ");
    });

});

