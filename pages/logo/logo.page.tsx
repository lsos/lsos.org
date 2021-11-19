import React from "react";
import logoUrl from "./lsos.svg";
import page_config from "../page_config";

export default page_config(LogoPage, "Logo");

function LogoPage() {
  return (
    <>
      {[20, 32, 64, 128, 248].reverse().map((size) => (
        <div
          key={size}
          style={{
            display: "inline-block",
            margin: 30,
            verticalAlign: "middle",
          }}
        >
          <img src={logoUrl} height={size} />
        </div>
      ))}
    </>
  );
}
