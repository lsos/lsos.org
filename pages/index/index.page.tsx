import React from "react";
import Landing from "./Landing.mdx";
import page_config from "../page_config";
import { LandingHeader } from "./LandingHeader";

export default page_config(Landing, null, {
  route: "/",
  noPageTitle: true,
  headerAddendum: <LandingHeader />,
  bodyWidth: 626,
  renderToDom: false,
});
