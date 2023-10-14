describe('Particionamento de Equivalencia', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/register")
  });

  it('EquivalenciaInvalidaNomeNulo', () => {

    registrarAtletica(' ', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.validator('Mínimo de 3 caracteres.')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaNomeTamanhoSuperior', () => {

    registrarAtletica('Paulooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', 
    'joão@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Formato de e-mail inválido.')
  

  });

  it('EquivalenciaInvalidaNomeTamanhoInferior', () => {

    registrarAtletica('AB', 'Marcosgmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaAtleticaNulo', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '111', '111', 'IFSP', ' ', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaEmailNulo', () => {

    registrarAtletica('Marcos', '1gmail.com', '211', '123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Formato de e-mail inválido.')

  });

  it('EquivalenciaInvalidaEmailSemCaractere@', () => {

    registrarAtletica('Marcos', '1gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Formato de e-mail inválido.')

  });

  it('EquivalenciaInvalidaEmailTamanhoSuperior', () => {

    registrarAtletica('Marcos', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    'Exemplo123', 'Exemplo123', 'IFSP', 'IF', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Formato de e-mail inválido.')

  });

  it('EquivalenciaInvalidaSenhaNulo', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', ' ', ' ', 'I', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaSenhaTamanhoSuperior', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '11111111111111111111111111111111111111111111', '11111111111111111111111111111111111111111111 ', 'I', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaSenhaTamanhoInferior ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '1', '1 ', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaConfirmarSenhaNulo', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', ' ', ' ', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaConfirmarSenhaTamanhoSuperior', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '22', '22', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaConfirmarSenhaTamanhoSuperior', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '22222222222222222222222222222222', '2222222222222222222222222222222', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaConfirmarSenhaTamanhoInferior', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '22', '22', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaSenhaDiferenteConfirmarSenha', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', '21', '221', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaValidaTodosCamposValidos ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('EquivalenciaInvalidaNomeAtleticaNulo', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', ' ', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciaInvalidaNomeAtleticaTamanhoSuperior', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('EquivalenciaInvalidaNomeAtleticaTamanhoInferior', () => {

   
    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IS', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('EquivalenciavalidaDescricaoNulo', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', ' ')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('EquivalenciaInvalidaDescricaoSuperior ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 
    ' Descricao Atletica: UnidosVenceremosAtletica: Juventude, paixão e vitória. Juntos, superamos limites, celebrando esporte, amizade e sucesso!!')
    cy.contains('button', 'Concluir Cadastro')

  });

  it('EquivalenciaInvalidaDescricaoInferior ', () => {

    registrarAtletica('Marcos', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', ' ')
    cy.contains('button', 'Concluir Cadastro')

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
