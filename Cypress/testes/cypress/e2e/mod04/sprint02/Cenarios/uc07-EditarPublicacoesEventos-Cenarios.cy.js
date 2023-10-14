describe('Editar Publicações de Eventos - Cenários', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('#event-feed-tab').click();
        
    });

    it('Editar publicação de evento social realizado com sucesso', () => {
        
        cy.get(':nth-child(1) > app-event-post > .card > .card-body > .w-20 > [style="margin-left: 5px;"] > app-acoes-publicacao-geral > .btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item > .editOption').click();
        cy.get(':nth-child(3) > #titulo').type("Halloween 2024");
        cy.get(':nth-child(5) > #descricao').type("Festa de Halloween Outubro 2024");
        
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Halloween 2024");

    });

    it('A opção de "excluir" a edição da publicação é selecionada', () => {
        
        cy.get(':nth-child(1) > app-general-post > .card > .card-body > .w-20 > [style="margin-left: 5px;"] > app-acoes-publicacao-geral > .btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item > .deleteOption').click();
        
        
    });

    it('Vericar se a edição da publicação de evento com campos obrigatórios não preenchidos é recusada', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();
        
        cy.get('').should("have.text", "Preencha os campos!")

    });

    it('Editar publicação de evento esportivo realizado com sucesso', () => {
        
        cy.get(':nth-child(1) > app-event-post > .card > .card-body > .w-20 > [style="margin-left: 5px;"] > app-acoes-publicacao-geral > .btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item > .editOption').click();
        cy.get(':nth-child(3) > #titulo').type("TEAS 2023");
        cy.get(':nth-child(5) > #descricao').type("Campeonato 'Torneio Entre Atleticas' Outubro 2023");
        
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "TEAS 2023");

    });
    
    it('Cancelar a editar da publicação de um evento ', () => {
        
        cy.get(':nth-child(1) > app-event-post > .card > .card-body > .w-20 > [style="margin-left: 5px;"] > app-acoes-publicacao-geral > .btn-group > .dropdown-menu > :nth-child(1) > .dropdown-item > .editOption').click();
        cy.get('app-event-add-modal > .modal-content > .modal-header > .btn-close').click();

    });

});

