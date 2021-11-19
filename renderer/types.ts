export type PageProps = {}
// The `pageContext` that are available in both on the server-side and browser-side

type Meta = {
  title?: string
  skipPageShell?: true
}

type Page = (pageProps: PageProps) => React.ReactElement

export type PageContext = {
  Page: Page & Meta
  pageProps: PageProps
  urlPathname: string
}
