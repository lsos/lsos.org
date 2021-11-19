import React from "react";
import { page_config } from "./page_config";

export default page_config(Min, "Minimum", {
  route: "/min",
  renderToDom: false,
});

function Min() {
  return (
    <>
      <p>
        We do not track user data beyond what is strictly necessary &mdash; we
        only persist login sessions. (The GDPR then requires no user consent.)
      </p>
      <p>
        We use JavaScript only when necessary; many of our pages have no
        JavaScript.
      </p>
    </>
  );
}
