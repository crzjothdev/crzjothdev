import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

export default function Section({ children }: Props): React.ReactNode {
    return (
        <section className="mx-auto max-w-4xl mb-5">
            {children}
        </section>
    )
}