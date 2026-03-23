import { useEffect } from "react"
import { useTranslation } from "react-i18next"

type Props = {
  titleKey: string
}
export default function PageTitle({ titleKey } : Props) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t(titleKey)
  }, [titleKey, i18n.language])

  return null
}