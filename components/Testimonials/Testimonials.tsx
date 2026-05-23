const testimonials = [
  {
    author: 'David Nolasco',
    content: `"The company where I was working when Angelo started had been planning
    many upgrades and gave new fresh experience to all customers. Angelo proposed
    new modern framework which will help us to reach those achievements faster"`,
  },
  {
    author: 'René Peña',
    content: `"Angelo Cruz has been a great co-worker during our many shared projects.
    He has developed special tools, recommend modern software technologies. He built
    mobile based token for one company that we used to work"`,
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials">
      <h3 className="text-3xl font-normal mb-8">Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="h-full bg-gray-50 rounded-3xl p-6 md:p-8 md:rounded-[32px] md:border md:border-[#efefef]"
          >
            <h5 className="text-xl font-medium mb-3">{t.author}</h5>
            <article>
              <p className="italic text-justify">{t.content}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
