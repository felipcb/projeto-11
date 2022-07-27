/// <reference types = "cypress"/>
 
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
  });

describe('Usuário deve realizar o pre-cadastro', () => {
    
    it('Cadastrar com sucesso', () => {
        cy.get('#reg_email').
        cy.get('#reg_password')
        cy.get(':nth-child(4) > .button').click()
    });
});