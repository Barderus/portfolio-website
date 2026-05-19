import { Link } from "react-router-dom";
import { openEmailDraft } from "../contact";

function ActionLink({ item, className, emailSubject = "Portfolio inquiry" }) {
  if (item.to) {
    return (
      <Link className={className} to={item.to}>
        {item.label}
      </Link>
    );
  }

  if (item.action === "email") {
    return (
      <button
        className={className}
        type="button"
        onClick={() => openEmailDraft({ subject: emailSubject })}
      >
        {item.label}
      </button>
    );
  }

  if (!item.href) {
    return (
      <span className={`${className} button-disabled`} aria-disabled="true">
        {item.label}
      </span>
    );
  }

  return (
    <a className={className} href={item.href} target="_blank" rel="noreferrer">
      {item.label}
    </a>
  );
}

export default ActionLink;
