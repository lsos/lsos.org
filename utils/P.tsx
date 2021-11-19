import React from "react";

export { P };

function P(props: React.HTMLProps<HTMLDivElement>) {
  return <div {...props} className={"paragraph " + (props.className || "")} />;
}
