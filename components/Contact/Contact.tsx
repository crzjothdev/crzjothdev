export default function Contact() {
  return (
    <div id="contact">
      <h3 className="text-3xl font-normal mb-8">Get In Touch</h3>
      <div className="p-8 rounded-3xl border border-brand-teal flex justify-center shadow-sm md:p-12 md:rounded-[40px]">
        <div className="text-center">
          <h4 className="text-lg font-medium mb-4">
            I am actually available to join a great company
            that would like to achieve great accomplishments
          </h4>
          <a
            href="mailto:jothang31@gmail.com"
            className="inline-block bg-brand-teal text-white px-6 py-2 rounded hover:bg-[#1a7a84] transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
