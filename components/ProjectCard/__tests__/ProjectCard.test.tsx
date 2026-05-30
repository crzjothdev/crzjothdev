import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

const defaultProps = {
  title: 'My Project',
  subtitle: 'Built with Next.js',
  thumbnail: '/images/logo.webp',
  gitHubUrl: 'https://github.com/crzjothdev/myproject',
}

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard {...defaultProps} />)
    expect(screen.getByText('My Project')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<ProjectCard {...defaultProps} />)
    expect(screen.getByText('Built with Next.js')).toBeInTheDocument()
  })

  it('renders thumbnail image with title as alt text', () => {
    render(<ProjectCard {...defaultProps} />)
    expect(screen.getByRole('img', { name: 'My Project' })).toBeInTheDocument()
  })

  it('GitHub link points to the correct URL', () => {
    render(<ProjectCard {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'GitHub Repository' })).toHaveAttribute(
      'href',
      'https://github.com/crzjothdev/myproject'
    )
  })
})
