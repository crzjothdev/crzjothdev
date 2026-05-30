import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '../ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  it('renders a button with aria-label "Toggle dark mode"', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('adds dark class to <html> on first click', () => {
    render(<ThemeToggle />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes dark class on second click', () => {
    render(<ThemeToggle />)
    const btn = screen.getByRole('button', { name: 'Toggle dark mode' })
    fireEvent.click(btn)
    fireEvent.click(btn)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('persists "dark" to localStorage after enabling dark mode', () => {
    render(<ThemeToggle />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('persists "light" to localStorage after disabling dark mode', () => {
    render(<ThemeToggle />)
    const btn = screen.getByRole('button', { name: 'Toggle dark mode' })
    fireEvent.click(btn)
    fireEvent.click(btn)
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
