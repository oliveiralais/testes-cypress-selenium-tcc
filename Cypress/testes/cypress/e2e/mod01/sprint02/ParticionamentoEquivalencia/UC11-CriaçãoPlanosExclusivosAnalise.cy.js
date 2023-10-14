describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-845 : EquivalenciaInvalidaNomeNulo', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.contains("Finalizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-846 : EquivalenciaInvalidaNomeTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-847 : EquivalenciaInvalidaNomeTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('aaaa');
  })
})

describe('Paticionamento de Equivalencia Vantagens', () => {
  it('ATH-848 : EquivalenciaInvalidaVantagensNulo', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.contains("Finalizar").click()
  })
})

describe('Paticionamento de Equivalencia Vantagens', () => {
  it('ATH-849 : EquivalenciaInvalidaVantagensTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaa');
  })
})

describe('Paticionamento de Equivalencia Vantagens', () => {
  it('ATH-850 : EquivalenciaInvalidaVantagensTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('aaaa');
  })
})

describe('Paticionamento de Equivalencia Custo', () => {
  it('ATH-851 : EquivalenciaInvalidaCustoNulo', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#custo').type('1');
  })
})

describe('Paticionamento de Equivalencia todos os campos', () => {
  it('ATH-852 : EquivalenciaValidaTodosCamposValidos', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('Camisetas e Canecas');
    cy.get('textarea#vantagens').type('Esse plano proporciona a ganhar uma camiseta e caneca');
    cy.get('input#custo').type('128');
    cy.contains("Finalizar").click()
  })
})





