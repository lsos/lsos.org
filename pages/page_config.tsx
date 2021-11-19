import React, { Attributes, FunctionComponent } from "react";
import "./css/index.css";
import Header from "./Header";
import Footer from "./Footer";
import logoUrl from "./logo/lsos.svg";
import { assert } from "@brillout/assert";

export { page_config };
export default page_config;

type PageOptions = {
  route?: string;
  bodyWidth?: number;
  noPageTitle?: boolean;
  hydrateReact?: boolean;
  addInitialProps?: (
    initialProps: InitialProps
  ) => Promise<Record<string, any>>;
  headerAddendum?: JSX.Element;
  renderToDom?: boolean;
  renderToHtml?: boolean;
};

type TitleGetter = (initialProps: AddedInitialProps) => string;

export type GoldpageDef = {
  route: string;
  view: (props: AddedInitialProps) => JSX.Element;

  title: string | TitleGetter;
  favicon: string;

  renderToDom: boolean;
  renderToHtml: boolean;
  renderHtmlAtBuildTime: false;
  hydrateReact: boolean;

  addInitialProps?: (initialProps: InitialProps) => Promise<object>;
};

type InitialProps = {
  headers: {
    cookie: string;
  };
} & any;
export type AddedInitialProps = Attributes & {
  telefuncContext: never;
} & any;

function page_config(
  page_view: FunctionComponent | ((props: any) => JSX.Element),
  title: string | TitleGetter | null,
  {
    route,
    bodyWidth,
    noPageTitle,
    hydrateReact = false,
    addInitialProps,
    headerAddendum,
    renderToHtml = true,
    renderToDom = true,
  }: PageOptions = {}
): GoldpageDef {
  const addInitialProps_enhanced = async (initialProps: InitialProps) => {
    let addedProps;
    if (!addInitialProps) {
      addedProps = {};
    } else {
      addedProps = await addInitialProps(initialProps);
    }
    return addedProps;
  };

  if (!route) {
    assert(title, { route, title });
    assert(typeof title === "string", { route, title });
    route = "/" + title.toLowerCase().split(" ").join("-");
  }

  const pageTitle = title;
  assert(noPageTitle || pageTitle, { title, noPageTitle });

  let docTitle: string | TitleGetter;
  if (!title) {
    docTitle = "Lsos";
  } else {
    docTitle = title;
  }
  assert(docTitle, { title });

  const view = (props: AddedInitialProps) => {
    return (
      <>
        <Header telefuncContext={null} />
        {headerAddendum}
        <div id="page-content-container">
          <div
            id="page-content"
            style={{
              maxWidth: bodyWidth,
            }}
          >
            {noPageTitle ? null : <h1>{pageTitle}</h1>}
            {React.createElement(page_view, props)}
          </div>
        </div>
        <Footer />
      </>
    );
  };

  return {
    route,
    view,

    title: docTitle,
    favicon: logoUrl,

    renderToDom,
    renderToHtml,
    renderHtmlAtBuildTime: false,
    hydrateReact,

    addInitialProps: addInitialProps_enhanced,
  };
}

function isNodejs() {
  return typeof window === "undefined";
}
