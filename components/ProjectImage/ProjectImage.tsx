interface Props {
  src: string
  alt?: string
}

export default function ProjectImage({ src, alt = '' }: Props) {
  return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )
}
