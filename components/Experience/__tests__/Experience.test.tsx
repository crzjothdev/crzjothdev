import { render, screen } from '@testing-library/react'
import Experience from '../Experience'

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders at least one job title', () => {
    render(<Experience />)
    expect(screen.getByText(/Principal Software Engineer/)).toBeInTheDocument()
  })

  it('renders at least one employer name', () => {
    render(<Experience />)
    expect(screen.getByText(/LDS Carpentry/)).toBeInTheDocument()
  })

  it('renders at least one date range', () => {
    render(<Experience />)
    expect(screen.getByText(/Mar 2025/)).toBeInTheDocument()
  })
})
