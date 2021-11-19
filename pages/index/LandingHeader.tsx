import React from "react";
import { Center } from "../../utils/Center";
import { LsosLogo } from "../logo/LsosLogo";

export { LandingHeader };

function LandingHeader() {
  return (
    <div style={{ paddingTop: 38, paddingBottom: 84 }}>
      <h1
        style={{
          fontSize: "3em",
          textAlign: "center",
          marginBottom: "0.35em",
          marginTop: 0,
          //marginLeft: -20,
        }}
      >
        <Center>
          <LsosLogo size={5} />
        </Center>
      </h1>

      <div
        style={{
          textAlign: "center",
          fontSize: "1.4em",
          fontWeight: 500,
          //marginLeft: -10,
        }}
      >
        Open source, sustainable&nbsp;& independent.
      </div>
    </div>
  );
}
