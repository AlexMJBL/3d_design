import { useTranslation } from "react-i18next"
import Gear from "../assets/images/gear_print.png"
import PhoneStand from "../assets/images/phone_stand.png"
import Vase from "../assets/images/vase.png"
import EngineerPart from "../assets/images/engineer_part.png"
import { Link } from "react-router-dom"

export default function FeaturedPrints() {

  const { t } = useTranslation()

  const prints = [
    {
      name: "Gear Assembly",
      img: Gear
    },
    {
      name: "Phone Stand",
      img: PhoneStand
    },
    {
      name: "Mechanical Part",
      img: EngineerPart
    },
    {
      name: "Decorative Vase",
      img: Vase
    }
  ]

  return (

    <section className="bg-neutral-950 text-neutral-200 py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* title */}

        <h2 className="text-3xl md:text-4xl text-center text-white font-light tracking-wide">
          {t("featured.title")}
        </h2>

        {/* grid */}

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {prints.map((print, i) => (

            <div
              key={i}
              className="
              group
              overflow-hidden
              rounded-xl
              border border-neutral-800
              bg-neutral-900
              hover:border-cyan-500
              transition
              "
            >

              {/* image */}

              <div className="overflow-hidden">

                <img
                  src={print.img}
                  alt={print.name}
                  loading="lazy"
                  className="
                  w-full
                  h-[220px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110

                  "
                />

              </div>

              {/* name */}

              <div className="p-4">

                <h3 className="text-sm text-neutral-300 tracking-wide">
                  {print.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* button */}

        <div className="mt-14 text-center">

             <Link
              to="/models"
            className="
            px-8 py-3
            border border-neutral-700
            rounded-md
            text-neutral-300
            hover:border-cyan-500
            hover:text-white
            transition
            "
          >
            {t("featured.view")}
          </Link>

        </div>

      </div>

    </section>

  )
}