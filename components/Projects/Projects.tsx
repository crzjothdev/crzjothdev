import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {
  return (
    <div id="projects">
      <h3 className="text-3xl font-normal mb-8">Projects</h3>
      <div className="p-8 rounded-3xl border border-brand-teal md:p-12 md:rounded-[40px]">
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
