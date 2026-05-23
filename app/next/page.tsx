import Section from '../../components/Section'
import Aboutme from '../../components/Aboutme'
import Experience from '../../components/Experience'

export default function Page() {
    return (
        <>
            <Section>
                <Aboutme />
            </Section>
            <Section>
                <Experience />
            </Section>
        </>
    )
}