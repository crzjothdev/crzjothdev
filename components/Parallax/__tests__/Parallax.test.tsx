import { render, screen } from '@testing-library/react'
import Parallax from '../Parallax'

describe('Parallax', () => {
  it('renders the h1 with the developer name', () => {
    render(<Parallax />)
    expect(screen.getByRole('heading', { level: 1, name: 'Angelo Cruz' })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Parallax />)
    expect(screen.getByText('Software Developer')).toBeInTheDocument()
  })

  it('renders the "Get in touch" CTA linking to #contact', () => {
    render(<Parallax />)
    const cta = screen.getByRole('link', { name: /get in touch/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('renders GitHub social link', () => {
    render(<Parallax />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('renders LinkedIn social link', () => {
    render(<Parallax />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders X / Twitter social link', () => {
    render(<Parallax />)
    expect(screen.getByRole('link', { name: 'X / Twitter' })).toBeInTheDocument()
  })
})
