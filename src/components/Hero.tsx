import Gear from "../assets/images/gear.png"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Hero() {

  const { t } = useTranslation()

  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-950 text-neutral-200 overflow-hidden pt-10">

      {/* grid background */}

      <div
        className="absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* glow */}

      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}

        <div className="text-center md:text-left">

          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-white leading-tight">
            {t("hero.title")}
          </h1>

          <p className="mt-6 text-neutral-400 text-lg max-w-xl mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-6 flex-wrap">

            <Link
              to="/quote"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-black transition"
            >
              {t("hero.quote")}
            </Link>

            <Link
              to="/models"
              className="px-8 py-3 border border-neutral-700 text-neutral-300 rounded-md hover:border-neutral-400 hover:text-white transition"
            >
              {t("hero.models")}
            </Link>

          </div>

        </div>

        {/* GEAR */}

        <div className="flex justify-center md:justify-end">

          <img
            src={Gear}
            alt="3D object"
            className="float-object w-[220px] md:w-[320px] opacity-90"
          />

        </div>

      </div>

    </section>
  )
}