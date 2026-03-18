import { useTranslation } from "react-i18next"

export default function LanguageSwitch() {

  const { i18n } = useTranslation()

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  return (
    <div className="flex gap-2 text-sm">

      <button
        onClick={() => changeLang("en")}
        className={`transition ${
          i18n.language.startsWith("en")
            ? "text-white"
            : "text-neutral-500 hover:text-white"
        }`}
      >
        EN
      </button>

      <span className="text-neutral-600">|</span>

      <button
        onClick={() => changeLang("fr")}
        className={`transition ${
          i18n.language.startsWith("fr")
            ? "text-white"
            : "text-neutral-500 hover:text-white"
        }`}
      >
        FR
      </button>

    </div>
  )
}