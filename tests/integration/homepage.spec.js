describe('Homepage', () => {
  it('Visit Homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Nuxt.js Template')
    cy.screenshot('homepage')
  })
})
