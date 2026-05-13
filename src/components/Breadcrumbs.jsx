import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1;

        return (
          <span className="breadcrumb-item" key={`${item.label}-${index}`}>
            {isCurrent ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
