describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-757 : EquivalenciaInvalidaNomeNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-758 : EquivalenciaInvalidaNomeTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('Paulooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-759 : EquivalenciaInvalidaNomeTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('abca');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Email', () => {
  it('ATH-761 : EquivalenciaInvalidaEmailNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Email', () => {
  it('ATH-762 : EquivalenciaInvalidaEmailSemCaractere@', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('Paulogmail.com');   
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Email', () => {
  it('ATH-763 : EquivalenciaInvalidaEmailTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Senha', () => {
  it('ATH-764 : EquivalenciaInvalidaSenhaNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Senha', () => {
  it('ATH-765 : EquivalenciaInvalidaSenhaTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('Exemplo1234567891011');  
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Senha', () => {
  it('ATH-766 : EquivalenciaInvalidaSenhaTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('teste');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia todos os campos validos', () => {
  it('ATH-767 : EquivalenciaValidaTodosCamposValidos ', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    
    
    cy.contains("Atualizar").click()
  })
})