import FeaturedPrints from "../components/FeaturedPrints";
import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import Services from "../components/Services";

export default function Home() {
    return (
        <>
            <PageTitle titleKey="title.home" />
            <Hero />
            <Services />
            <FeaturedPrints />
        </>
    )
}