import { render, screen, act } from '@testing-library/react'
import FadeIn from '../FadeIn'

describe('FadeIn', () => {
  let capturedCallback: (entries: Partial<IntersectionObserverEntry>[]) => void
  let mockUnobserve: jest.Mock

  beforeEach(() => {
    mockUnobserve = jest.fn()
    ;(global.IntersectionObserver as jest.Mock).mockImplementation((cb) => {
      capturedCallback = cb
      return { observe: jest.fn(), unobserve: mockUnobserve, disconnect: jest.fn() }
    })
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))
  })

  it('renders children', () => {
    render(<FadeIn><span>hello</span></FadeIn>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('starts invisible when reduced motion is not set', () => {
    const { container } = render(<FadeIn><span>content</span></FadeIn>)
    expect(container.firstChild).toHaveClass('opacity-0')
  })

  it('is immediately visible when prefers-reduced-motion: reduce is active', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))
    const { container } = render(<FadeIn><span>content</span></FadeIn>)
    expect(container.firstChild).toHaveClass('opacity-100')
  })

  it('becomes visible when the intersection observer fires', () => {
    const { container } = render(<FadeIn><span>content</span></FadeIn>)
    expect(container.firstChild).toHaveClass('opacity-0')
    act(() => {
      capturedCallback([{ isIntersecting: true } as IntersectionObserverEntry])
    })
    expect(container.firstChild).toHaveClass('opacity-100')
  })

  it('calls unobserve exactly once after first intersection', () => {
    render(<FadeIn><span>content</span></FadeIn>)
    act(() => {
      capturedCallback([{ isIntersecting: true } as IntersectionObserverEntry])
    })
    expect(mockUnobserve).toHaveBeenCalledTimes(1)
  })

  it('does not become visible when isIntersecting is false', () => {
    const { container } = render(<FadeIn><span>content</span></FadeIn>)
    act(() => {
      capturedCallback([{ isIntersecting: false } as IntersectionObserverEntry])
    })
    expect(container.firstChild).toHaveClass('opacity-0')
  })
})
