import { useState, useEffect, useRef } from "react"
import PageTitle from "../components/PageTitle"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

type Model = {
    name: string
    material: string
    description: string
    images: string[]
}

type Category = {
    slug: string
    name: string
    models: Model[]
}

export default function Models() {
    const { t } = useTranslation()
    const [selectedModel, setSelectedModel] = useState<Model | null>(null)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [categoryOverflow, setCategoryOverflow] = useState<boolean[]>([])
    const sliderRefs = useRef<(HTMLDivElement | null)[]>([])

    const scrollCategory = (index: number, direction: "left" | "right") => {
        const element = sliderRefs.current[index]
        if (!element) return

        const scrollAmount = element.clientWidth * 0.8
        const target = direction === "left" ? element.scrollLeft - scrollAmount : element.scrollLeft + scrollAmount

        element.scrollTo({ left: target, behavior: "smooth" })
    }

    const imageModules = import.meta.glob("../assets/images/Print_photo/**/*.{jpg,jpeg,png}", {
        eager: true,
        as: "url"
    }) as Record<string, string>

    const categories = Object.entries(imageModules).reduce((acc, [path, url]) => {
        const parts = path.split("/")
        const folderName = parts[parts.length - 2]
        const fileName = parts[parts.length - 1]

        const slug = folderName
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")

        let category = acc.find((item) => item.slug === slug)
        if (!category) {
            const translatedLabel = t(`models.categories.${slug}`)
            category = {
                slug,
                name: translatedLabel !== `models.categories.${slug}` ? translatedLabel : folderName,
                models: []
            }
            acc.push(category)
        }

        const baseName = fileName.replace(/\.(jpg|jpeg|png)$/i, "")
        const normalizedBase = baseName.replace(/(?:[_-]\d+)+$/, "")
        let modelName = normalizedBase.replace(/[-_]/g, " ").trim()

        if (/black\s+white\s+pot/i.test(modelName)) {
            modelName = "Black and White Pot"
        } else if (/monstera\s+lid/i.test(modelName)) {
            modelName = "Monstera Lid"
        } else if (/honeycomb\s+lid/i.test(modelName)) {
            modelName = "Honeycomb Lid"
        }

        modelName = modelName
            .split(/\s+/)
            .filter(Boolean)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

        const existingModel = category!.models.find((m) => m.name === modelName)
        if (existingModel) {
            existingModel.images.push(url)
        } else {
            category!.models.push({
                name: modelName,
                material: "N/A",
                description: "",
                images: [url]
            })
        }

        return acc
    }, [] as Category[])

    useEffect(() => {
        const updateOverflow = () => {
            const overflowStates = categories.map((_, idx) => {
                const el = sliderRefs.current[idx]
                return !!el && el.scrollWidth > el.clientWidth + 1
            })
            setCategoryOverflow(overflowStates)
        }

        updateOverflow()
        window.addEventListener("resize", updateOverflow)
        return () => window.removeEventListener("resize", updateOverflow)
    }, [categories])

    return (
        <section className="relative bg-neutral-950 text-neutral-200 py-24 px-6 overflow-hidden">
            <PageTitle titleKey="title.models" />

            {/* Cyan glow */}
            <div className="absolute left-[-200px] top-1/3 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-[140px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">
                        {t("models.title")}
                    </h1>

                    <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                        {t("models.subtitle")}
                    </p>
                </div>

                {/* Categories */}
                {categories.map((category, index) => (
                    <div key={index} className="mb-20">
                        <h2 className="text-2xl mb-6 text-cyan-400">
                            {category.name}
                        </h2>

                        {/* Carousel with prev/next arrow controls */}
                        <div className="relative">
                            {categoryOverflow[index] && (
                                <button
                                    onClick={() => scrollCategory(index, "left")}
                                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                                    aria-label="Scroll left"
                                >
                                    ‹
                                </button>
                            )}

                            {categoryOverflow[index] && (
                                <button
                                    onClick={() => scrollCategory(index, "right")}
                                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                                    aria-label="Scroll right"
                                >
                                    ›
                                </button>
                            )}

                            <div
                                ref={(el) => { sliderRefs.current[index] = el }}
                                className="flex gap-6 overflow-x-hidden pb-4 scroll-smooth pr-10"
                            >
                                {category.models.map((model, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedModel(model)
                                            setSelectedImageIndex(0)
                                        }}
                                        className="min-w-[250px] cursor-pointer border border-neutral-800 bg-neutral-900 rounded-md overflow-hidden hover:border-cyan-500 transition"
                                    >
                                    <div className="w-full h-48 bg-neutral-800 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={model.images[0]}
                                            alt={model.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-white">{model.name}</h3>
                                        <p className="text-neutral-400 text-sm">
                                            {model.material}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                ))}

                {/* Modal */}
                {selectedModel && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-neutral-900 border border-neutral-700 rounded-md max-w-3xl w-full p-6 relative">

                            <button
                                onClick={() => setSelectedModel(null)}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl text-white mb-2">
                                {selectedModel.name}
                            </h2>

                            <p className="text-cyan-400 mb-4">
                                {selectedModel.material}
                            </p>

                            <p className="text-neutral-300 mb-6">
                                {selectedModel.description}
                            </p>

                            {/* Image carousel */}
                            <div className="relative h-72 md:h-96 bg-neutral-900 flex items-center justify-center rounded overflow-hidden">
                                {selectedModel.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setSelectedImageIndex((prev) => (prev - 1 + selectedModel.images.length) % selectedModel.images.length)}
                                            className="absolute left-3 h-10 w-10 rounded-full bg-black/60 text-white hover:bg-black/80"
                                            aria-label="Previous image"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={() => setSelectedImageIndex((prev) => (prev + 1) % selectedModel.images.length)}
                                            className="absolute right-3 h-10 w-10 rounded-full bg-black/60 text-white hover:bg-black/80"
                                            aria-label="Next image"
                                        >
                                            ›
                                        </button>
                                    </>
                                )}
                                <img
                                    src={selectedModel.images[selectedImageIndex]}
                                    alt={`${selectedModel.name} ${selectedImageIndex + 1}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {selectedModel.images.length > 1 && (
                                <div className="mt-4 flex justify-center gap-2">
                                    {selectedModel.images.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImageIndex(i)}
                                            className={`h-12 w-12 rounded border ${selectedImageIndex === i ? "border-cyan-400" : "border-neutral-700"} overflow-hidden`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${selectedModel.name} ${i + 1}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Quote button */}
                            <Link
                                to="/quote"
                                className="inline-block mt-6 px-6 py-3 bg-black text-cyan-400 border border-cyan-500 rounded-md
                hover:bg-cyan-500 hover:text-black transition"
                            >
                                Demander un devis
                            </Link>

                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}