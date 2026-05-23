import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function Section({ children }: Props) {
  return (
    <section className="mx-6 mt-6 mb-16 first:mt-6 md:mx-0 md:py-8 md:mb-12 md:first:mt-12">
      {children}
    </section>
  )
}
