/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('produtos/')
});

describe('Adicionar produto ao carrinho', () => {
    
    it('Deve adicionar produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .eq(5)
        .click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '2')
    });

    it.only('Deve adicionar produto ao carrinho usando Comando customizado', () => {
        cy.addProduto(5, 'XL', 'Yellow', 2)
    });

    it.only('Deve adicionar produto ao carrinho usando Comando customizado', () => {
        cy.addProduto(8, 36, 'Black', 2)
    });
});