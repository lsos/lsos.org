import React from "react";
import page_config from "../page_config";

export default page_config(LabelsPage, "Labels", { route: "/labels" });

function LabelsPage() {
  return (
    <>
      {["badge", "banner"].map((badgeName) => {
        const badgeUrl = "/labels/" + badgeName + ".svg";
        return (
          <div style={{ marginBottom: 40 }} key={badgeName}>
            <a href={badgeUrl}>
              <img src={badgeUrl} />
            </a>
            <pre
              className="code-block"
              style={{ marginTop: 3 }}
            >{`<img src="https://lsos.org${badgeUrl}" />`}</pre>
          </div>
        );
      })}
    </>
  );
}
