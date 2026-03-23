import PageTitle from "../components/PageTitle"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
        <PageTitle titleKey="title.services" />
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">
        {t("about.title")}
      </h1>

      {/* Intro */}
      <p className="mb-4 text-lg">
        {t("about.intro")}
      </p>

      <p className="mb-4 text-lg">
        {t("about.intro2")}
      </p>

      <p className="mb-12 text-lg">
        {t("about.local")}
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold mb-4">
        {t("about.servicesTitle")}
      </h2>

      <ul className="mb-12 space-y-2">
        <li>{t("about.services.design")}</li>
        <li>{t("about.services.printing")}</li>
        <li>{t("about.services.prototype")}</li>
        <li>{t("about.services.custom")}</li>
        <li>{t("about.services.repair")}</li>
        <li>{t("about.services.automation")}</li>
        <li>{t("about.services.programming")}</li>
      </ul>

      {/* Materials */}
      <h2 className="text-2xl font-semibold mb-4">
        {t("about.materialsTitle")}
      </h2>

      <ul className="mb-12 space-y-2">
        <li>{t("about.materials.pla")}</li>
        <li>{t("about.materials.petg")}</li>
        <li>{t("about.materials.abs")}</li>
        <li>{t("about.materials.tpu")}</li>
          <li>{t("about.materials.nylon")}</li>
      </ul>

      {/* Why choose us */}
      <h2 className="text-2xl font-semibold mb-4">
        {t("about.whyTitle")}
      </h2>

      <ul className="mb-12 space-y-2">
        <li>{t("about.why.custom")}</li>
        <li>{t("about.why.solutions")}</li>
        <li>{t("about.why.fast")}</li>
        <li>{t("about.why.price")}</li>
        <li>{t("about.why.local")}</li>
        <li>{t("about.why.allinone")}</li>
        <li>{t("about.why.support")}</li>
      </ul>

      {/* CTA */}
      <p className="mb-6 text-lg">
        {t("about.cta")}
      </p>

      <Link
        to="/quote"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {t("about.button")}
      </Link>
    </div>
  );
}