export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-teal">404</h1>
        <p className="mt-4 text-xl">Page not found</p>
        <a href="/" className="mt-6 inline-block text-brand-teal hover:underline">
          Go home
        </a>
      </div>
    </div>
  )
}
