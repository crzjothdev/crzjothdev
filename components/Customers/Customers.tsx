import Image from 'next/image'

const companies = [
  { name: 'Jetstereo', image: 'jetstereo.webp' },
]

export default function Customers() {
  return (
    <div id="customers">
      <h3 className="text-3xl font-normal mb-8">Customers</h3>
      <div className="p-8 rounded-3xl border border-[#efefef] md:p-12 md:rounded-[40px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="relative w-full min-h-[60px] border border-[#efefef] rounded-lg overflow-hidden"
            >
              <Image src={`/images/${company.image}`} alt={company.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
