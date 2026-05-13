import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { getEmailAddress, getEmailHref, obfuscatedEmail } from "../contact";

const initialForm = {
  name: "",
  email: "",
  company: "",
  reason: "",
};

function ResumeRequestPage() {
  const [form, setForm] = useState(initialForm);
  const [copied, setCopied] = useState(false);

  const mailtoHref = useMemo(() => {
    const lines = [
      `Name: ${form.name || "[Your name]"}`,
      `Email: ${form.email || "[Your email]"}`,
      `Company: ${form.company || "[Company or organization]"}`,
      "",
      "Reason for access:",
      form.reason || "[What role or opportunity are you considering?]",
    ];

    return getEmailHref("Resume access request", lines.join("\n"));
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getEmailAddress());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.section
      className="section page-detail"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resume Request" }]} />

      <div className="section-heading section-heading-wide">
        <p>Resume access</p>
        <h2>Request resume access</h2>
      </div>

      <p className="page-intro">
        Fill out a quick request and your email app will open a prefilled message.
        If you prefer, you can also copy the address and send the request manually.
      </p>

      <div className="resume-request-panel">
        <form className="resume-request-form">
          <label className="form-field">
            <span>Name</span>
            <input name="name" type="text" value={form.name} onChange={handleChange} />
          </label>

          <label className="form-field">
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </label>

          <label className="form-field">
            <span>Company or organization</span>
            <input name="company" type="text" value={form.company} onChange={handleChange} />
          </label>

          <label className="form-field">
            <span>Reason for access</span>
            <textarea name="reason" rows="6" value={form.reason} onChange={handleChange} />
          </label>

          <div className="button-row">
            <a className="button button-primary" href={mailtoHref}>
              Send Request
            </a>
            <button className="button button-secondary" type="button" onClick={handleCopy}>
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </form>

        <aside className="resume-request-aside">
          <p className="resume-request-label">Contact email</p>
          <strong>{obfuscatedEmail}</strong>
          <span>
            Include your role, organization, and what kind of work you want to review.
          </span>
        </aside>
      </div>
    </motion.section>
  );
}

export default ResumeRequestPage;
