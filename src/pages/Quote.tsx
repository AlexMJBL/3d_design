import { useNavigate } from "react-router-dom"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import FileUpload from "../components/FileUpload"

export default function Quote() {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const [file, setFile] = useState<File | null>(null)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    function validate(form: HTMLFormElement) {

        const newErrors: { [key: string]: string } = {}

        const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim()
        const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
        const quantity = (form.elements.namedItem("quantity") as HTMLInputElement).value
        const color = (form.elements.namedItem("color") as HTMLSelectElement).value
        const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value.trim()
        const material = (form.elements.namedItem("material") as HTMLSelectElement).value


        if (!name) {
            newErrors.name = t("validation.nameRequired")
        }

        if (!email) {
            newErrors.email = t("validation.emailRequired")
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = t("validation.emailInvalid")
        }

        if (!quantity) {
            newErrors.quantity = t("validation.quantityRequired")
        }
        else if (Number(quantity) <= 0) {
            newErrors.quantity = t("validation.quantityInvalid")
        }

        if (!color) {
            newErrors.color = t("validation.colorRequired")
        }

        if (!description) {
            newErrors.description = t("validation.descriptionRequired")
        }
        else if (description.length < 10) {
            newErrors.description = t("validation.descriptionTooShort")
        }
        else if (description.length > 500) {
            newErrors.description = t("validation.descriptionTooLong")
        }

        if (file) {

            if (file.size > 50 * 1024 * 1024) {
                newErrors.file = t("validation.fileTooLarge")
            }

            const extension = file.name.split(".").pop()?.toLowerCase()
            const allowed = ["stl", "3mf", "obj", "step", "stp"]

            if (extension && !allowed.includes(extension)) {
                newErrors.file = t("validation.fileInvalidType")
            }

        }

        if (!material) {
            newErrors.material = t("validation.materialRequired")
        }

        return newErrors
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        const form = e.currentTarget

        const validationErrors = validate(form)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})

        try {

            await emailjs.sendForm(
                "service_h8mmzxw",
                "template_tn146wg",
                form,
                "PDUBMOTXiCgvdsEkb"
            )

            form.reset()
            setFile(null)

            navigate("/success")

        } catch (error) {

            console.error(error)
            alert(t("quote.error"))

        }
    }

    return (

        <section className="bg-neutral-950 text-neutral-200 py-24 px-6">

            <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-xl p-10 shadow-xl">

                <h1 className="text-4xl text-white mb-4">
                    {t("quote.title")}
                </h1>

                <p className="text-neutral-400 mb-10 max-w-xl">
                    {t("quote.subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* NAME */}
                    <div>

                        <label htmlFor="name" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.name")}
                        </label>

                        <input
                            id="name"
                            name="name"
                            placeholder={t("quote.name")}
                            className={`w-full p-3 bg-neutral-900 border rounded 
                            focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                            ${errors.name ? "border-red-500" : "border-neutral-800"}`}
                        />

                        {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}

                    </div>

                    {/* EMAIL */}
                    <div>

                        <label htmlFor="email" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.email")}
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("quote.email")}
                            className={`w-full p-3 bg-neutral-900 border rounded 
                            focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                            ${errors.email ? "border-red-500" : "border-neutral-800"}`}
                        />

                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}

                    </div>

                    <h2 className="text-sm text-neutral-500 uppercase tracking-wider mt-8">
                        {t("quote.projectDetails")}
                    </h2>

                    {/* SERVICE */}
                    <div>

                        <label htmlFor="service" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.serviceLabel")}
                        </label>

                        <select
                            id="service"
                            name="service"
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded focus:border-cyan-500"
                        >
                            <option>{t("quote.service.print")}</option>
                            <option>{t("quote.service.design")}</option>
                            <option>{t("quote.service.both")}</option>
                        </select>

                    </div>

                    {/* MATERIAL */}
                    <div>

                        <label
                            htmlFor="material"
                            className="text-sm text-neutral-400 block mb-1"
                        >
                            {t("quote.materialLabel")}
                        </label>

                        <select
                            id="material"
                            name="material"
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded focus:border-cyan-500"
                        >

                            <option value="" disabled selected>
                                {t("quote.selectMaterial")}
                            </option>

                            <option>PLA</option>
                            <option>PETG</option>
                            <option>TPU</option>
                            <option>ABS</option>
                            <option>ASA</option>
                            <option>Nylon</option>

                            <option>{t("quote.material.unknown")}</option>

                        </select>
                        {errors.material && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.material}
                            </p>
                        )}

                    </div>

                    {/* COLOR */}
                    <div>

                        <label htmlFor="color" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.color")}
                        </label>

                        <select
                            id="color"
                            name="color"
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded focus:border-cyan-500"
                        >

                            <option value="" disabled selected>
                                {t("quote.selectColor")}
                            </option>

                            <option>{t("colors.black")}</option>
                            <option>{t("colors.grey")}</option>
                            <option>{t("colors.white")}</option>
                            <option>{t("colors.beige")}</option>
                            <option>{t("colors.brown")}</option>
                            <option>{t("colors.purple")}</option>
                            <option>{t("colors.teal")}</option>
                            <option>{t("colors.yellow")}</option>
                            <option>{t("colors.pink")}</option>
                            <option>{t("colors.blue")}</option>
                            <option>{t("colors.red")}</option>
                            <option>{t("colors.orange")}</option>
                            <option>{t("colors.green")}</option>
                            <option>{t("colors.multicolor")}</option>
                            <option>{t("colors.transparent")}</option>
                            <option>{t("colors.other")}</option>

                        </select>

                        {errors.color && (
                            <p className="text-red-400 text-sm mt-1">{errors.color}</p>
                        )}

                    </div>

                    {/* FILE UPLOAD */}
                    <div>

                        <label className="text-sm text-neutral-400 block mb-2">
                            {t("quote.upload")}
                        </label>
                        <input type="hidden" name="file" value={file?.name || ""} />
                        <FileUpload onFileSelect={setFile} />

                        {file && (
                            <p className="text-green-400 text-sm mt-2">{file.name}</p>
                        )}

                        {errors.file && (
                            <p className="text-red-400 text-sm mt-1">{errors.file}</p>
                        )}

                    </div>

                    {/* QUANTITY */}
                    <div>

                        <label htmlFor="quantity" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.quantity")}
                        </label>

                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            placeholder={t("quote.quantity")}
                            className={`w-full p-3 bg-neutral-900 border rounded 
                            focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                            ${errors.quantity ? "border-red-500" : "border-neutral-800"}`}
                        />

                        {errors.quantity && (
                            <p className="text-red-400 text-sm mt-1">{errors.quantity}</p>
                        )}

                    </div>

                    {/* DIMENSIONS */}
                    <div>

                        <label htmlFor="dimensions" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.dimensionsLabel")}
                        </label>

                        <input
                            id="dimensions"
                            name="dimensions"
                            placeholder={t("quote.dimensions")}
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded focus:border-cyan-500"
                        />

                    </div>

                    {/* DESCRIPTION */}
                    <div>

                        <label htmlFor="description" className="text-sm text-neutral-400 block mb-1">
                            {t("quote.description")}
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            placeholder={t("quote.description")}
                            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded focus:border-cyan-500"
                        />

                        {errors.description && (
                            <p className="text-red-400 text-sm mt-1">{errors.description}</p>
                        )}

                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-3 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400 transition"
                    >
                        {t("quote.button")}
                    </button>

                </form>

                <ul className="text-sm text-neutral-400 mt-10 space-y-2">
                    <li>✔ {t("quote.trust.fastQuote")}</li>
                    <li>✔ {t("quote.trust.secureUpload")}</li>
                    <li>✔ {t("quote.trust.professional")}</li>
                </ul>

            </div>

        </section>

    )
}