import React from 'react'
import { FaqContent, FaqHeader, FaqQuestion } from "./FaqView";
import activationFormScreenshot from "./activation-form.png";
import libScreenshot from "./lib.png";
import cliScreenshot from "./cli.png";
import { ReactNode } from "react";
import { Center } from "../../utils/Center";
import { P } from "../../utils/P";

export { Faq };

function Faq() {
  const questionsForUsers = getQuestionsForUsers();
  const questionsForDevs = getQuestionsForDevs();
  return (
    <>
      <Section>Lsos project users</Section>
      <FaqHeader questions={questionsForUsers} />
      <Section>Open source developers</Section>
      <FaqHeader questions={questionsForDevs} />

      <FaqContent questions={questionsForUsers} />
      <FaqContent questions={questionsForDevs} />
    </>
  );
}

function getQuestionsForUsers(): FaqQuestion[] {
  return [
    accessible(),
    keyWhen(),
    keyHow(),
    pricing(),
    prod(),
    fork(),
    cheat(),
    contrib(),
  ];
}
function getQuestionsForDevs(): FaqQuestion[] {
  return [
    price(),
    trustMode(),
    enforceMode(),
    licensing(),
    remove(),
    size(),
    contradiction(),
    cut(),
    lib(),
  ];
}

function accessible() {
  return {
    question: "Who needs to pay?",
    answer: (
      <>
        Lsos projects are free for:
        <ul>
          <li>Individuals</li>
          <li>Small projects</li>
          <li>Small companies</li>
          <li>Nonprofits of any size</li>
        </ul>
      </>
    ),
    hash: "accessible",
  };
}
function keyWhen() {
  return {
    question: "Who needs an activation key?",
    answer: (
      <>
        You can use Lsos projects without activation key if you work:
        <ul>
          <li>For a small project.</li>
          <li>For an open source project.</li>
          <li>During the Lsos project's free trial.</li>
        </ul>
      </>
    ),
    hash: "key-when",
  };
}
function keyHow() {
  return {
    question: "How do I get an activation key?",
    answer: (
      <>
        Larger companies get an activation key by filling an online formular and
        activate Lsos projects with the command{" "}
        <code className="inline-code">
          $ lsos activate &lt;activation-key&gt;
        </code>
        .
      </>
    ),
    hash: "key-how",
  };
}
function pricing() {
  return {
    question: "I'm a company, how much do I pay?",
    answer: (
      <>
        For small companies and small projects, Lsos projects are free. For
        larger companies, an Lsos project costs between 1$ and 40$ per month.
      </>
    ),
    hash: "pricing",
  };
}
function prod() {
  return {
    question: "How long do fees apply?",
    answer: (
      <>
        Fees apply during development only. If you develop a software for 3
        months and deploy it during 10 years, you pay for 3 months only. If you
        need to write a quick patch at a later point, you can purchase an
        activation key that is valid only for a couple of days.
      </>
    ),
    hash: "prod",
  };
}
function fork() {
  return {
    question: "Can I fork an Lsos project?",
    answer: (
      <>
        Yes, the source code of Lsos projects is MIT licensed. Anyone can fork
        the code, remove the Lsos, and turn the project into a standard
        MIT-licensed project without Lsos.
      </>
    ),
    hash: "fork",
  };
}
function cheat() {
  return {
    question: "Can I fork an Lsos project to circumvent the fee?",
    answer: (
      <>
        From a legal perspective, yes you can. However, we take measures against
        those who we know are circumventing the fee.
      </>
    ),
    hash: "cheat",
  };
}
function contrib() {
  return {
    question: "Can I contribute to an Lsos project?",
    answer: (
      <>
        Yes, anyone can fork and contribute to an Lsos project (just like any
        other MIT licensed project). No activation key is required to
        contribute.
      </>
    ),
    hash: "contrib",
  };
}

function price() {
  return {
    question: "Can I choose the price?",
    answer: (
      <>
        Yes, you can choose:
        <ul>
          <li>Price.</li>
          <li>The size of small companies for which your project is free.</li>
          <li>The size of projects for which your project is free.</li>
          <li>Free trial duration.</li>
        </ul>
        Note that we disallow excessive pricing to ensure{" "}
        <a href="/#accessible">accessibility</a>. For most projects, we
        recommend:
        <ul>
          <li>10$/month.</li>
          <li>Free for companies with less than 10 developers.</li>
          <li>
            Free for Git repositories with less than 3 Git active authors.
          </li>
          <li>31 days of free trial.</li>
        </ul>
      </>
    ),
    hash: "price",
  };
}
function trustMode() {
  return {
    // Sublime Text knowledge base:
    // - https://forum.sublimetext.com/t/sublime-text-unregistered-version/54627/2
    // - https://forum.sublimetext.com/t/sublim-can-i-use-sublim-without-bought-it/49713/2
    // - https://forum.sublimetext.com/t/sustainable-business-model/31251
    question: "What is trust mode?",
    answer: (
      <>
        <p>
          By default, the Lsos library is set to <i>enforce mode</i>: when a
          larger company is missing an activation key, the Lsos library prevents
          the larger company from using your code.
        </p>
        <p>
          With <i>trust mode</i>, the Lsos library never blocks larger companies
          from using your code. Instead, a pesky popup is occasionally shown in
          development reminding them to purchase an activation key.
        </p>
        <p>
          Sublime Text, for example,{" "}
          <a href="https://forum.sublimetext.com/t/sublime-text-unregistered-version/54627/2">
            is using
          </a>{" "}
          such business model which{" "}
          <a href="https://forum.sublimetext.com/t/sustainable-business-model/31251/2">
            has been successful
          </a>{" "}
          for its dev team.
        </p>
      </>
    ),
    hash: "trust-mode",
  };
}
function enforceMode() {
  return {
    question: "How does enforce mode work?",
    answer: (
      <>
        The goal of enforce mode is to increase conversion rate. Let's for
        example imagine following rates:
        <ul>
          <li>Donations: 0.1% (Open Collective / GitHub Sponsors)</li>
          <li>Trust mode: 1%</li>
          <li>Enforce mode: 10%-50%</li>
        </ul>
        <p>
          Even if we do a poor job with the enforce mode and achieve a rate of
          only 10%, the Lsos still increases your conversion rate by two orders
          of magnitude.
        </p>
        <P>
          That said, and if you choose to, we can take measures to strengthen
          enforce mode:
          <ul>
            <li>
              <b className="semibold">
                Closed-source production build pipeline.
              </b>{" "}
              The development pipeline is still open-source to allow
              contributions. If someone wants to fork your project, he'll need
              to recreate your build production pipeline which makes your
              project only 99% open source; it's not perfect but it can be a
              good trade-off.
            </li>
            <li>
              <b className="semibold">Fake anti-Lsos library.</b> A way to cheat
              the Lsos is to write a script that removes the Lsos library code
              from your production build. We take measures against this practice
              (such as inlining the Lsos library, randomizing the structure of
              the inlined code, etc.) and we anonymously publish an anti-Lsos
              library that works enough to outperform competing anti-Lsos
              libraries, while making it not reliable and not trustworthy enough
              to discourage larger companies from using an anti-Lsos library.
            </li>
            <li>
              <b className="semibold">Add license clause to MIT-license.</b> We
              developed a license clause that enforces larger companies to pay
              while preserving open source values. In general, we prefer not
              using copyright law because most developers don't understand how
              copyright works and many are afraid of using unknown licensing.
              That said, for some projects it can make sense to use copyright
              law.
            </li>
          </ul>
        </P>
      </>
    ),
    hash: "enforce-mode",
  };
}
function licensing() {
  return {
    question: "Why not using a new license?",
    answer: (
      <>
        We believe there are more effective ways to enforce larger companies to
        pay. We did develop a license clause to be added to the MIT license but
        we use it seldomly, see{" "}
        <a href="#enforce-mode">How does enforce mode work?</a>.
      </>
    ),
    hash: "licensing",
  };
}
function remove() {
  return {
    question: "Can I remove the Lsos?",
    answer: <>Yes, simply remove the Lsos library from your code.</>,
    hash: "remove",
  };
}
function size() {
  return {
    question: "Is the Lsos library heavy?",
    answer: (
      <>
        No, the <a href="https://github.com/Lsos/lsos-js">Lsos library</a> is
        tiny and has no dependencies (runtime is ~100 LOC and postinstall script
        is ~1k LOC). The verification of the activation key is done offline by
        using asymmetric encryption.
      </>
    ),
    hash: "size",
  };
}
function contradiction() {
  return {
    question: "Doesn't selling contradict the MIT License?",
    answer: (
      <>
        The <a href="https://opensource.org/licenses/MIT">MIT License</a>{" "}
        explicitly allows selling code:
        <pre className="code-block">
          Permission is hereby granted [...] the rights to [...] sell copies of
          the Software.
        </pre>
      </>
    ),
    hash: "contradiction",
  };
}
function cut() {
  return {
    question: "How much does the Lsos take?",
    answer: <>We take between 0% and 3%, depending on the project.</>,
    hash: "cut",
  };
}
function lib() {
  return {
    question: "What exactly does the Lsos library do?",
    answer: (
      <>
        <p>
          The Lsos library verifies that companies have a valid activation key:
          if the key is missing the library logs a warning in the developer
          console, and if the company persists in not getting an activation key
          then the library throws an error that blocks the usage of your code.
        </p>
        <P>
          An activation key is not required if:
          <ol>
            <li>your user's Git repository is public, or</li>
            <li>
              your user's Git repository had only few Git authors (less than 3
              by default) in the last 3 months.
            </li>
          </ol>
          Exempt <code className="inline-code inline-code--same-font">2.</code>{" "}
          means that individuals and small projects don't need any activation
          key; the Lsos doesn't add any friction for them and they can use your
          project just like before. Exempt{" "}
          <code className="inline-code">1.</code> means that anyone can develop
          and contribute to your project without any additional friction, just
          like before.
        </P>
        <p>
          Companies get an activation key by filling a short online formular.
          Small companies and nonprofits get a free activation key while larger
          companies pay to get an activation key.
        </p>

        <Screenshot
          img={libScreenshot}
          marginTop={-10}
          imgHeight={130}
          text={
            "The Lsos library showing a warning that an activation key is required."
          }
        />
        <Screenshot
          img={activationFormScreenshot}
          imgHeight={440}
          text={"Companies get an activation key by filling an online form..."}
        />
        <Screenshot
          img={cliScreenshot}
          imgHeight={170}
          shadow={0.5}
          text={
            <>
              ...and add the activation key with the{" "}
              <code className="inline-code">
                $ lsos activate &lt;activation-key&gt;
              </code>{" "}
              command.
            </>
          }
        />
        {/*
          <p>
            Since the code is MIT licensed, larger companies could circumvent
            the fee by forking the code and remove the Lsos library, but we make
            such practice cumbersome enough to not be worth it and we take
            measures against those who we know are circumventing the fee.
            Open souce dependencies are a critical peice of infrastracture for larger companies and it's not in their interest to Larger and 3. companies are not interested in doing risky things to save a mere 10$/month
          </p>
              */}
        {/*
            ; getting an activation key is a matter of a couple of minutes.
          <p>
            In order to improve usability, only some of your users need an
            activation key; an activation key is only needed if your user's git
            repository:
          </p>
          <ul>
            <li>is private, and</li>
            <li>recently had ≥3 git authors.</li>
          </ul>

          <p>
            For users that don't need an activation key, the Lsos doesn't induce
            any additional friction. In particular, contributions can be made
            without any additional step.
          </p>
          */}
      </>
    ),
    hash: "lib",
  };
}

function Section({ children }: { children: string }) {
  return <h3 className="h3-faq">{children}</h3>;
}

type ScreenshotSpec = {
  img: string;
  imgHeight: number;
  marginTop?: number;
  shadow?: number;
  text: ReactNode;
};
function Screenshot({
  img,
  imgHeight,
  marginTop = 0,
  shadow = 0.12,
  text,
}: ScreenshotSpec) {
  return (
    <Center style={{ marginTop: 70 + marginTop }}>
      <img
        src={img}
        style={{
          maxHeight: imgHeight,
          maxWidth: "100%",
          marginBottom: 30,
          boxShadow: `0 8px 20px rgba(0,0,0,${shadow.toString()})`,
          //border: "1px solid #ccc",
          borderRadius: 6,
        }}
      />
      <div>{text}</div>
    </Center>
  );
}

/*
    {
      question:
        "What's the difference between an Lsos project and an MIT-licensed project?",
      answer: (
        <>
          An Lsos project is an MIT-licensed project that includes the Lsos
          library &mdash; that's it. The means that the source code is open
          source, just like any other MIT-licensed project. The only difference
          is that the Lsos library checks whether companies have a valid
          activation keys.
        </>
      ),
      hash: "diff",
    },
 */
/*

## How can this be non-free yet MIT licenced?

Technically, the only difference between an Lsos project and an MIT-licensed project, is that the code of the Lsos project includes the Lsos library.


## Is this still open source?

Yes.

The OSI definition of open source prescribes the distribution of free copyright licenses,
which is the case of MIT licensed projects, including Lsos Basic projects.

But, more importantly, the Lsos Basic keeps everything:
- Free for hobbyists, small companies, nonprofits, and anyone who cannot afford to pay a fee (i.e. accessible).
- Open and forkable (i.e. collaborative).

We believe accessibility and collaboration to be the two fundamental pillars of what open source is about.

Also note that Lsos Basic projects are free software; the FSF means "free" as in freedom, not "free" as in "free beer".
The FSF envisions a society of freedom, not a society where everything is gratis.




Whether you are compensated for your contributions is left to the maintainers of the project.




To deactivate the need for an activation key in production, make sure that:
- `process.env.NODE_ENV === 'production'`, or
- `window.location.hostname !== 'localhost'`




## How it works

The fee is enforced by the Lsos library:
if a larger company doesn't pay the fee,
the library throws an error that blocks the usage of the code.

*/
