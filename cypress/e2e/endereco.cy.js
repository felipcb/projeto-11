/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
    })
    
});

describe('Funcionalidade enderecos: Faturamento e entrega', () => {
    it('Deve fazer cadastro de faturamento com sucesso', () => {
       
    });
});