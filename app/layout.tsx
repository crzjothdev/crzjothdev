import type { Metadata } from 'next'
import '../styles/globals.css'
import GtmProvider from './gtm-provider'

export const metadata: Metadata = {
  title: 'Angelo Cruz - Software Developer',
  description: 'Angelo Cruz professional web page with information about skills, projects and availability to get new jobs',
  icons: { icon: '/images/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GtmProvider />
        {children}
      </body>
    </html>
  )
}
