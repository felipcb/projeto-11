/// <reference types = "cypress"/>

beforeEach(() => {
  cy.visit('http://lojaebac.ebaconline.art.br/')
  cy.get('.icon-user-unfollow').click()
});

afterEach(() => {
  cy.screenshot()
});

describe('Funcionalidade Login', () => {

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('standard@ebac.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('a > .hidden-xs').should('contain', 'Welcome')
  })

  it('Deve exibir mensagem de alerta ao inserir usuario inexistente', () => {
    cy.get('#username').type('andard@ebac.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
  })

  it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('standard@ebac.com')
    cy.get('#password').type('teste@t')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida')
  })


})