import Image from 'next/image'

export default function Aboutme() {
  return (
    <div id="about-me">
      <h3 className="text-3xl font-normal mb-8">About Me</h3>
      <div className="p-8 rounded-3xl border border-brand-teal flex flex-col md:p-12 md:rounded-[40px] md:flex-row gap-6">
        <div className="flex-1 text-justify md:order-1">
          <p className="mb-4">
            Hello my name is Angelo! Since I started my university life I have
            been interested in computer technologist, continuosly learning and
            applying modern software patterns and methods. I have been working
            on great projects in private companies and personal entrepreneurship.
            I have a special focus on frontend and mobile development but also
            on backend and multipropuse programming languages.
          </p>
          <p className="mb-4">
            Much of my time is invested in getting best practices, faster development
            methods and standardised rules to as provide highly qualified software.
          </p>
          <span>Some of the skilled programming languages that I have been working with are:</span>
          <ul className="chevron-list mt-2 grid grid-cols-2" style={{ listStyleImage: "url('/icons/chevron.svg')" }}>
            <li>JS</li>
            <li>C#</li>
            <li>PHP</li>
            <li>Java</li>
            <li>C++</li>
            <li>Python</li>
            <li>
              <a
                href="/documents/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 underline-offset-2 decoration-gray-700 hover:text-brand-teal hover:decoration-brand-teal underline"
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
