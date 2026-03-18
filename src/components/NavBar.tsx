import { Link, NavLink } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg tracking-[0.25em] font-light text-neutral-100"
        >
          3D DESIGN
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-10 text-sm tracking-wide">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative transition hover:text-white ${
                isActive ? "text-white" : "text-neutral-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/models"
            className={({ isActive }) =>
              `relative transition hover:text-white ${
                isActive ? "text-white" : "text-neutral-400"
              }`
            }
          >
            Models
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative transition hover:text-white ${
                isActive ? "text-white" : "text-neutral-400"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative transition hover:text-white ${
                isActive ? "text-white" : "text-neutral-400"
              }`
            }
          >
            Contact
          </NavLink>

        </div>


         <LanguageSwitch/>
        

      </div>
    </nav>
  );
}