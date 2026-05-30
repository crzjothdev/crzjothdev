import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {
  return (
    <div id="projects">
      <h3 className="text-2xl font-semibold mb-6 pl-3 border-l-4 border-brand-teal">Projects</h3>
      <div className="p-8 rounded-2xl border border-brand-teal bg-white dark:bg-gray-900 dark:border-teal-700 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ProjectCard
            title="Professional Profile"
            subtitle="Built with NextJS 13"
            thumbnail="/images/logo.webp"
            gitHubUrl="https://github.com/crzjothdev/crzjothdev"
          />
          <ProjectCard
            title="Wedding Template"
            subtitle="Built with NextJS 13"
            thumbnail="/images/wedding-logo.webp"
            gitHubUrl="https://github.com/crzjothdev/wedding"
          />
        </div>
      </div>
    </div>
  )
}
