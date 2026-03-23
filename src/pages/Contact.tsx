import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import emailjs from "@emailjs/browser"
import PageTitle from "../components/PageTitle"

export default function Contact() {

  const { t } = useTranslation()
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        "service_h8mmzxw",
        "template_tt710tz",
        form,
        "PDUBMOTXiCgvdsEkb"
      )
      navigate("/success")
    } catch (error) {
      console.error("Email error:", error)
      alert("Erreur lors de l'envoi du message.")
    }
  }

  return (
    <section className="relative bg-neutral-950 text-neutral-200 py-24 px-6 overflow-hidden">
      <PageTitle titleKey="title.contact" />

      {/* Cyan glow */}
      <div className="absolute right-[-200px] top-1/3 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-[140px] rounded-full"></div>

      {/* Vertical design line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 opacity-40"></div>

      <div className="relative max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">
            {t("contact.title")}
          </h1>

          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="text-sm text-neutral-400">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-800 rounded-md 
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-800 rounded-md 
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-800 rounded-md 
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-black text-cyan-400 border border-cyan-500 rounded-md
              hover:bg-cyan-500 hover:text-black transition duration-300"
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