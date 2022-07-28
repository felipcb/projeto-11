/// <reference types = "cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
    })
    
});

describe('Funcionalidade enderecos: Faturamento e entrega', () => {
    it('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Juninho', 'Barbosa', 'Nescafe', 'Brasil', 'Brasilia', 'Apartamento', 'Correntina', 'Rio Grande do Norte', '71020020', '61999999999')
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
     });
});