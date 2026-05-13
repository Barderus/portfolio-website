const EMAIL_USER = "reis.sev";
const EMAIL_DOMAIN = "gmail.com";

export const obfuscatedEmail = "reis.sev [at] gmail [dot] com";
export const resumeRequestPath = "/resume-request";

export function getEmailAddress() {
  return `${EMAIL_USER}@${EMAIL_DOMAIN}`;
}

export function getEmailHref(subject = "", body = "") {
  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  const query = params.toString();

  return `mailto:${getEmailAddress()}${query ? `?${query}` : ""}`;
}

export function openEmailDraft(options = {}) {
  window.location.href = getEmailHref(options.subject, options.body);
}
