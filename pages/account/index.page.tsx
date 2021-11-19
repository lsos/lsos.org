import React from "react";
import page_config from "../page_config";
// import { AccountPage } from "./AccountPage";
import { LoginPage } from "./LoginPage";

export default page_config(
  View,
    /*
  () => {
    const { loggedUser } = telefuncContext;
    const title = loggedUser ? loggedUser.userEmail : "Sign In";
    return title;
  },
    */
  "Sign In",
  {
    noPageTitle: true,
  }
);

function View() {
    return <LoginPage />;
}
/*
function View({ telefuncContext }: { telefuncContext: Context }) {
  if (!telefuncContext.loggedUser) {
    return <LoginPage />;
  }
  return <AccountPage />;
}
*/
