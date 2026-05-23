declare module 'react-gtm-module' {
  interface TagManagerArgs {
    gtmId: string
    [key: string]: unknown
  }
  const TagManager: {
    initialize(args: TagManagerArgs): void
  }
  export default TagManager
}
