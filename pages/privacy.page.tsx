import React from "react";
import { page_config } from "./page_config";
// @ts-ignore
import { PrivacyPolicy } from "@brillout/website-legals";

export default page_config(Privacy, "Privacy Policy", {
  noPageTitle: true,
});

function Privacy() {
  return (
    <>
      <div className="legal-doc">
        <PrivacyPolicy
          website_name={"Lsos"}
          legal_country={"Germany"}
          email_component={
            <span className="contact-address" data-recipient="privacy" />
          }
          has_ads={false}
          no_user_tracking={true}
        />
      </div>
    </>
  );
}
