describe('Publicações de Eventos - Analise Valor Limite', () => {

    beforeEach(() => {

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        cy.get('#event-feed-tab').click();
        cy.get('.round-button').click();
        

    });

    it('Verificando título da publicação com tamanho 254 (Limite Superior -1)', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242");

    });

    it('Verificando título da publicação com tamanho 255 (Limite Superior)', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("1Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "1Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242");

    });

    it('Verificando título da publicação com tamanho 256 (Limite Superior +1)', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("12Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('.text-danger > div').should("have.text", "Máximo de 255 caracteres.");

    });

    it('Verificando descrição da publicação com tamanho 254 (Limite Superior -1)', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024");
        cy.get(':nth-child(5) > #descricao').type("Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Volta Aulas 2024");
        
    });

    it('Verificando descrição da publicação com tamanho 255 (Limite Superior)', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024");
        cy.get(':nth-child(5) > #descricao').type("1Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();

        cy.get('').should("have.text", "Volta Aulas 2024");
        
    });

    it('Verificando descrição da publicação com tamanho 256 (Limite Superior +1)', () => {
        
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#tipoEvento').select("Eventos Sociais");
        cy.wait(500);
        cy.get(':nth-child(3) > #titulo').type("Volta Aulas 2024");
        cy.get(':nth-child(5) > #descricao').type("12Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024 Festa de Volta Aulas 2024");
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click();
        cy.wait(500);

        cy.get('.text-danger > div').should("have.text", "Máximo de 255 caracteres.");
        
    });
    
});

