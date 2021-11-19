import logoWithTextUrl from "../logo/logo-with-text.svg";
//import logoUrl from "../logo/logo-padded.svg";
import React from "react";

export { LsosLogo };

function LsosLogo({ size }: { size: number }) {
  return (
    <img
      src={logoWithTextUrl}
      style={{ height: size * 1.3 + "rem" }}
      alt="Lsos"
    />
  );
  /*
  return (
    <span style={{ fontSize: (size+'rem') }}>
      <img
        src={logoUrl}
        style={{ height: "1.3em", verticalAlign: "middle" }}
        alt="Lsos"
      />
      <span className="logo-font"> Lsos</span>
    </span>
  );

.logo-font {
  font-family: AirbnbCereal, Inter var, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-weight: 700;
  color: var(--color-black-dark);
}
:root {
  // rgb(49, 52, 61) == #31343d
  --color-black-dark: rgb(49, 52, 61);
}
  */
}
