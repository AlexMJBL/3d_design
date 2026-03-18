import { useTranslation } from "react-i18next"

export default function Contact() {

  const { t } = useTranslation()

  return (

    <section className="relative bg-neutral-950 text-neutral-200 py-24 px-6 overflow-hidden">

      {/* grid background */}

      <div
        className="absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">
            {t("contact.title")}
          </h1>

          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>

        </div>

        {/* grid */}

        <div className="grid md:grid-cols-2 gap-14">

          {/* FORM */}

          <form
            name="contact"
            method="POST"
            netlify
            className="space-y-6"
          >

            {/* Netlify hidden fields */}

            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* name */}

            <div>
              <label className="text-sm text-neutral-400">
                {t("contact.name")}
              </label>

              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-800 rounded-md focus:border-cyan-500 outline-none"
              />
            </div>

            {/* email */}

            <div>
              <label className="text-sm text-neutral-400">
                {t("contact.email")}
              </label>

              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-800 rounded-md focus:border-cyan-500 outline-none"
              />
            </div>

            {/* message */}

            <div>
              <label className="text-sm text-neutral-400">
                {t("contact.message")}
              </label>

              <textarea
                name="message"
                rows={5}
                required
                className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-800 rounded-md focus:border-cyan-500 outline-none"
              />
            </div>

            {/* button */}

            <button
              type="submit"
              className="
              px-8 py-3
              border border-cyan-500
              text-cyan-400
              rounded-md
              hover:bg-cyan-500
              hover:text-black
              transition
              "
            >
              {t("contact.send")}
            </button>

          </form>

          {/* CONTACT INFO */}

          <div className="space-y-6">

            <h3 className="text-xl text-white tracking-wide">
              {t("contact.info")}
            </h3>

            <p className="text-neutral-400">
              {t("contact.description")}
            </p>

            <div className="space-y-4 text-neutral-300">

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

      </div>

    </section>
  )
}