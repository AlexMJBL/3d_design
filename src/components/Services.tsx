import { useTranslation } from "react-i18next"

export default function Services() {

  const { t } = useTranslation()

  const services = [
    {
      title: t("services.print.title"),
      desc: t("services.print.desc"),
      icon: "🖨️"
    },
    {
      title: t("services.design.title"),
      desc: t("services.design.desc"),
      icon: "📐"
    },
    {
      title: t("services.proto.title"),
      desc: t("services.proto.desc"),
      icon: "⚙️"
    }
  ]

  return (

    <section className="bg-neutral-950 text-neutral-200 py-14 px-6 pb-30">

      <div className="max-w-7xl mx-auto">

        {/* title */}

        <h2 className="text-3xl md:text-4xl text-center text-white font-light tracking-wide">
          {t("services.title")}
        </h2>

        {/* grid */}

        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {services.map((service, i) => (

            <div
              key={i}
              className="
              group
              border border-neutral-800
              rounded-xl
              p-8
              bg-neutral-900/40
              backdrop-blur
              transition
              hover:border-cyan-500
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            >

              {/* icon */}

              <div className="text-4xl mb-6">
                {service.icon}
              </div>

              {/* title */}

              <h3 className="text-xl text-white tracking-wide">
                {service.title}
              </h3>

              {/* description */}

              <p className="text-neutral-400 mt-3">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}