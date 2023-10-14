describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-730 : EquivalenciaInvalidaNomeNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')

    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-731 : EquivalenciaInvalidaNomeTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#nome').clear().type('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-732 : EquivalenciaInvalidaNomeTamanhoInferior ', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#nome').clear().type('abca');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Vantagens', () => {
  it('ATH-733 : EquivalenciaInvalidaVantagensNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Vantagens', () => {
  it('ATH-734 : EquivalenciaInvalidaVantagensTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.wait(100)
    cy.get('input#vantagem').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaa');
    
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Vantagens', () => {
  it('ATH-735 : EquivalenciaInvalidaVantagensTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#vantagem').clear().type('abca');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Custo', () => {
  it('ATH-736 : EquivalenciaInvalidaCustoNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    cy.get('input#vantagem').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia todos os campos validos', () => {
  it('ATH-736 : EquivalenciaInvalidaCustoNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-planos')
    
    cy.get(':nth-child(1) > :nth-child(4) > .btn-success').click()
    
    
    cy.contains("Atualizar").click()
  })
})