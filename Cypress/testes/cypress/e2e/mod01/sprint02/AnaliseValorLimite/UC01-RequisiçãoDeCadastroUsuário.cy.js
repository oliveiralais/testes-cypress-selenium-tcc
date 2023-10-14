describe('Analise Valor limite', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/register-user")
  });

  it('NomeInvalidoInferiorMenosUm', () => {

    registrarUsuario('AA', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('NomeValidoInferiorExato  ', () => {

    registrarUsuario('Ana', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
      
  });

  it('NomeValidoSuperiorMenosUm ', () => {

    registrarUsuario('Marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
      
  });

  it('NomeValidoSuperiorExato  ', () => {

    registrarUsuario('Marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
      
  });

  it('NomeInvalidoSuperiorMaisUm ', () => {

    registrarUsuario('Marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Máximo de 80 caracteres.')
    cy.wait(500)
      
  });

  it('EmailValidoSuperiorMenosUm', () => {

    registrarUsuario('Ana', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com', 
    'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
      
  });

  it('EmailValidoSuperiorExato', () => {

    registrarUsuario('Ana', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com', 
    'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('EmailInvalidoSuperiorMaisUm', () => {

    registrarUsuario('Ana', 'marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com', 
    'Exemplo123', 'Exemplo123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Máximo de 100 caracteres.')
    cy.wait(500)

  });

  it('SenhaInvalidoInferiorMenosUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '11', '11', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('SenhaValidoInferiorExato', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '123', '123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('SenhaValidoInferiorMaisUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '1234', '1234', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('SenhaValidoSuperiorMenosUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo12345678901', 'Exemplo12345678901', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('SenhaValidoSuperiorExato', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo123456789011', 'Exemplo123456789011', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('SenhaInvalidoSuperiorMaisUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo123456789011', 'Exemplo123456789011', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Máximo de 20 caracteres.')
    cy.wait(500)

  });

  it('ConfirmarSenhaInvalidoInferiorMenosUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '11', '11', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('ConfirmarSenhaValidoInferiorExato ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '123', '123', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('ConfirmarSenhaValidoInferiorMaisUm', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', '1234', '1234', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('ConfirmarSenhaValidoSuperiorMenosUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo12345678901', 'Exemplo12345678901', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('ConfirmarSenhaValidoExato', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo123456789011', 'Exemplo123456789011', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('ConfirmarSenhaInvalidoSuperiorMaisUm ', () => {

    registrarUsuario('Marcos', 'Marcos@gmail.com', 'Exemplo1234567890111', 'Exemplo1234567890111', 0)
    cy.contains('button', 'Concluir Cadastro')
    cy.validator('Máximo de 20 caracteres.')
    cy.wait(500)

  });


});

function registrarUsuario(nome, email, senha, confirmarSenha, atletica){

  cy.get('#nome').type(nome)
  cy.get('#email').type(email)
  cy.get('#senha').type(senha)
  cy.get('#confirmar_senha').type(confirmarSenha)
  cy.get('#atleticas')
  .select('ABBC', { force: true })

}
