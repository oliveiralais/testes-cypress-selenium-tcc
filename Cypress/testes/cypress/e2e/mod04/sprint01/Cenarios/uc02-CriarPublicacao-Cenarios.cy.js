describe('Publicações', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
        cy.get('#email').type('user@user.com')
        cy.get('#password').type('pass')
        cy.get('.text-center > .btn').click();
        cy.get('[href="/dashboard/feed"]').click();
    });

    it('Criar uma publicação com sucesso', () => {
        
        criarPublicacao("cypress/images/volta-treinos.png","Volta dos treinos!")  
        cy.contains('button', 'Postar').click()
        cy.wait(500)
        
        cy.get('.feedOption').click()
        cy.get('.row-cols-3').filter(':contains("Volta dos treinos!")').should("exist");
    });

    it('Selecionar a opção Evento dentre os tipos de publicações', () => {
       
        cy.get('.round-button').click()
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('app-event-add-modal > .modal-content > .modal-header > #eventoModalLabel').should("have.text", "Criar publicação de evento")
        
    });

    it('Selecionar a opção Produto dentre os tipos de publicações', () => {
       
        cy.get('.round-button').click()
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
        cy.get('#produtoModalLabel').should("have.text", "Criar publicação de Produto")
        
    });

    it('Campo de preenchimento "text-box" da publicação em branco', () => {
       
        cy.get('.round-button').click()
        cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(1) > app-image-upload-input > .mb-3 > #imageUpload').click().selectFile('cypress/images/volta-treinos.png')
        cy.wait(500)
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type("a")
        cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').clear()

        cy.get('form.ng-dirty > .postBtnContainer').click()

        cy.get(':nth-child(2) > .text-danger').should("have.text", "Digite uma descrição")
        
    });

    it('Cancelar a publicação de uma postagem', () => {
        
        criarPublicacao("cypress/images/volta-treinos.png","Volta dos treinos!") 
        cy.get('app-general-add-modal > .modal-content > .modal-header > .btn-close').click()
        
    });
});

function criarPublicacao(imagem, descricao){
    cy.get('.round-button').click()
    cy.get('.addPostMenu > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(1) > app-image-upload-input > .mb-3 > #imageUpload').click().selectFile(imagem)
    cy.wait(500)
    cy.get('app-general-add-modal > .modal-content > :nth-child(2) > .modal-body > form.ng-untouched > :nth-child(2) > #descricao').type(descricao)
}