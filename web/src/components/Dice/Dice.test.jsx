import { render } from '@redwoodjs/testing/web'

import Dice from './Dice'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dice', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dice />)
    }).not.toThrow()
  })
})
