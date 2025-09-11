import "../styles/About.css";
import { useContext, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import codingImage from "../assets/img/coding.png";
import { motion, useInView } from "framer-motion";

function AboutSection() {
    const { t } = useContext(LanguageContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="about">
            <div ref={ref}>
                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, y: 80, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="about-image">
                        <motion.img
                            src={codingImage}
                            alt="Programação"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <h2 dangerouslySetInnerHTML={{ __html: t.aboutTitle }} />
                        <p dangerouslySetInnerHTML={{ __html: t.aboutParagraph1 }} />
                        <p dangerouslySetInnerHTML={{ __html: t.aboutParagraph2 }} />
                        <p dangerouslySetInnerHTML={{ __html: t.aboutParagraph3 }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;