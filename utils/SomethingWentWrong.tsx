import React from "react";

export { SomethingWentWrong };

function SomethingWentWrong() {
  return (
    <span className="text-red">
      Something unexpected happened, <a href="/contact">contact the Lsos</a>.
    </span>
  );
}
