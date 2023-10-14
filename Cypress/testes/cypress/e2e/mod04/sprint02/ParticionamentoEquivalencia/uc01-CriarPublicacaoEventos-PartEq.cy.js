describe('Publicações de Eventos - Particionamento de Equivalencia', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('lais_oliveira@gmail.com')
        cy.get('#password').type('laiso123')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('#event-feed-tab').click();
        cy.get('.round-button').click();
        

    });

    it('Verificar se o preenchimento correto de todos os campos é aceito', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('#eventoSelected').select("Halloween 2023");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Halloween 2023");

    });

    it('Verificar se o título da publicação nulo é recusado', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Preencha os campos");
        
    });

    it('Verificando se o título com tamanho > 255 é recusado', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('#eventoSelected').select("Halloween 2023");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('.text-danger > div').should("have.text", "Máximo de 255 caracteres.");
        
    });

    it('Verificar se a descrição da publicação nula é recusada', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Preencha os campos");
        
    });
    
    it('Verificando se a descrição com tamanho > 255 é recusada', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.get('#eventoSelected').select("Halloween 2023");
        cy.wait(500);
        cy.get(':nth-child(5) > #descricao').type("Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('.text-danger > div').should("have.text", "Máximo de 255 caracteres.");

    });

    it('Verificando se a data nula da publicação é recusada', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024");
        cy.wait(500);
        cy.get(':nth-child(5) > #descricao').type("Volta Aulas 2024");

        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Preencha os campos");

    });

    it('Verificar se a data fora do formato padrão é recusada', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024");
        cy.wait(500);
        cy.get(':nth-child(5) > #descricao').type("Volta Aulas 2024");
        cy.get(':nth-child(5) > #data').type("2024/02/10");
        
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Formato incorreto");

    });
    
});

