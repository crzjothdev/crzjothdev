import { ReactNode } from 'react'

function List({ children }: { children: ReactNode }) {
  return (
    <ul className="chevron-list pt-4" style={{ listStyleImage: "url('/icons/chevron.svg')" }}>
      {children}
    </ul>
  )
}

export default function Experience() {
  return (
    <div id="experience">
      <h3 className="text-3xl font-normal mb-8">Experience</h3>
      <div className="p-8 rounded-3xl border border-brand-teal md:p-12 md:rounded-[40px]">

        <div className="pb-6">
          <div className="mb-2">
            <h4 className="text-lg font-medium">
              External Consultant at{' '}
              <a href="https://jetstereo.com" className="text-brand-teal hover:underline">
                @JETSTEREO S.A.
              </a>
            </h4>
            <h5 className="text-sm font-semibold text-gray-500">Aug 2023</h5>
          </div>
          <p className="text-justify">
            I cooperated to enhance customer focused services as a way to provide soft navigation
            specially in checkout module of the web store. I also started to apply DevOps principles
            as to automating the deployment process.
          </p>
          <List>
            <li>Build highly qualified software to offer better customer service</li>
            <li>Pick up technical software specifications based on business rentability</li>
            <li>Navigation data analytics as feedback to build a better user experience</li>
          </List>
        </div>

        <div className="pb-6">
          <div className="mb-2">
            <h4 className="text-lg font-medium">Software Developer at <strong>JETSTEREO S.A.</strong></h4>
            <h5 className="text-sm font-semibold text-gray-500">Oct 2019 - Jan 2022</h5>
          </div>
          <p className="text-justify">
            I cooperate as to enhance customer focused services as a way to provide soft navigation,
            especially the checkout module of their web shopping platform. I also started to apply
            DevOps principles as to automating the deployment process. When it was necessary to
            rebuild the online store, I took the role to propose and started applying modern tools
            to improve the performance.
          </p>
          <List>
            <li>Responsibly building new payment methods in the online store</li>
            <li>Worked with designers and marketing areas to provide a better customer experience</li>
            <li>
              I had the responsibility to upgrade the entire web store to decrease the response time
              of the service and increase rentability
            </li>
          </List>
        </div>

        <div className="pb-4">
          <div className="mb-2">
            <h4 className="text-lg font-medium">
              Software Developer at{' '}
              <a href="https://banhcafe.hn" className="text-brand-teal hover:underline">
                @BANHCAFE
              </a>
            </h4>
            <h5 className="text-sm font-semibold text-gray-500">Sep 2022 - Nov 2022</h5>
          </div>
          <p className="text-justify">
            Responsable to build better system interfaces to communicate securely and faster systems
            both home hosted and externally provided. I built an important tool for the bank, it was
            popular to carry a physical online banking access token but there are many disadvantages,
            so I decided to move it to a mobile app using React Native with special Java function
            that generates token.
          </p>
          <List>
            <li>
              Maintain an API interface that connects to international money transfer services (SWIFT)
            </li>
            <li>Propose upgrades of obsolete automated processes (RPG to C#)</li>
            <li>Support the accounting section with the closing process building graphical insights</li>
          </List>
        </div>

      </div>
    </div>
  )
}
