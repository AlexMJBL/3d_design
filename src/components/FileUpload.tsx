import { useDropzone } from "react-dropzone"
import { useTranslation } from "react-i18next"

type Props = {
  onFileSelect: (file: File) => void
}

export default function FileUpload({ onFileSelect }: Props) {

  const { t } = useTranslation()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "model/stl": [".stl"],
      "model/obj": [".obj"],
      "model/step": [".step", ".stp"],
      "model/3mf": [".3mf"]
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0])
      }
    }
  })

  return (

    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-10 text-center cursor-pointer
        transition
        ${isDragActive
          ? "border-cyan-500 bg-cyan-500/10"
          : "border-neutral-700 hover:border-cyan-500"}
      `}
    >

      <input {...getInputProps()} />

      {/* ICON */}
      <div className="text-4xl mb-3">
        📦
      </div>

      {/* MAIN TEXT */}
      {isDragActive ? (

        <p className="text-cyan-400 font-medium">
          {t("quote.dropFile")}
        </p>

      ) : (

        <p className="text-neutral-300 font-medium">
          {t("quote.dragDrop")}
        </p>

      )}

      {/* SUBTEXT */}
      <p className="text-xs text-neutral-500 mt-2">
        {t("quote.fileFormats")}
      </p>

    </div>

  )
}