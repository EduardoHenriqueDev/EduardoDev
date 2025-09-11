import "../styles/Home.css"
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CompetenciesSection from "../sections/CompetenciesSection";
import Footer from "../components/Footer";

function Home() {
    return (
        <section className="home">
            <HeroSection />
            <CompetenciesSection />
            <AboutSection />
            <Footer />
        </section>
    );
}

export default Home;
