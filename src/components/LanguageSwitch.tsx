import { useTranslation } from "react-i18next"

export default function LanguageSwitch() {

  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2 text-sm text-neutral-400">

      <button
        className="hover:text-white transition"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>

      <span>|</span>

      <button
        className="hover:text-white transition"
        onClick={() => i18n.changeLanguage("fr")}
      >
        FR
      </button>

    </div>
  )
}