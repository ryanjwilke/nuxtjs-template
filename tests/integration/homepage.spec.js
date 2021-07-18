describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Content is accurate and able to be interacted with', () => {
    cy.get('svg.NuxtLogo')
    cy.contains('h1', 'Nuxt.js Template')
    cy.contains('a.button--green', 'Documentation').click()
    cy.contains('a.button--grey', 'GitHub').click()
    cy.screenshot('homepage')
  })
})
