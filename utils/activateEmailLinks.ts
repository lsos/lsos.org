import { assert } from "@brillout/assert";

export { activateEmailLinks };

const DATA_RECIPIENT = "data-recipient";
const DATA_DOMAIN = "data-domain";
const DATA_SUBJECT = "data-subject";
const DATA_BODY = "data-body";
const DATA_JSLINK = "data-jslink";
const DATA_ALREADYENCODED = "data-alreadyencoded";

function activateEmailLinks({
  recipient_default = "hello",
  domain_name = window.location.host,
} = {}) {
  assert(!domain_name.includes(":"));
  assert(domain_name.split(".").length === 2);

  document.querySelectorAll(".contact-address").forEach(process_email);

  return;

  function process_email(el: Element) {
    const recipient = data(DATA_RECIPIENT) || recipient_default;
    const domain = data(DATA_DOMAIN) || domain_name;

    const email = compute_email(recipient, domain);

    const href = compute_href({
      email,
      subject: data(DATA_SUBJECT),
      body: data(DATA_BODY),
      alreadyEncoded: data(DATA_ALREADYENCODED) ? true : false,
    });

    if (!el.textContent) {
      el.textContent = email;
    }

    if (el.tagName === "A") {
      const anchorEl: HTMLAnchorElement = el as HTMLAnchorElement;
      if (data(DATA_JSLINK)) {
        anchorEl.onclick = () => {
          const openInNewTab = true;
          if (openInNewTab) {
            window.open(href, "_blank");
          } else {
            window.open(href);
          }
        };
        anchorEl.style.cursor = "pointer";
      } else {
        anchorEl.setAttribute("href", href);
      }
      anchorEl.setAttribute("target", "_blank");
    }

    return;

    function data(dataAttribute: string): string | null {
      return el.getAttribute(dataAttribute);
    }
  }
}

function compute_email(recipient: string, domain: string) {
  assert(recipient);
  const at = String.fromCharCode(2 * 32);
  assert(at === "@");
  return recipient + at + domain;
}

function compute_href({
  email,
  subject,
  body,
  alreadyEncoded,
}: {
  email: string;
  subject: string | null;
  body: string | null;
  alreadyEncoded: boolean;
}) {
  let href = "mailto:" + email;

  if (!subject && !body) {
    return href;
  }

  href += "?";

  if (subject) {
    href += "subject=" + encode(subject, alreadyEncoded);
    if (body) {
      href += "&";
    }
  }

  if (body) {
    href += "body=" + encode(body, alreadyEncoded);
  }

  return href;
}

function encode(str: string, alreadyEncoded: boolean) {
  return alreadyEncoded ? str : encodeURIComponent(str);
}
