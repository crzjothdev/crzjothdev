import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders a mailto: link', () => {
    render(<Contact />)
    const link = screen.getByRole('link', { name: /contact me/i })
    expect(link.getAttribute('href')).toMatch(/^mailto:/)
  })
})
