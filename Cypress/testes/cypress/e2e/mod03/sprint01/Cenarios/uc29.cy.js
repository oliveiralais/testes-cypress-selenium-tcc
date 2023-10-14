describe('Listar Patrocinadores', () => {
    it('ListagemPatrocinadoresBemSucedida', () => {
        cy.visit("http://localhost:4200/dashboard")
        cy.get('[href="/dashboard/patrocinadores"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", " Alberto Setoguchi Júnior ")
    });
});