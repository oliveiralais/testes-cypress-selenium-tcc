describe('Analise Valor Limite Nome', () => {
  it('ATH-768 : NomeInvalidoInferiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('Caaa');

  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-769 : NomeValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('Caaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-770 : NomeValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('Caaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-771 : NomeValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-772 : NomeValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Nome', () => {
  it('ATH-773 : NomeInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#nome').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
})

describe('Analise Valor Limite Email', () => {
  it('ATH-774 : EmailValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('marcosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com');
  })
})

describe('Analise Valor Limite Email', () => {
  it('ATH-775 : EmailValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('marcossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss@gmail.com');
  })
})

describe('Analise Valor Limite Email', () => {
  it('ATH-776 : EmailInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#email').clear().type('Caaaa');
  })
})

describe('Analise Valor Limite Senha', () => {
  it('ATH-778 : SenhaValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('testess');
  })
})

describe('Analise Valor Limite Senha', () => {
  it('ATH-778 : SenhaValidoInferiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('Exemplo');
  })
})

describe('Analise Valor Limite Senha', () => {
  it('ATH-779 : SenhaValidoInferiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('Exemplos');
  })
})

describe('Analise Valor Limite Senha', () => {
  it('ATH-780 : SenhaValidoSuperiorMenosUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('Exemplo12345678901');
  })
})

describe('Analise Valor Limite Senha', () => {
  it('ATH-781 : SenhaValidoSuperiorExato', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')
    
    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('Exemplo123456789011');
  })
})

describe('Analise Valor Limite Senha', () => {
  it('ATH-782 : SenhaInvalidoSuperiorMaisUm', () => {
    cy.visit('http://localhost:4200/dashboard/listagem-usuarios')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-success').click()
    cy.get('input#senha').clear().type('Exemplo123456789011');
  })
})










