import { useState } from "react"
import PageTitle from "../components/PageTitle"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useEffect } from "react"

type Model = {
    name: string
    material: string
    description: string
    images: string[]
}

type Category = {
    name: string
    models: Model[]
}

export default function Models() {
    const { t } = useTranslation()
    const [selectedModel, setSelectedModel] = useState<Model | null>(null)

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedModel(null)
        }

        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])


    const categories: Category[] = [
        {
            name: "Pot à plante",
            models: [
                {
                    name: "Pot Hexagonal",
                    material: "PLA",
                    description: "Pot à plante design imprimé en 3D.",
                    images: ["/models/pots/pot1.jpg", "/models/pots/pot1-2.jpg"]
                },
                {
                    name: "Pot Moderne",
                    material: "PETG",
                    description: "Pot moderne résistant à l'humidité.",
                    images: ["/models/pots/pot2.jpg"]
                }
            ]
        },
        {
            name: "Accessoire à plante",
            models: [
                {
                    name: "Support à plante",
                    material: "PLA",
                    description: "Support décoratif pour plante.",
                    images: ["/models/plantes/plant1.jpg"]
                }
            ]
        },
        {
            name: "Divertissement",
            models: [
                {
                    name: "Figurine",
                    material: "PLA",
                    description: "Figurine imprimée en 3D.",
                    images: ["/models/fun/fun1.jpg"]
                }
            ]
        },
        {
            name: "Accessoire sport / plein air",
            models: [
                {
                    name: "Support GoPro",
                    material: "PETG",
                    description: "Support résistant pour caméra sport.",
                    images: ["/models/sport/sport1.jpg"]
                }
            ]
        },
        {
            name: "Pièce fonctionnelle",
            models: [
                {
                    name: "Support mural",
                    material: "ABS",
                    description: "Pièce fonctionnelle robuste.",
                    images: ["/models/fonctionnel/fonc1.jpg"]
                }
            ]
        },
        {
            name: "Pièce automotive",
            models: [
                {
                    name: "Clip automobile",
                    material: "Nylon",
                    description: "Clip de remplacement automobile.",
                    images: ["/models/auto/auto1.jpg"]
                }
            ]
        }
    ]

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

                        {/* Slider */}
                        <div className="flex gap-6 overflow-x-auto pb-4">
                            {category.models.map((model, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedModel(model)}
                                    className="min-w-[250px] cursor-pointer border border-neutral-800 bg-neutral-900 rounded-md overflow-hidden
                  hover:border-cyan-500 transition"
                                >
                                    <img
                                        src={model.images[0]}
                                        alt={model.name}
                                        className="w-full h-48 object-cover"
                                    />

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

                            {/* Images */}
                            <div className="grid grid-cols-2 gap-4">
                                {selectedModel.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={selectedModel.name}
                                        className="w-full h-40 object-cover rounded"
                                    />
                                ))}
                            </div>

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