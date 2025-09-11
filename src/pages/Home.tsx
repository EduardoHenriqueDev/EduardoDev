import "../styles/Home.css"
import Socials from '../components/Socials';
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CompetenciesSection from "../sections/CompetenciesSection";
import Footer from "../components/Footer";

function Home() {
    return (
        <section className="home">
            <Socials />
            <HeroSection />
            <CompetenciesSection />
            <AboutSection />
            <Footer />
        </section>
    );
}

export default Home;
