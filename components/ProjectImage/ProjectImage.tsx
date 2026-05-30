import Image from 'next/image'

interface Props {
  src: string
  alt?: string
}

export default function ProjectImage({ src, alt = '' }: Props) {
  return (
    <div className="relative w-full h-full">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}
