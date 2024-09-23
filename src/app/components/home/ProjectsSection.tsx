import Link from 'next/link'
import Image from 'next/image'
import GridBlock from '@/app/components/gridblock/GridBlock';


export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <GridBlock containerClass="mt-142">
                <Link href="/services/brand-strategy" aria-labelledby="Brand Strategy and Design Agency in Dubai and Abu Dhabi UAE Wow Studio .io UAE" className="project-container">
                    <div className="project-poster-container">
                        <Image
                            src="/project-1.webp"
                            alt="Walsos Identity design"
                            fill
                            priority
                        />
                    </div>
                    <div className="project-title-container">
                        <h3 className="title-h3">{'GET YOUR ADVICE FROM EXPERTS WORLDWIDE'}</h3>
                        <Link href="/services/brand-strategy" aria-labelledby="Brand Strategy and Design Agency in Dubai and Abu Dhabi UAE Wow Studio .io UAE" className="project-type">{'BRAND STRATEGY'}</Link>
                    </div>
                </Link>
            </GridBlock>
            <GridBlock>
                <Link href="/portfolio/nobots/" aria-labelledby="Identity Design of Nobots App by Wow Studio in Dubai and Abu Dhabi UAE" className="project-container">
                    <div className="project-poster-container">
                        <Image
                            src="/project-2.webp"
                            alt="Nobots Brand Strategy by Wow Studio"
                            fill
                        />
                    </div>
                    <div className="project-title-container">
                        <h3 className="title-h3">PLATFORM FOR GAMING COMMUNITY</h3>
                        <Link href="/services/identity-design" aria-labelledby="Creative Identity Design Services by Wow Studio in Dubai and Abu Dhabi UAE" className="project-type">{'IDENTITY DESIGN'}</Link>
                    </div>
                </Link>
            </GridBlock>
            <GridBlock containerClass="mt-142">
                <Link href="/portfolio/salamtik/" aria-labelledby="Identity Design of Salamtik by Wow Studio in Dubai and Abu Dhabi UAE" className="project-container">
                    <div className="project-poster-container">
                        <Image
                            src="/project-3.webp"
                            alt="Salamtik Identity Design by Wow Studio"
                            fill
                        />
                    </div>
                    <div className="project-title-container">
                        <h3 className="title-h3">PLATFORM FOR GAMING COMMUNITY</h3>
                        <Link href="/services/identity-design" aria-labelledby="Creative Identity Design Services by Wow Studio in Dubai and Abu Dhabi UAE" className="project-type">{'IDENTITY DESIGN'}</Link>
                    </div>
                </Link>
            </GridBlock>
        </section>
    );
}