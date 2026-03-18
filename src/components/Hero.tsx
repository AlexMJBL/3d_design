import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Hero() {

  const { t } = useTranslation()

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-neutral-950 text-neutral-200 overflow-hidden">

      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]
        bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* center line design */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 opacity-40"></div>

      <div className="relative text-center max-w-4xl px-6">

        {/* title */}
        <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white leading-tight">

          {t("hero.title")}

        </h1>

        {/* subtitle */}
        <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">

          {t("hero.subtitle")}

        </p>

        {/* buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <Link
            to="/quote"
            className="px-7 py-3 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-black transition"
          >
            {t("hero.quote")}
          </Link>

          <Link
            to="/models"
            className="px-7 py-3 border border-neutral-700 text-neutral-300 rounded-md hover:border-neutral-400 hover:text-white transition"
          >
            {t("hero.models")}
          </Link>

        </div>

      </div>

    </section>
  )
}