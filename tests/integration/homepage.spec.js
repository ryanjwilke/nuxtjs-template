describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Content is accurate and able to be interacted with', () => {
    cy.get('svg.NuxtLogo')
    cy.contains('h1', 'Nuxt.js Template')
    cy.contains('a.button--green', 'Documentation').should('be.visible')
    cy.contains('a.button--grey', 'GitHub').should('be.visible')
    cy.screenshot('homepage')
  })
})
