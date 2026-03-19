import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Logo from "../assets/images/logo_light.png"

export default function Footer() {

  

  const { t } = useTranslation()

  return (

 <footer className="relative bg-neutral-950 border-t border-neutral-800 text-neutral-400 overflow-hidden">

  {/* grid background */}

  <div
    className="absolute inset-0 opacity-[0.04]
    bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
    bg-[size:80px_80px]"
  />

  {/* content */}
  <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 items-start">

        {/* Brand */}

        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">

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

        <div className="md:ml-16 text-center md:text-left">

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

       <div className="text-center md:text-left">

          <h4 className="text-white mb-5 text-sm tracking-widest uppercase">
            {t("footer.contact")}
          </h4>

          <div className="text-sm space-y-3">

     <a 
  href="tel:2364574318"
  className="block hover:text-cyan-400 transition"
>
  <span className="mr-2">📞</span>
  236-457-4318
</a>

<a 
  href="mailto:mjblsolutions@gmail.com"
  className="block hover:text-cyan-400 transition"
>
  <span className="text-cyan-400 mr-2">@</span>
  mjblsolutions@gmail.com
</a>

            <p className="text-neutral-500">
              Quebec, Canada
            </p>

          </div>

        </div>

      </div>

      {/* bottom */}

      <div className=" py-6 text-center text-sm text-neutral-500">

        © {new Date().getFullYear()} MJBLSolutions — {t("footer.rights")}

      </div>

    </footer>

  )
}