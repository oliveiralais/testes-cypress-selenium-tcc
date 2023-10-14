describe('Analise Valor Limite Nome', () => {
  it('ATH-853 : NomeInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('Caaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-854 : NomeValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('Caaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-855 : NomeValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('Caaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-856 : NomeValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-857 : NomeValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-858 : NomeInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#nome').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-859 : VantagensInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('textarea#vantagens').type('Caaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-860 : VantagensValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('textarea#vantagens').type('Caaaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-861 : VantagensValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('textarea#vantagens').type('Caaaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-862 : VantagensValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('textarea#vantagens').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-863 : VantagensValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('textarea#vantagens').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-864 : VantagensInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('textarea#vantagens').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Custo', () => {
  it('ATH-865 : CustoInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#custo').type('-1');
  })
})

describe('Analise Valor Limite Custo', () => {
  it('ATH-866 : CustoInvalidoInferiorExatamente', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#custo').type('0');
  })
})

describe('Analise Valor Limite Custo', () => {
  it('ATH-867 : CustoValidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/criacao-planos-exclusivos')
    
    cy.get('input#custo').type('1');
  })
})










