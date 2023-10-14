describe('Analise Valor Limite Nome', () => {
  it('ATH-799 : NomeAtleticaInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('Caaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-800 : NomeAtleticaValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('Caaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-801 : NomeAtleticaValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('Caaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-802 : NomeAtleticaValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-803 : NomeAtleticaValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-804 : NomeAtleticaInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#nome').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Descrição', () => {
  it('ATH-805 : DescricaoAtleticaInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('Caaa');
  })
})

describe('Analise Valor Limite Descrição', () => {
  it('ATH-806 : DescricaoAtleticaValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('Caaaa');
  })
})

describe('Analise Valor Limite Descrição', () => {
  it('ATH-807 : DescricaoAtleticaValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('Caaaa');
  })
})

describe('Analise Valor Limite Descrição', () => {
  it('ATH-808 : DescricaoAtleticaValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Vantagens', () => {
  it('ATH-809 : DescricaoAtleticaValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Descrição', () => {
  it('ATH-810 : DescricaoAtleticaInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#descricao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Lema', () => {
  it('ATH-811 : LemaInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaa');
  })
})

describe('Analise Valor Limite Lema', () => {
  it('ATH-812 : LemaValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')
    
    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaaa');
  })
})

describe('Analise Valor Limite Lema', () => {
  it('ATH-813 : LemaValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaaaa');
  })
})

describe('Analise Valor Limite Lema', () => {
  it('ATH-814 : LemaValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Lema', () => {
  it('ATH-815 : LemaValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Lema', () => {
  it('ATH-816 : LemaInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#lema').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Instituição', () => {
  it('ATH-817 : InstituiçãoInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaa');
  })
})

describe('Analise Valor Limite Instituição', () => {
  it('ATH-818 : InstituiçãoValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaaa');
  })
})

describe('Analise Valor Limite Instituição', () => {
  it('ATH-819 : InstituiçãoValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaaaa');
  })
})

describe('Analise Valor Limite Instituição', () => {
  it('ATH-820 : InstituiçãoValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Instituição', () => {
  it('ATH-821 : InstituiçãoValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Instituição', () => {
  it('ATH-823 : InsituiçãoInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-atletica')

    cy.get(':nth-child(1) > :nth-child(3) > .btn-success').click()
    cy.get('input#instituicao').clear().type('aaaa');
  })
})



