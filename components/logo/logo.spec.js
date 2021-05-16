import { mount } from '@cypress/vue'
import Logo from './logo.vue'

describe('Logo', () => {
  it('contains an svg', () => {
    mount(<Logo />)
    cy.get('svg').should('exist')
  })
})
