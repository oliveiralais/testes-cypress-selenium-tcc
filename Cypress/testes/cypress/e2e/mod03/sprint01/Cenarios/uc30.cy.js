describe('Cadastro do patrocinador', () => {

    beforeEach(() => {
        cy.visit("http://localhost:4200/dashboard/patrocinadores")
        cy.contains("Inserir Novo").click()
    });

    it('Inserindo novo patrocinador', () => {

        cadastrarPatrocinadorPessoaFisica("Mark Zuckerberg", "470.902.128-74", "(19) 99592-6483", "mark@meta.com", "about.meta.com")
        cy.get('tbody > :nth-child(4) > :nth-child(4)').should("have.text", " 470.902.128-74 ")
    });
    it('Inserindo novo patrocinador com campos incorretos', () => {

        cadastrarPatrocinadorPessoaFisica("a", "3", "21", "aa", "https://")
        cy.get(':nth-child(2) > .text-danger > div').should("have.text", "Mínimo de 5 caracteres.")
    });
    it('Inserindo novo patrocinador com campos em brancos', () => {

        cy.contains('button', 'Concluir Cadastro').click()
        cy.get(':nth-child(1) > .text-danger > div').should("have.text", "Campo obrigatório.")
    });
    it('Cancelando inserção do novo patrocinador', () => {

        cy.contains('button', 'Cancelar').click()
        //assert
    });
});

function cadastrarPatrocinadorPessoaFisica(nome, cpf, tel, email, url){
    cy.get('#pessoaFisica').check({force:true})
    cy.get('#nome').type(nome)
    cy.get('#cpf_cnpj').type(cpf)
    cy.get('#telefone').type(tel)
    cy.get('#email').type(email)
    cy.get('#website').type(url)

    cy.contains('button', 'Concluir Cadastro').click()
}