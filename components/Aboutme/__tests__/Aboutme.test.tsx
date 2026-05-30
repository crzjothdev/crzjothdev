import { render, screen } from '@testing-library/react'
import Aboutme from '../Aboutme'

describe('Aboutme', () => {
  it('renders the section heading', () => {
    render(<Aboutme />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders bio text', () => {
    render(<Aboutme />)
    expect(screen.getByText(/Hello, I'm Angelo/)).toBeInTheDocument()
  })

  it('renders profile image with meaningful alt text', () => {
    render(<Aboutme />)
    expect(screen.getByRole('img', { name: 'Angelo Cruz' })).toBeInTheDocument()
  })

  it('renders resume link', () => {
    render(<Aboutme />)
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute('href', '/documents/resume.pdf')
  })
})
