import Image from 'next/image'

const tools = [
  { name: 'Javascript', icon: 'javascript.svg' },
  { name: 'PHP', icon: 'php.svg' },
  { name: 'Java', icon: 'java.svg' },
  { name: 'C#', icon: 'csharp.svg' },
  { name: 'Rust', icon: 'rust.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'C++', icon: 'cplusplus.svg' },
  { name: 'React', icon: 'react.svg' },
]

export default function SkilledTools() {
  return (
    <div id="tools">
      <h3 className="text-3xl font-normal mb-8">Skilled Tools</h3>
      <div className="p-8 rounded-3xl border border-[#efefef] md:p-12 md:rounded-[40px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative h-20 w-20 mx-auto p-4 border border-[#efefef] shadow-sm rounded-full"
            >
              <Image src={`/icons/${tool.icon}`} alt={tool.name} fill className="p-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
