import "../styles/Home.css"
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CompetenciesSection from "../sections/CompetenciesSection";
import Footer from "../components/Footer";
import LaunchedProjectsSection from '../sections/LaunchedProjectsSection';

function Home() {
    return (
        <section className="home">
            <HeroSection />
            <CompetenciesSection />
            <AboutSection />
            <LaunchedProjectsSection />
            <Footer />
        </section>
    );
}

export default Home;
