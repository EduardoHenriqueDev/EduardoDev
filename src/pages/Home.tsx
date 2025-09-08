import "../styles/Home.css"
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Socials from '../components/Socials';
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CompetenciesSection from "../sections/CompetenciesSection";

function Home() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="home">
            <Socials />
            <HeroSection />
            <CompetenciesSection />
            <AboutSection />
        </section>
    );
}

export default Home;
