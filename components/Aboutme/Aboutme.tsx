import Image from 'next/image'

export default function Aboutme() {
  return (
    <div id="about-me">
      <h3 className="text-2xl font-semibold mb-6 pl-3 border-l-4 border-brand-teal">About Me</h3>
      <div className="p-8 rounded-2xl border border-brand-teal bg-white dark:bg-gray-900 dark:border-teal-700 flex flex-col md:p-12 md:flex-row gap-6">
        <div className="flex-1 text-justify md:order-1">
          <p className="mb-4">
            Hello, I&apos;m Angelo! I&apos;m a software engineer based in Dublin, Ireland,
            with a strong focus on full-stack development and AI-driven automation.
            Since the start of my career I have been dedicated to continuously
            learning and applying modern software practices — from architecting web
            platforms to designing intelligent workflows that help businesses operate
            more efficiently. Currently, as Principal Software Engineer at LDS
            Carpentry Ltd, I am building the company&apos;s entire digital infrastructure
            from scratch: the public website, automated quotation systems, project
            administration tooling via Jira, and an ERP platform currently in active
            development.
          </p>
          <p className="mb-4">
            Much of my time is invested in bridging the gap between engineering
            capability and real business value — finding practical ways to automate
            manual processes, reduce friction, and deliver software that genuinely
            moves the needle. I thrive on ownership and end-to-end responsibility,
            and I am actively seeking opportunities with ambitious teams in Ireland
            and globally.
          </p>
          <span>Some of the technologies I work with:</span>
          <ul className="chevron-list mt-2 grid grid-cols-2" style={{ listStyleImage: "url('/icons/chevron.svg')" }}>
            <li>TypeScript</li>
            <li>C#</li>
            <li>React / Next.js</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>
              <a
                href="/documents/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 underline-offset-2 decoration-gray-700 dark:decoration-gray-300 hover:text-brand-teal hover:decoration-brand-teal underline"
              >
                Read more on the resume
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:order-2">
          <Image
            src="/images/profile.webp"
            alt="Angelo Cruz"
            width={300}
            height={300}
            className="rounded-3xl md:rounded-[40px]"
          />
        </div>
      </div>
    </div>
  )
}
