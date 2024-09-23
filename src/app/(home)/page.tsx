import AccordianHalf from "../components/AccordionHalf/AccordianHalf";
import AboutSection from "../components/home/AboutSection";
import styles from "./page.module.css";
import HeroBanner from "@/app/components/home/HeroBanner"
import ProjectsSection from "@/app/components/home/ProjectsSection";
import { WHAT_WE_DO } from '@/data/what-we-do';

export default function Home() {
    return (
        <main>
            <div className="underlay-navbar"></div>
            <HeroBanner />
            <AboutSection/>
            <ProjectsSection />
            <section id="work" className="work-section">
                <AccordianHalf data={WHAT_WE_DO} />
            </section>
        </main>
    );
}
