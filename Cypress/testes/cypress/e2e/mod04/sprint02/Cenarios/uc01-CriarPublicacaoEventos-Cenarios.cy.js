describe('Publicações de Eventos - Cenários', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('#event-feed-tab').click();
        cy.get('.round-button').click();
        

    });

    it('Criar publicação de evento social com sucesso', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('#eventoSelected').select("Halloween 2023");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Halloween 2023");

    });

    it('Criar publicação de evento esportivo com sucesso', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Esportivos");
        cy.get('#eventoSelected').select("TIAS 2023");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "TIAS 2023");
        
    });

    it('Selecionar a opção de publicação geral', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click();

        cy.get('#publicacaoModalLabel').should("have.text", "Criar publicação");
        
    });

    it('Selecionar a opção de publicação de produto', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(3) > .dropdown-item').click();

        cy.get('#produtoModalLabel').should("have.text", "Criar publicação de Produto");
        
    });
    
    it('Cancelar a publicação de um evento esportivo', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Esportivos");
        cy.get('app-event-add-modal > .modal-content > .modal-header > .btn-close').click();
        
        // cy.get('app-event-add-modal > .modal-content > .modal-header > .btn-close').should("be.null");

    });

    it('Cancelar a publicação de um evento social', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('app-event-add-modal > .modal-content > .modal-header > .btn-close').click();
        
        // cy.get('app-event-add-modal > .modal-content > .modal-header > .btn-close').should("be.null");

    });

    it('Campos de preenchimento da publicação de evento em branco.', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();
        
        cy.get('').should("have.text", "Preencha os campos!")

    });
    
});

