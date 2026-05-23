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
      <h3 className="text-3xl font-normal mb-8">Skills & Tools</h3>
      <div className="p-8 rounded-3xl border border-brand-teal md:p-12 md:rounded-[40px]">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="relative h-16 w-16 p-3 border border-brand-teal/30 shadow-sm rounded-full">
                <Image src={`/icons/${tool.icon}`} alt={tool.name} fill className="p-3" />
              </div>
              <span className="text-xs text-center text-gray-500 leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
