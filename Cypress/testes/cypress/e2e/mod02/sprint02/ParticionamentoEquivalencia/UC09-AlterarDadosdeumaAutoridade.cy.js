function editarTexto(identificacao, campo, dado, erro, mensagem) {

    const editar = ':nth-child(1) > .svg-inline--fa';
    cy.contains('tr', identificacao).then(($row) => {

        const rowIndex = $row.index() + 1;
        const columnIndex = 6; 
        cy.get('table tr').eq(rowIndex).find('td').eq(columnIndex).find(editar).click();

    })
    cy.get(campo).clear().type(dado)

    cy.get('#modalidadeEsportiva').select('Futsal - Masculino')
    if(erro == false){

        cy.contains('button', 'Concluir').click()
        
    }else{

        cy.contains('button', 'Concluir').click()
        cy.wait(2000)
        cy.validator(mensagem)

    }

}


describe('Particionamento de Equivalencia', () => {

    beforeEach('', () => {
        
        cy.visit('http://localhost:4200/dashboard/listar-autoridades')

    });

    it('EquivalênciaInvalidaNomeNulo', () => {

        cy.editarNulo('6', 'gui1@gmail.com', '#nome', 'Concluir',  'Campo obrigatório.')
        
    });
    
    it('EquivalenciaInvalidaNomeAutoridadeTamanhoInferior', () => {

        editarTexto('gui1@gmail.com', '#nome', 'Aaa', true, 'Mínimo de 4 caracteres.')
        
    });

    it('EquivalenciaInvalidaNomeAutoridadeTamanhoSuperior', () => {

        editarTexto('gui1@gmail.com', '#nome', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', true, 'Máximo de 50 caracteres.')
        
    });


    it('EquivalenciaInvalidaCPFSuperior', () => {

        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '123.456.789-000', true, 'Insira um CPF ou CNPj válido.')
        
    });

    it('EquivalenciaInvalidaCPFInferior', () => {

        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '123.456.789-0', true, 'Mínimo de 14 caracteres')
        
    });

    it('EquivalenciaInvalidaCPFNulo', () => {
        
        cy.editarNulo('6', 'CampoIdentificacaoFiscal', '#identificacaoFiscal', 'Concluir',  'Campo obrigatório.')

    });

    it('EquivalenciaInvalidaCPFForaDoFormato', () => {

        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '8326.69.340-59', false)
        
    });

    it('EquivalenciaInvalidaCNPJInferior', () => {
        
        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '28.928.891/0001-6', true, 'Insira um CPF ou CNPJ válido.')

    });

    it('EquivalenciaInvalidaCNPJSuperior', () => {

        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '57.036.144/0001-150', true, 'Máximo de 18 caracteres.')

    });

    it('EquivalenciaInvalidaCNPJForaDoFormato', () => {

        editarTexto('CampoIdentificacaoFiscal', '#identificacaoFiscal', '152.72.158/0001-98', false)
        
    });

    it('EquivalenciaInvalidaTelefoneNulo', () => {

        cy.editarNulo('6', 'CampoTelefone', '#telefone', 'Concluir',  'Campo obrigatório.')
        
    });

    it('EquivalenciaInvalidaTelefoneComLetras', () => {

        editarTexto('CampoTelefone', '#telefone', '(17) a9999-0000', true, 'Insira um telefone valido.')
        
    });

    it('EquivalenciaInvalidaTelefoneComEspeciais', () => {

        editarTexto('CampoTelefone', '#telefone',  '(11) 11111-111@', true, 'Insira um telefone valido.')
        
    });

    it('EquivalenciaInvalidaTelefoneInferior ', () => {

        editarTexto('CampoTelefone', '#telefone', '(14) 11111-000', true, 'Mínimo de 15 caracteres.')
        
    });

    it('EquivalenciaInvalidaTelefoneSuperior', () => {

        editarTexto('CampoTelefone', '#telefone', '(14) 11111-00000', true, 'Máximo de 15 caracteres.')
        
    });

    it('EquivalenciaInvalidaEmailNulo', () => {
        
        cy.editarNulo('6', 'CampoEmail', '#email', 'Concluir',  'Campo obrigatório.')

    });

    it('EquivalenciaInvalidaEmailInferior', () => {
        
        editarTexto('CampoEmail', '#email', 'a@aaa.com', true, 'Mínimo de 10 caracteres.')
        
    });

    it('EquivalenciaInvalidaEmailSuperior', () => {

        editarTexto('CampoEmail', '#email', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com', true, 'Máximo de 50 caracteres.')
     
    });

    it('EquivalenciaInvalidaEmailSemCaractere@', () => {
        
        editarTexto('CampoEmail', '#email', 'guizinnnngmail.com', true, 'Insira um E-mail valido')

    });

    it('EquivalenciaInvalidaFuncaoNula ', () => {
        
        cy.editarNulo('6', 'CampoFuncao', '#funcao', 'Concluir',  'Campo obrigatório.')

    });

    it('EquivalenciaInvalidaFuncaoSuperior', () => {

        editarTexto('CampoFuncao', '#funcao', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', true, 'Máximo de 30 caracteres.')
        
    });

    it('EquivalenciaInvalidaFuncaoInferior', () => {

        editarTexto('CampoFuncao', '#funcao', 'Aaa', true, 'Mínimo de 4 caracteres.')

    });

    it('EquivalenciaInvalidaFuncaoComCaractereEspcial', () => {
    
        editarTexto('CampoFuncao', '#funcao', 'B@ndeirinha', false)

    });

    it('EquivalenciaInvalidaCerticiacaoNula', () => {
        
        cy.editarNulo('6', 'CampoCertificacao', '#certificacao', 'Concluir',  'Campo obrigatório.')

    });

    it('EquivalenciaInvalidaCerticiacaoSuperior', () => {
        
        editarTexto('CampoCertificacao', '#certificacao', '2306918651956145614109486134936', true, 'Máximo de 30 caracteres.')

    });

    it('EquivalenciaInvalidaCertificacaoInferior', () => {
        
        editarTexto('CampoCertificacao','#certificacao', '1234', true, 'Mínimo de 5 caracteres.')
    });
});