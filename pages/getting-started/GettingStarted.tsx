import React from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./getting-started.css";
import { P } from "../../utils/P";

export { GettingStarted };

function GettingStarted() {
  return (
    <List>
      <ListItem>
        <a href="/contact">Contact us</a>, we will discuss a pricing for your
        project and create you an account.
      </ListItem>
      <ListItem>
        Create a GitHub issue letting your community know that you intend to use
        the Lsos, such as{" "}
        <a href="https://github.com/reframejs/wildcard-api/issues/56">
          wildcard-api#56
        </a>
        .
      </ListItem>
      <ListItem>
        Add the Lsos library.
        <UsageCode />
        <P>
          Larger projects will see a{" "}
          <code className="inline-code">console.warn</code> telling them that an
          activation key is required. (Smaller projects don't need an activation
          key, more infos at the <a href="/faq">FAQ</a>.)
        </P>
        <P>
          With <Code>trustMode: true</Code> the Lsos library never blocks your
          users from using your code. We recommend using trust mode at the
          beginning and afterwards, if you are not satisfied with your revenue,
          to consider using enforce mode.
        </P>
        <P>
          Docs:{" "}
          <a href="https://github.com/Lsos/lsos-js#readme">
            github.com/Lsos/lsos-js
          </a>
          .
        </P>
      </ListItem>
      <ListItem>
        [Optional] Add an <a href="/labels">Lsos label</a> to your
        readme/website.
      </ListItem>
    </List>
  );
}

function UsageCode() {
  const code = `
import { verify } from "lsos"; // npm install lsos

verify({
  // Your project's name
  projectName: "My Open Source Project",

  // Your npm package that calls this \`verify()\` function
  npm: "my-open-source-project",

  // Never block users
  trustMode: true,
});`;
  const __html = Prism.highlight(
    code,
    Prism.languages.javascript,
    "javascript"
  );

  return (
    <div className="js-block">
      <pre
        className="goldpage-indent-fix"
        dangerouslySetInnerHTML={{ __html }}
      />
    </div>
  );
}

function List(props: any) {
  return <ol {...props} style={{ paddingLeft: "1.4em" }} />;
}
function ListItem(props: any) {
  return <li {...props} />;
}

function Code({ children }: { children: string }) {
  return <code className="inline-code">{children}</code>;
}
