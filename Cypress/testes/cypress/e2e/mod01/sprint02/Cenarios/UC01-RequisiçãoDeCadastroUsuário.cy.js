describe('Cenarios', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/register-user")
  });

  it('RequisicaoCadastraUsuárioComSucesso', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)


      
  });

  it('RequisicaoCadastroUsuárioCamposEmBranco', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', ' ', ' ', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)
      
  });

  it('RequisicaoCadastroUsuárioCampoSenhaIncorreto', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '12', '12', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)
      
  });

  it('RequisicaoCadastroUsuárioCampoSenhaDiferente', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '1234', '1235', 0)
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('As senhas devem ser iguais.')
      
  });

  it('RequisicaoCadastroUsuárioCampoNomeIncorreto', () => {

    registrarUsuario('aA', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')
      
  });

  it('RequisicaoCadastroUsuárioCampoEmailIncorreto', () => {

    registrarUsuario('Marcos', 'Marcos1', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Campo email incorreto.')
      
  });


});

function registrarUsuario(nome, email, senha, confirmarSenha, atletica){

  cy.get('#nome').type(nome)
  cy.get('#email').type(email)
  cy.get('#senha').type(senha)
  cy.get('#confirmar_senha').type(confirmarSenha)
  cy.get('#atleticas')
  .select('dodoes', { force: true })

}
