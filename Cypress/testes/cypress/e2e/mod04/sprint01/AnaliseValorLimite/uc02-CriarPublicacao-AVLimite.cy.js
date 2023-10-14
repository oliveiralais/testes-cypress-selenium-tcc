describe('Publicações', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/feed")

        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
        
    });

    it('Verificando descrição da publicação com tamanho 0 (Limite Inferior -1) ', () => {
        
        cy.get('.round-button').click()
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(1) > app-image-upload-input > .mb-3 > #imageUpload').click().selectFile('cypress/images/volta-treinos.png')
        cy.wait(500)
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type("a")
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').clear()

        cy.get('form.ng-dirty > .postBtnContainer').click()

        cy.get(':nth-child(2) > .text-danger').should("have.text", "Digite uma descrição")
    });

    it('Verificando descrição da publicação com tamanho 1 (Limite Inferior)', () => {
       
        criarPublicacao("cypress/images/volta-treinos.png","a")  
        cy.contains('button', 'Postar').click()
        cy.wait(500)
        
        cy.get('.feedOption').click()
        cy.get('.row-cols-3').filter(':contains("a")').should("exist");
        
    });

    it('Verificando descrição da publicação com tamanho 2 (Limite Inferior +1)', () => {
       
        criarPublicacao("cypress/images/volta-treinos.png","ab")   
        cy.contains('button', 'Postar').click()
        
        cy.get('.feedOption').click()
        cy.get('.row-cols-3').filter(':contains("ab")').should("exist");
        
    });

    it('Verificando descrição da publicação com tamanho 254 (Limite Superior -1)', () => {
       
        criarPublicacao("cypress/images/volta-treinos.png","Voltamos com tudo! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação")   
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click().click()
        cy.wait(500)
        
        cy.get('.feedOption').click()
        cy.get('.row-cols-3').filter(':contains("Voltamos com tudo! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação")').should("exist");
        
    });

    it('Verificando descrição da publicação com tamanho 255 (Limite Superior)', () => {
        
        criarPublicacao("cypress/images/volta-treinos.png","Voltamos com tudo!! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação")   
        cy.get('form.ng-dirty > .postBtnContainer > .btn').click().click()
        cy.wait(500)
        
        cy.get('.feedOption').click()
        cy.get('.row-cols-3').filter(':contains("Voltamos com tudo!! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação")').should("exist");
        
    });

    it('Verificando descrição da publicação com tamanho 256 (Limite Superior +1)', () => {
       
        criarPublicacao("cypress/images/volta-treinos.png","Voltamos com tudo!!a Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinaçãoooooo")   
        cy.get(':nth-child(2) > .text-danger').should("have.text", "Máximo de 250 caracteres")

    });
});

function criarPublicacao(imagem, descricao){
    cy.get('.round-button').click()
    cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(1) > app-image-upload-input > .mb-3 > #imageUpload').click().selectFile(imagem)
    cy.wait(500)
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type(descricao)
}