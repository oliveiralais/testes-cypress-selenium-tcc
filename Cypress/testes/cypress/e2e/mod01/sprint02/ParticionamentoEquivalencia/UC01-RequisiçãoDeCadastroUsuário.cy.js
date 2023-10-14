describe('Particionamento Equivalencia', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/register-user")
  });

  it('EquivalenciaInvalidaNomeNulo ', () => {

    registrarUsuario(' ', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaNomeTamanhoSuperior ', () => {

    registrarUsuario('Alan', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
      
  });

  it('EquivalenciaInvalidaNomeTamanhoInferior ', () => {

    registrarUsuario('AA', 'Marcos@gmail.com', '12', '12', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)
      
  });

  it('EquivalenciaValidaAtleticaNulo ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '1234', '1235')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
      
  });

  it('EquivalenciaInvalidaEmailNulo ', () => {

    registrarUsuario('Marcos', ' ', ' ', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')
      
  });

  it('EquivalenciaInvalidaEmailSemCaractere@ ', () => {

    registrarUsuario('Marcos', 'Marcosgmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Campo preenchido incorreto.')
    cy.wait(500)
      
  });

  it('EquivalenciaInvalidaEmailTamanhoSuperior  ', () => {

    registrarUsuario('Marcos', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Máximo de 100 caracteres.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaEmailTamanhoSuperior  ', () => {

    registrarUsuario('Marcos', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 100 caracteres.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaSenhaNulo', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Campo obrigatório.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaSenhaTamanhoSuperior ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo1234567891011', 'Exemplo1234567891011', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Campo obrigatório.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaSenhaTamanhoInferior ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'bb', 'bb', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaConfirmarSenhaNulo ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo123', '', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Campo obrigatório.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaConfirmarSenhaTamanhoSuperior  ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo1234567891011', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Campo obrigatório.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaConfirmarSenhaTamanhoInferior ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'bb', 'bb', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaSenhaDiferenteConfirmarSenha ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '1234', '1235', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Campos devem ser iguais.')
    cy.wait(500)

  });

  it('EquivalenciaValidaTodosCamposValidos  ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '1234', '1234', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });


});

function registrarUsuario(nome, email, senha, confirmarSenha, atletica){

  cy.get('#nome').type(nome)
  cy.get('#email').type(email)
  cy.get('#senha').type(senha)
  cy.get('#confirmar_senha').type(confirmarSenha)
  cy.get('#atleticas')
  .select('MKT', { force: true })

}
