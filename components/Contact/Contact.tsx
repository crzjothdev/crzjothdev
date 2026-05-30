export default function Contact() {
  return (
    <div id="contact">
      <h3 className="text-2xl font-semibold mb-6 pl-3 border-l-4 border-brand-teal">Get In Touch</h3>
      <div className="p-8 rounded-2xl border border-brand-teal bg-white dark:bg-gray-900 dark:border-teal-700 flex justify-center shadow-sm md:p-12">
        <div className="text-center">
          <h4 className="text-lg font-medium mb-4">
            I am actually available to join a great company
            that would like to achieve great accomplishments
          </h4>
          <a
            href="mailto:jothang31@gmail.com"
            className="inline-block bg-brand-teal text-white px-6 py-2 rounded hover:bg-brand-teal-hover transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
