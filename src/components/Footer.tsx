import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Logo from "../assets/images/logo_light.png"

export default function Footer() {

  const { t } = useTranslation()

  return (

    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 items-start">

        {/* Brand */}

        <div className="flex flex-col items-start gap-4">

<p className="text-white mb-5 text-sm tracking-widest uppercase">
            3D Printing • Design • Prototyping
          </p>
          <img 
            src={Logo} 
            alt="MJBLSolutions logo"
            className="w-48 md:w-56"
          />

          

        </div>

        {/* Navigation */}

        <div>

          <h4 className="text-white mb-5 text-sm tracking-widest uppercase">
            {t("footer.navigation")}
          </h4>

          <div className="flex flex-col gap-3 text-sm">

            <Link to="/" className="hover:text-cyan-400 transition">
              {t("nav.home")}
            </Link>

            <Link to="/services" className="hover:text-cyan-400 transition">
              {t("nav.services")}
            </Link>

            <Link to="/models" className="hover:text-cyan-400 transition">
              {t("nav.models")}
            </Link>

            <Link to="/contact" className="hover:text-cyan-400 transition">
              {t("nav.contact")}
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h4 className="text-white mb-5 text-sm tracking-widest uppercase">
            {t("footer.contact")}
          </h4>

          <div className="text-sm space-y-3">

            <p>
              <span className="mr-2">📞</span>
              236-457-4318
            </p>

            <p>
              <span className="text-cyan-400 mr-2">@</span>
              mjblsolutions@gmail.com
            </p>

            <p className="text-neutral-500">
              Quebec, Canada
            </p>

          </div>

        </div>

      </div>

      {/* bottom */}

      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">

        © {new Date().getFullYear()} MJBLSolutions — {t("footer.rights")}

      </div>

    </footer>

  )
}