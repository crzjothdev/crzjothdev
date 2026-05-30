import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import GtmProvider from './gtm-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Angelo Cruz - Software Developer',
  description: 'Angelo Cruz professional web page with information about skills, projects and availability to get new jobs',
  icons: { icon: '/images/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})();`
        }} />
      </head>
      <body className="antialiased font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <GtmProvider />
        {children}
      </body>
    </html>
  )
}
