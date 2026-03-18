import { Link, NavLink } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";
import Logo from "../assets/images/logo_light.png";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation()


  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* LEFT - Hamburger */}
        <button
          className="md:hidden text-neutral-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>


        {/* CENTER - Logo */}
        <div className="flex items-center gap-4">

          <img
            src={Logo}
            alt="MJBLSolutions"
            className="h-14 w-auto"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-neutral-100 text-sm tracking-widest">
              {t("nav.print")}
            </span>
            <span className="text-neutral-400 text-xs tracking-widest">
              {t("nav.conception")}
            </span>
          </div>

        </div>


        {/* CENTER NAV - desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active text-white" : "text-neutral-400 hover:text-white"}`
            }
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/Models"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active text-white" : "text-neutral-400 hover:text-white"}`
            }
          >
            {t("nav.models")}
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active text-white" : "text-neutral-400 hover:text-white"}`
            }
          >
            {t("nav.about")}
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active text-white" : "text-neutral-400 hover:text-white"}`
            }
          >
            {t("nav.contact")}
          </NavLink>

        </div>


        {/* RIGHT - Language + Quote */}
        <div className="flex items-center gap-6">

          <LanguageSwitch />

          <Link
            to="/quote"
            className="hidden md:inline px-5 py-2 text-sm border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-black transition"
          >
            {t("nav.quote")}
          </Link>

        </div>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 px-8 pb-6 pt-4 flex flex-col gap-6 text-neutral-300">

          <NavLink to="/" className="hover:text-white">{t("nav.home")}</NavLink>
          <NavLink to="/" className="hover:text-white">{t("nav.models")}</NavLink>
          <NavLink to="/" className="hover:text-white">{t("nav.about")}</NavLink>
          <NavLink to="/" className="hover:text-white">{t("nav.contact")}</NavLink>

          <Link
            to="/quote"
            className="px-5 py-2 text-sm border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-black transition w-fit"
          >
            {t("nav.quote")}
          </Link>

        </div>
      )}

    </nav>
  );
}