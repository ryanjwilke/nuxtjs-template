import { mount } from '@cypress/vue'
import Logo from './logo.vue'

describe('Logo', () => {
  it('contains an svg', () => {
    cy.get('svg').contains('Fetching mountains...')
  })
})
