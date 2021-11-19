import React from "react";
import { page_config } from "./page_config";
// @ts-ignore
import { TermsOfService } from "@brillout/website-legals";

export default page_config(Terms, "Terms of Service", {
  route: "/terms",
  noPageTitle: true,
});

function Terms() {
  return (
    <>
      <div className="legal-doc">
        <TermsOfService
          website_name={"Lsos"}
          legal_country={"Germany"}
          email_component={
            <span className="contact-address" data-recipient="copyright" />
          }
          website_url={"https://lsos.org"}
          no_registration={false}
        />
      </div>
    </>
  );
}
