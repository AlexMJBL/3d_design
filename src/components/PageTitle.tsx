import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function PageTitle({ titleKey }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t(titleKey)
  }, [titleKey, i18n.language])

  return null
}