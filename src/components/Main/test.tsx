import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = render(<Main />)
    // seach for the element
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    // verify if exists

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
