import { render, screen, fireEvent } from '@testing-library/react'
import AppBar from '../AppBar'

const pages = [
  { label: 'About Me', target: 'about-me' },
  { label: 'Experience', target: 'experience' },
]

describe('AppBar', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  it('renders all nav item labels', () => {
    render(<AppBar pages={pages} />)
    expect(screen.getAllByText('About Me').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0)
  })

  it('renders resume link with correct href', () => {
    render(<AppBar pages={pages} />)
    const links = screen.getAllByRole('link', { name: /resume/i })
    expect(links[0]).toHaveAttribute('href', '/documents/resume.pdf')
  })

  it('renders the ThemeToggle button', () => {
    render(<AppBar pages={pages} />)
    expect(screen.getAllByRole('button', { name: 'Toggle dark mode' }).length).toBeGreaterThan(0)
  })

  it('hamburger button has correct aria-label', () => {
    render(<AppBar pages={pages} />)
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toBeInTheDocument()
  })

  it('clicking hamburger shows overlay', () => {
    const { container } = render(<AppBar pages={pages} />)
    expect(container.querySelector('.fixed.inset-0.z-40')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    expect(container.querySelector('.fixed.inset-0.z-40')).toBeInTheDocument()
  })
})
