import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from '../page'

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn()
})

describe('Home page integration', () => {
  it('renders the AppBar', () => {
    render(<Home />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: 'Angelo Cruz' })).toBeInTheDocument()
  })

  it('renders the About Me section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 3, name: 'About Me' })).toBeInTheDocument()
  })

  it('renders the Experience section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 3, name: 'Experience' })).toBeInTheDocument()
  })

  it('renders the Skills & Tools section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 3, name: 'Skills & Tools' })).toBeInTheDocument()
  })

  it('renders the Projects section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 3, name: 'Projects' })).toBeInTheDocument()
  })

  it('renders the Contact section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 3, name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('clicking a nav button calls scrollIntoView on the target element', async () => {
    render(<Home />)
    const aboutSection = document.createElement('div')
    aboutSection.id = 'about-me'
    document.body.appendChild(aboutSection)

    const [navBtn] = screen.getAllByRole('button', { name: 'About Me' })
    fireEvent.click(navBtn)

    await waitFor(() => {
      expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
    })

    document.body.removeChild(aboutSection)
  })
})
