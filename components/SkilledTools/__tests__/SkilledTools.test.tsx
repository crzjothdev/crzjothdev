import { render, screen } from '@testing-library/react'
import SkilledTools from '../SkilledTools'

const expectedTools = [
  'JavaScript / TypeScript',
  'React / React Native',
  'Next.js',
  'C# / .NET',
  'Python',
  'Java',
  'PHP',
  'C++',
]

describe('SkilledTools', () => {
  it('renders the section heading', () => {
    render(<SkilledTools />)
    expect(screen.getByText('Skills & Tools')).toBeInTheDocument()
  })

  it.each(expectedTools)('renders tool label "%s"', (name) => {
    render(<SkilledTools />)
    expect(screen.getByText(name)).toBeInTheDocument()
  })

  it('renders an icon image for each tool with non-empty alt text', () => {
    render(<SkilledTools />)
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })
})
