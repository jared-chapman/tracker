import { render } from '@redwoodjs/testing/web'

import Die from './Die'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Die', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Die />)
    }).not.toThrow()
  })
})
