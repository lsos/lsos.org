import ReactDOM from 'react-dom'
import { getPage } from 'vite-plugin-ssr/client'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { activateEmailLinks } from '../utils/activateEmailLinks'

hydrate()

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>()
  const { Page, pageProps } = pageContext

  const pageElement = Page(pageProps)

  ReactDOM.hydrate(pageElement, document.getElementById('page-view'))

  activateEmailLinks({ domain_name: 'lsos.org' })
}
