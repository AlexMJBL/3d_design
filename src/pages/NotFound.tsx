import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="relative flex items-center justify-center h-screen bg-neutral-950 text-neutral-200 overflow-hidden">
      <PageTitle titleKey="title.notFound" />

      {/* Cyan glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]
        bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* vertical design line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 opacity-40"></div>

      <div className="relative text-center max-w-xl px-6">

        <h1 className="text-[140px] font-thin tracking-widest text-neutral-100">
          404
        </h1>

        {/* Cyan line */}
        <div className="w-24 h-[2px] bg-cyan-500 mx-auto my-6"></div>

        <h2 className="text-xl text-neutral-300">
          {t("notfound.pageNotFound")}
        </h2>

        <p className="text-neutral-400 text-lg tracking-wide mt-2">
          {t("notfound.description")}
        </p>

        <Link
          to="/"
          className="inline-block mt-10 px-7 py-3 bg-black text-cyan-500 border border-cyan-500 rounded-sm
          hover:bg-cyan-500 hover:text-black transition duration-300"
        >
          {t("notfound.home")}
        </Link>

      </div>
    </div>
  );
}