Cypress.Commands.add("getCharacters", () => {
  cy.server()
  cy.route('GET', 'https://swapi.co/api/people/', 'fixtures:characters.json')
})
