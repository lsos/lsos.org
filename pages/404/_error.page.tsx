import React from "react";
import page_config from "../page_config";

export default page_config(NotFound, "Page Not Found");

function NotFound() {
  const joinUrl = "/join";
  return (
    <p>
      Contact your Lsos manager.
    {/* Couldn't find where /join page is defined
    , or go to{" "}
      <a href={joinUrl}>{"lsos.org" + joinUrl}</a> if you don't have one yet.
      */}
    </p>
  );
}
