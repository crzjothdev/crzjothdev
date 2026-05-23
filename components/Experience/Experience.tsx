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
            <h4 className="text-lg font-medium">Principal Software Engineer at <strong>LDS Carpentry Ltd</strong></h4>
            <h5 className="text-sm font-semibold text-gray-500">Mar 2025 – Present</h5>
          </div>
          <p className="text-justify">
            As the sole software engineer, I am responsible for designing and building the
            company's complete digital presence and internal tooling from the ground up. This
            includes the public website, an automated quotation system that replaced a manual
            paper-based process, project administration workflows via Jira, and an ERP platform
            currently in active development to centralise operations across the business.
          </p>
          <List>
            <li>Design and develop the company website end-to-end, from architecture to deployment</li>
            <li>Automate business-critical processes including quotation generation and project tracking</li>
            <li>Implement Jira for project administration and team workflow management</li>
            <li>Lead the architecture and development of a custom ERP platform</li>
          </List>
        </div>

        <div className="pb-6">
          <div className="mb-2">
            <h4 className="text-lg font-medium">Freelance Software Developer</h4>
            <h5 className="text-sm font-semibold text-gray-500">Sep 2023 – Feb 2025</h5>
          </div>
          <p className="text-justify">
            Relocated to Dublin, Ireland, to advance English language proficiency and expand
            professional networks in the European market. During this period I continued to apply
            and grow my engineering skills through independent freelance projects, while immersing
            myself in the Irish tech community.
          </p>
          <List>
            <li>Delivered freelance web development projects for independent clients</li>
            <li>Continued professional development in modern frontend and automation technologies</li>
            <li>Relocated to Ireland and established a professional base in the Dublin market</li>
          </List>
        </div>

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
            Contributed to enhancing customer-focused services by improving navigation across
            the web store, with a particular focus on the checkout module. Applied DevOps
            principles to begin automating the deployment process.
          </p>
          <List>
            <li>Built high-quality software improvements to elevate customer service</li>
            <li>Gathered technical software specifications aligned with business profitability</li>
            <li>Analysed navigation data to inform user experience improvements</li>
          </List>
        </div>

        <div className="pb-6">
          <div className="mb-2">
            <h4 className="text-lg font-medium">Software Developer at <strong>JETSTEREO S.A.</strong></h4>
            <h5 className="text-sm font-semibold text-gray-500">Oct 2019 – Jan 2022</h5>
          </div>
          <p className="text-justify">
            Contributed to enhancing customer-focused services by improving navigation across the
            checkout module of the company's web shopping platform. Applied DevOps principles to
            automate the deployment process and, when a full rebuild of the online store was
            required, proposed and led the adoption of modern tools to improve performance.
          </p>
          <List>
            <li>Built and integrated new payment methods into the online store</li>
            <li>Collaborated with design and marketing teams to improve customer experience</li>
            <li>Led the upgrade of the entire web store to reduce response times and increase profitability</li>
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
            <h5 className="text-sm font-semibold text-gray-500">Sep 2022 – Nov 2022</h5>
          </div>
          <p className="text-justify">
            Responsible for building system interfaces to enable secure and efficient communication
            between internally hosted and externally provided systems. Developed a key tool for the
            bank by migrating physical online banking access tokens to a React Native mobile app
            with a custom Java-based token generation function.
          </p>
          <List>
            <li>Maintained an API interface connecting to international money transfer services (SWIFT)</li>
            <li>Proposed and initiated upgrades of obsolete automated processes (RPG to C#)</li>
            <li>Supported the accounting department during the closing process by building graphical insights</li>
          </List>
        </div>

      </div>
    </div>
  )
}
