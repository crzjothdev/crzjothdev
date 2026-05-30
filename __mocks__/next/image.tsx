const MockImage = ({ src, alt, fill, priority, sizes, ...rest }: any) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} {...rest} />
)
export default MockImage
