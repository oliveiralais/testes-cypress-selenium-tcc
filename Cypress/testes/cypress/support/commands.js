// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })




//colocar variavel para a coluna, cypress conta do zero com um;

//Coluna: Colocar a coluna da tabela referente as ações, na qual está presente o botão editar.
//Identificação: palavra chave que será buscada na tabela, precisa ser um palavra muito específica.
//Campo: Coloque o nome que do campo que deseja editar, como exemplo "#email".
//Dado: Qual é o dado que deve ser colocado no campo.
//Nome Botão: Nome do botão que representa a ação de finalizar alteração.
//Erro: Varivavel booleana, identificar se o teste apresentará mensagem de erro ou nao.
//Mensagem: Mensagem de erro que deve aparacer.
//Caso seja uma teste sem erros não é necessário inserir o parametro mensagem.

//Exemplo para utilizar:
//cy.editarTexto('6', 'CampoNome', '#nome','Aaa', 'Concluir', true, 'Mínimo de 4 caracteres.')
Cypress.Commands.add('editarTexto', (coluna, identificacao, campo, dado, nomeBotao, erro, mensagem) => {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = coluna; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get(campo).clear().type(dado)
    if(erro == false){

        cy.contains('button', nomeBotao).click()
        
    }else{

        cy.contains('button', nomeBotao).click()
        cy.validator(mensagem)

    }

})

Cypress.Commands.add('editarRadiobutton', (coluna, identificacao, campo, nomeBotao) => {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = coluna; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get(campo).click()

    cy.contains('button', nomeBotao).click()
   

})


Cypress.Commands.add('editarSelect', (coluna, identificacao, campo, dado, nomeBotao, erro, mensagem) => {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = coluna; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get(campo).select(dado);
    

})



Cypress.Commands.add('validator', (texto) => {

    cy.get('.text-danger > div').should('be.visible').and('contain', texto)
  
  });

//Funciona só para texto!!!
Cypress.Commands.add('editarNulo', (coluna, identificacao, campo, nomeBotao, mensagem) => {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {
    const rowIndex = $row.index() + 1;
    const columnIndex = coluna; 
    cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();
    })
    cy.get(campo).clear()
    cy.contains('button', nomeBotao).click()
    cy.validator(mensagem)
    

})
