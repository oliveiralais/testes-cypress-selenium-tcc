describe('Cenarios', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/register")
  });

  it('RequisicaoCadastraUsuárioComSucesso', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('RequisicaoCadastroAtleticaCamposEmBranco', () => {

    registrarAtletica(' ', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')
  

  });

  it('RequisicaoCadastroAtleticaCampoEmailIncorreto', () => {

    registrarAtletica('Marcos', 'Marcosgmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Formato de e-mail inválido.')

  });

  it('RequisicaoCadastroAtleticaCampoSenhaIncorreto ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '1', '1', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('RequisicaoCadastroAtleticaSenhaDiferente ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '21', '123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('RequisicaoCadastroAtleticaCampoNomeIncorreto ', () => {

    registrarAtletica('Ab', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('RequisicaoCadastroAtleticaCampoAtleticaIncorreto ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IF', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('RequisicaoCadastroAtleticaCampoInstituicaoIncorreto ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'I', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });


});

function registrarAtletica(nome, email, senha, confirmarSenha, instituicao, nome_atletica, descricao){

  cy.get('#nome').type(nome)
  cy.get('#email').type(email)
  cy.get('#senha').type(senha)
  cy.get('#confirmar_senha').type(confirmarSenha)
  cy.get('#instituicao').type(instituicao)
  cy.get('#nome_atletica').type(nome_atletica)
  cy.get('#descricao').type(descricao)
}



