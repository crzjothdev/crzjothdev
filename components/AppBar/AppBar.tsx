'use client'
import { useState } from 'react'
import Image from 'next/image'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

interface Page {
  label: string
  target: string
}

interface Props {
  pages: Page[]
}

export default function AppBar({ pages }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleNavigate = async (target: string) => {
    setDrawerOpen(false)
    await new Promise<void>(resolve => setTimeout(resolve, 10))
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm dark:shadow-gray-800/50 transition-colors duration-300">
        {/* Mobile bar */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            className="text-brand-teal p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-brand-teal text-brand-teal px-4 py-1.5 rounded text-sm hover:bg-brand-teal hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Desktop bar */}
        <div className="hidden md:flex items-center min-h-[80px] px-4 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Image src="/images/logo.webp" alt="Angelo's logo" width={50} height={50} />
          </div>
          <nav className="flex-1 flex justify-center gap-2">
            {pages.map((page) => (
              <button
                key={page.target}
                onClick={() => handleNavigate(page.target)}
                className="px-4 py-2 text-brand-teal hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
              >
                {page.label}
              </button>
            ))}
          </nav>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-brand-teal text-brand-teal px-4 py-1.5 rounded text-sm hover:bg-brand-teal hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-52 bg-footer-dark text-white transform transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center py-4 border-b border-drawer-border">
          <Image src="/images/logo.webp" alt="Angelo's logo" width={50} height={50} />
        </div>
        <nav className="py-2 min-w-[200px]">
          {pages.map((page) => (
            <button
              key={page.target}
              onClick={() => handleNavigate(page.target)}
              className="w-full text-left px-4 py-3 hover:bg-drawer-hover transition-colors"
            >
              {page.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
