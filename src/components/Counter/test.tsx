import { act } from 'react-dom/test-utils'
import { render, screen } from 'utils/test-utils'

import { Counter } from '.'

describe('Counter', () => {
  it('should render correctly', () => {
    act(() => {
      render(<Counter />)
    })

    const counter = screen.getByTestId('counter-view')
    const button = screen.getByRole('button', { name: /increment/i })

    expect(counter).toHaveTextContent('0')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(counter).toHaveTextContent('1')

    screen.logTestingPlaygroundURL()
  })
})
