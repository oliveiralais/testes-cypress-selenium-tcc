describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-787 : EquivalenciaInvalidaNomeNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-788 : EquivalenciaInvalidaNomeTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Nome', () => {
  it('ATH-789 : EquivalenciaInvalidaNomeTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('abca');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Descrição', () => {
  it('ATH-790 : EquivalenciaInvalidaDescricaoNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Descrição', () => {
  it('ATH-791 : EquivalenciaInvalidaDescricaoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.wait(100)
    cy.get('input#descricao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaa');
    
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Descrição', () => {
  it('ATH-792 : EquivalenciaInvalidaDescricaoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('abca');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Lema', () => {
  it('ATH-793 : EquivalenciaInvalidaLemaNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Lema', () => {
  it('ATH-794 : EquivalenciaInvalidaLemaTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaa');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Lema', () => {
  it('ATH-795 : EquivalenciaInvalidaLemaTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaa');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Instituição', () => {
  it('ATH-796 : EquivalenciaInvalidaInstituiçãoNulo', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear()
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Instituição', () => {
  it('ATH-797 : EquivalenciaInvalidaInstituiçãoTamanhoSuperior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaa');
    
    cy.contains("Atualizar").click()
  })
})

describe('Paticionamento de Equivalencia Instituição', () => {
  it('ATH-798 : EquivalenciaInvalidaInstituiçãoTamanhoInferior', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaa');
    
    cy.contains("Atualizar").click()
  })
})