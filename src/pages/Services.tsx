import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-neutral-950 text-neutral-200 overflow-hidden">
      <PageTitle titleKey="title.about" />

      {/* Cyan glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* vertical design line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          {t("about.title")}
        </h1>

        {/* Cyan line under title */}
        <div className="w-24 h-[2px] bg-cyan-500 mb-10"></div>

        {/* Intro */}
        <p className="mb-4 text-lg text-neutral-300 max-w-3xl">
          {t("about.intro")}
        </p>

        <p className="mb-4 text-lg text-neutral-300 max-w-3xl">
          {t("about.intro2")}
        </p>

        <p className="mb-16 text-lg text-neutral-300 max-w-3xl">
          {t("about.local")}
        </p>

        {/* Services */}
        <h2 className="text-2xl font-semibold mb-6">
          {t("about.servicesTitle")}
        </h2>

        <ul className="mb-16 space-y-2 text-neutral-400">
          <li>{t("about.services.design")}</li>
          <li>{t("about.services.printing")}</li>
          <li>{t("about.services.prototype")}</li>
          <li>{t("about.services.custom")}</li>
          <li>{t("about.services.repair")}</li>
          <li>{t("about.services.automation")}</li>
          <li>{t("about.services.programming")}</li>
        </ul>

        {/* Materials */}
        <h2 className="text-2xl font-semibold mb-6">
          {t("about.materialsTitle")}
        </h2>

        <ul className="mb-16 space-y-2 text-neutral-400">
          <li>{t("about.materials.pla")}</li>
          <li>{t("about.materials.petg")}</li>
          <li>{t("about.materials.abs")}</li>
          <li>{t("about.materials.tpu")}</li>
          <li>{t("about.materials.nylon")}</li>
        </ul>

        {/* Why choose us */}
        <h2 className="text-2xl font-semibold mb-6">
          {t("about.whyTitle")}
        </h2>

        <ul className="mb-16 space-y-2 text-neutral-400">
          <li>{t("about.why.custom")}</li>
          <li>{t("about.why.solutions")}</li>
          <li>{t("about.why.fast")}</li>
          <li>{t("about.why.price")}</li>
          <li>{t("about.why.local")}</li>
          <li>{t("about.why.allinone")}</li>
          <li>{t("about.why.support")}</li>
        </ul>

        {/* CTA */}
        <div className="mt-20">
          <p className="mb-6 text-lg text-neutral-300 max-w-2xl">
            {t("about.cta")}
          </p>

          <Link
            to="/quote"
            className="inline-block px-8 py-3 bg-black text-cyan-500 border border-cyan-500 rounded-sm
            hover:bg-cyan-500 hover:text-black transition duration-300"
          >
            {t("about.button")}
          </Link>
        </div>

      </div>
    </div>
  );
}