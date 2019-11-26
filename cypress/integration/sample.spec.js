describe('My First Test', function() {
  before(() => {
    cy.getCharacters();
  })
  
  it('Visits the Kitchen Sink', function() {
    cy.visit('/')
  })
})
