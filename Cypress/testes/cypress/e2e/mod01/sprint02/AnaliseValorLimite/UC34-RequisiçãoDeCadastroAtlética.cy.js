describe('Particionamento de Equivalencia', () => {

  beforeEach(() => {
      cy.visit("http://localhost:4200/register")
  });

  it('NomeInvalidoInferiorMenosUm', () => {

    registrarAtletica('AA', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('NomeValidoInferiorExato ', () => {

    registrarAtletica('Ana', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('NomeValidoInferiorMaisUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click
    cy.wait(500)

  });

  it('NomeValidoSuperiorMenosUm ', () => {

    registrarAtletica('Marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 
    'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click
    cy.wait(500)

  });

  it('NomeValidoSuperiorExato', () => {

    registrarAtletica('Marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 
    'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click
    cy.wait(500)

  });

  it('NomeInvalidoSuperiorMaisUm', () => {

    registrarAtletica('Marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 
    'Marcos@gmail.com', 'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('EmailValidoSuperiorMenosUm ', () => {

    registrarAtletica('Alan', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com', 
    'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it(' EmailValidoSuperiorExato', () => {

    registrarAtletica('Alan', 'marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com', 
    'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it(' EmailInvalidoSuperiorMaisUm ', () => {

    registrarAtletica('Alan', 'marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss!gmail.com', 
    'Exemplo123', 'Exemplo123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Formato de e-mail inválido.')

  });

  it('SenhaInvalidoInferiorMenosUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '11', '11', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('SenhaValidoInferiorExato ', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '113', '131', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it(' SenhaValidoInferiorMaisUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '1123', '1123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it(' SenhaValidoSuperiorMenosUm ', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo12345678901', 'Exemplo12345678901', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('SenhaValidoSuperiorExato', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo123456782901', 'Exemplo123245678901', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('SenhaInvalidoSuperiorMaisUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo123456782901', 'Exemplo123245678901', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('SenhaInvalidoSuperiorMaisUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo123456782901', 'Exemplo123245678901', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it(' ConfirmarSenhaInvalidoInferiorMenosUm ', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '11', '11', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it(' ConfirmarSenhaInvalidoInferiorExato  ', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '112', '112', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it(' ConfirmarSenhaValidoInferiorMaisUm ', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '1123', '1123', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('ConfirmarSenhaValidoSuperiorMenosUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo12345678901', 'Exemplo12345678901', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });
  
  it('ConfirmarSenhaValidoExato', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo123456782901', 'Exemplo123456782901', 'IFSP', 'IFSP Atletica', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  it('ConfirmarSenhaInvalidoSuperiorMaisUm ', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', 'Exemplo1234562782901', 'Exemplo1232456782901', 'IFSP', 'IF', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  });

  it('NomeAtleticaInvalidoInferiorMenosUm', () => {

    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', 'IF', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)
    cy.validator('Mínimo de 3 caracteres.')

  });

  it('NomeAtleticaValidoInferiorExato', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', 'IFd', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

        
  it('NomeAtleticaValidoInferiorMaisUm', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', 'IFds', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

        
  it('NomeAtleticaValidoSuperiorMenosUm ', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', 'IFds', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  });

  
  it('NomeAtleticaValidoSuperiorExato', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', 'IFSPSSSSSSSSdSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  }); 

  it('NomeAtleticaInvalidoSuperiorMaisUm ', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', 'IFSPSSSSSSSSdSSSsSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', 'aushaushaushasuahsaushaush')
    cy.contains('button', 'Concluir Cadastro')
    cy.wait(500)

  }); 

  it('DescricaoAtleticaValidoSuperiorMenosUm ', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', ' IPS', 'Descricao Atletica: UnidosVenceremosAtletica: Juventude, paixão e vitória. Juntos, superamos limite, celebrando esporte, amizade e sucesso!')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  }); 

  it('DescricaoAtleticaValidoSuperiorExato', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', ' IPS', 'Descricao Atletica: UnidosSVenceremosAtletica: Juventude, paixão e vitória. Juntos, superamos limite, celebrando esporte, amizade e sucesso!')
    cy.contains('button', 'Concluir Cadastro').click()
    cy.wait(500)

  }); 

  it('DescricaoAtleticaInvalidoSuperiorMaisUm ', () => {
    
    registrarAtletica('Alan', 'Marcos@gmail.com', '123', '123', 'IFSP', ' IPS', 'Descricao Atletica: UnidosSVeSnceremosAtletica: Juventude, paixão e vitória. Juntos, superamos limite, celebrando esporte, amizade e sucesso!')
    cy.contains('button', 'Concluir Cadastro')
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
