import React from "react";
import page_config from "../page_config";

export default page_config(NotFound, "Page Not Found", {
  // For static hosts:
  // route: "/404",
  // For Node.js server:
  route: "*",
  renderToDom: false,
});

function NotFound() {
  const joinUrl = "/join";
  return (
    <p>
      Contact your Lsos manager, or go to{" "}
      <a href={joinUrl}>{"lsos.org" + joinUrl}</a> if you don't have one yet.
    </p>
  );
}
