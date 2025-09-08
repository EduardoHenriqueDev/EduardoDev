import "../styles/About.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import codingImage from "../assets/img/coding.png";
import { motion } from "framer-motion";
import Socials from "../components/Socials";

function AboutSection() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="about">
            <Socials />

            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
            >
                <div className="about-image">
                    <motion.img
                        src={codingImage}
                        alt="Programação"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                    />
                </div>

                <div className="about-content">
                    <h2 dangerouslySetInnerHTML={{ __html: t.aboutTitle }} />
                    <p dangerouslySetInnerHTML={{ __html: t.aboutParagraph1 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.aboutParagraph2 }} />
                    <p dangerouslySetInnerHTML={{ __html: t.aboutParagraph3 }} />
                </div>
            </motion.div>
        </section>
    );
}

export default AboutSection;