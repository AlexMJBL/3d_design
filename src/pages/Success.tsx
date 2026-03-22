import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle"

export default function Success() {

  return (

    <section className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-200 px-6">
      <PageTitle titleKey="title.success" />

      <div className="text-center space-y-6">

        <h1 className="text-4xl text-white font-light">
          Message envoyé ✔
        </h1>

        <p className="text-neutral-400">
          Merci pour votre message. Nous vous répondrons bientôt.
        </p>

        <Link
          to="/"
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
          Retour à l'accueil
        </Link>

      </div>

    </section>
  )
}