import Image from 'next/image'

const tools = [
  { name: 'JavaScript / TypeScript', icon: 'javascript.svg' },
  { name: 'React / React Native', icon: 'react.svg' },
  { name: 'Next.js', icon: 'nextjs.svg' },
  { name: 'C# / .NET', icon: 'csharp.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'Java', icon: 'java.svg' },
  { name: 'PHP', icon: 'php.svg' },
  { name: 'C++', icon: 'cplusplus.svg' },
]

export default function SkilledTools() {
  return (
    <div id="skilled-tools">
      <h3 className="text-2xl font-semibold mb-6 pl-3 border-l-4 border-brand-teal">Skills & Tools</h3>
      <div className="p-8 rounded-2xl border border-brand-teal bg-white dark:bg-gray-900 dark:border-teal-700 md:p-12">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="relative h-16 w-16 p-3 border border-brand-teal/30 dark:border-teal-700/40 shadow-sm rounded-full bg-white dark:bg-gray-800">
                <Image src={`/icons/${tool.icon}`} alt={tool.name} fill className="p-3" />
              </div>
              <span className="text-xs text-center text-gray-500 dark:text-gray-400 leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
