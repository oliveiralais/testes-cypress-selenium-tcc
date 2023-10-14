describe('Publicações - Particionamento de Equivalencia', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
    });

    it('Descrição da publicação com tamanho maior que 250 caracteres recusada', () => {

        criarPublicacaoDescricao("Voltamos com tudoo!! Os treino000000s da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação")
        cy.get(':nth-child(2) > .text-danger').should("have.text", "Máximo de 250 caracteres")

    });

    it('Descrição da publicação nula recusada', () => {

        cy.get('.round-button').click()
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(1) > app-image-upload-input > .mb-3 > #imageUpload').click().selectFile('cypress/images/volta-treinos.png')
        cy.wait(500)
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type("a")
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').clear()

        cy.get('form.ng-dirty > .postBtnContainer').click()

        cy.get(':nth-child(2) > .text-danger').should("have.text", "Digite uma descrição")

    });

    it('Verificar se o preenchimento correto de todos os campos é aceito', () => {
        
        criarPublicacao("cypress/images/volta-treinos.png","Volta dos treinos!")  
        cy.contains('button', 'Postar').click()
        cy.wait(500)
        
        cy.get('.feedOption').click()
        cy.get('.row-cols-3').filter(':contains("Volta dos treinos!")').should("exist");
    });

});

function criarPublicacao(imagem, descricao){
    cy.get('.round-button').click()
    cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(1) > app-image-upload-input > .mb-3 > #imageUpload').click().selectFile(imagem)
    cy.wait(500)
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type(descricao)
}

function criarPublicacaoDescricao(descricao){
    cy.get('.round-button').click()
    cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.wait(500)
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type(descricao)
}
