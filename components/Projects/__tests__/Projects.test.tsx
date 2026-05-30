import { render, screen } from '@testing-library/react'
import Projects from '../Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders at least one project title', () => {
    render(<Projects />)
    expect(screen.getByText('Professional Profile')).toBeInTheDocument()
  })

  it('renders GitHub Repository links', () => {
    render(<Projects />)
    expect(screen.getAllByRole('link', { name: 'GitHub Repository' }).length).toBeGreaterThan(0)
  })
})
