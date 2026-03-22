import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

export default function NotFound() {

  const { t } = useTranslation();

  return (
    <div className="relative flex items-center justify-center h-screen bg-neutral-950 text-neutral-200 overflow-hidden">
      <PageTitle titleKey="title.notFound" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* vertical design line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 opacity-40"></div>

      <div className="relative text-center max-w-xl px-6">

        <h1 className="text-[140px] font-thin tracking-widest text-neutral-100">
          404
        </h1>

        <div className="w-24 h-[1px] bg-neutral-700 mx-auto my-6"></div>

        <h2 className="text-xl text-neutral-300">
          {t("notfound.pageNotFound")}
        </h2>

        <p className="text-neutral-400 text-lg tracking-wide mt-2">
          {t("notfound.description")}
        </p>

        <Link
          to="/"
          className="inline-block mt-10 px-7 py-3 border border-neutral-700 rounded-sm
          hover:border-neutral-400 hover:text-white transition duration-300"
        >
          {t("notfound.home")}
        </Link>

      </div>
    </div>
  );
}