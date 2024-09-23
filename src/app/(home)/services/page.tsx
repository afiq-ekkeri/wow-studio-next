
import styles from "./page.module.css";
import HeroBanner from "@/app/components/home/HeroBanner"
import ProjectsSection from "@/app/components/home/ProjectsSection";
import { WHAT_WE_DO } from '@/data/what-we-do';
import Link from "next/link";

const FAQ = [
    {
        question: "What services does Wowstudio.io offer?",
        answer: (<><Link href="/">Wowstudio.io</Link> specializes in strategic brand development, encompassing brand strategy, identity design, social media management, and UI/UX web design.</>),
    },
    {
        question: "How does the branding process work at Wowstudio.io?",
        answer: "Our branding process involves collaborative discovery, strategy development, visual identity creation, and comprehensive brand guidelines. Explore our services page for a detailed breakdown",
    },
    {
        question: "Is Wowstudio.io experienced in web design for various industries?",
        answer: "Absolutely! We offer customizable packages to meet the unique needs of your business. Contact us, and we'll tailor a solution that aligns perfectly with your goals.",
    },
    {
        question: "Can I customize the services based on my business needs?",
        answer: "Project timelines vary based on the scope and complexity. We provide estimated timelines during the initial consultation, ensuring transparency and effective project management",
    },
    {
        question: "How can I get started with Wowstudio.io's services?",
        answer: "Our brand guidelines serve as a comprehensive roadmap for maintaining consistency. We craft visual and messaging elements that resonate across all mediums, ensuring a unified brand identity.",
    },
];

export default function Services() {
    return (
        <main>
            <div className="underlay-navbar"></div>
            
        </main>
    );
}
