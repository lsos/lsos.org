import React, { Attributes, CSSProperties, ReactNode } from "react";

export { Center };

function Center({
  children,
  style = {},
  ...props
}: {
  children: ReactNode;
  style?: CSSProperties;
  props?: Attributes;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
