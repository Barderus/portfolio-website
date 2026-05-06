import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems, siteIdentity } from "../content";

function SiteLayout() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="ambient ambient-center" />

      <header className="topbar">
        <NavLink className="brand" to="/">
          <span>{siteIdentity.name}</span>
          <strong>{siteIdentity.role}</strong>
        </NavLink>
        <nav className="topnav">
          {navItems.map((item) => (
            <NavLink
              end={item.path === "/"}
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
}

export default SiteLayout;
