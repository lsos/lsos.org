import React, { FunctionComponent } from 'react'
import './css/index.css'
import Header from './Header'
import Footer from './Footer'
//import logoUrl from "./logo/lsos.svg";
import { assert } from '@brillout/assert'

export { page_config }
export default page_config

type PageOptions = {
  bodyWidth?: number
  noPageTitle?: boolean
  headerAddendum?: JSX.Element
}

type TitleGetter = () => string

export type GoldpageDef = {
  view: () => JSX.Element

  title: string | TitleGetter
  favicon: string
}

function page_config(
  page_view: FunctionComponent | ((props: any) => JSX.Element),
  title: string | TitleGetter | null,
  { bodyWidth, noPageTitle, headerAddendum }: PageOptions = {}
) {
  /*: GoldpageDef*/
  const pageTitle = title
  assert(noPageTitle || pageTitle, { title, noPageTitle })

  let docTitle: string | TitleGetter
  if (!title) {
    docTitle = 'Lsos'
  } else {
    docTitle = title
  }
  assert(docTitle, { title })

  const view = () => {
    return (
      <>
        <Header />
        {headerAddendum}
        <div id="page-content-container">
          <div
            id="page-content"
            style={{
              maxWidth: bodyWidth
            }}
          >
            {noPageTitle ? null : <h1>{pageTitle}</h1>}
            {React.createElement(page_view)}
          </div>
        </div>
        <Footer />
      </>
    )
  }

  objectAssign(view, {
    title: docTitle
  })
  return view
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj extends unknown, ObjAddendum extends Record<string, unknown>>(
  obj: Obj,
  objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}
