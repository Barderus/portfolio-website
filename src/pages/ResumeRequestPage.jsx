import { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { getEmailAddress } from "../contact";

const initialForm = {
  name: "",
  email: "",
  company: "",
  reason: "",
};

function ResumeRequestPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("company", form.company);
    payload.append("reason", form.reason);
    payload.append("_subject", "Resume access request");
    payload.append("_template", "table");
    payload.append("_replyto", form.email);

    if (typeof window !== "undefined") {
      payload.append("_url", window.location.href);
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${getEmailAddress()}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send the request right now. Please try again in a moment.");
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
        Fill out the form below and I&apos;ll receive your request directly by email.
      </p>

      <div className="resume-request-panel">
        <form className="resume-request-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Name</span>
            <input name="name" type="text" value={form.name} onChange={handleChange} required />
          </label>

          <label className="form-field">
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          <label className="form-field">
            <span>Company or organization</span>
            <input name="company" type="text" value={form.company} onChange={handleChange} />
          </label>

          <label className="form-field">
            <span>Reason for access</span>
            <textarea name="reason" rows="6" value={form.reason} onChange={handleChange} required />
          </label>

          {status === "success" ? (
            <p className="form-status form-status-success">
              Your request was sent successfully.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="form-status form-status-error">{errorMessage}</p>
          ) : null}

          <div className="button-row">
            <button className="button button-primary" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Request"}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export default ResumeRequestPage;
