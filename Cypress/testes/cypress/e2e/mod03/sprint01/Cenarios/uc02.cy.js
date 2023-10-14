describe('Listar Produtos Cadastrados na Loja', () => {
    it('ListagemProdutosBemSucedida', () => {
        cy.visit("http://localhost:4200/dashboard")
        cy.get('[href="/dashboard/list-product"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", " Camiseta V2023 Tamanho M ")
    });
});