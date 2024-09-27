import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GridBlock from '@/app/components/gridblock/GridBlock';

interface ProjectItemProps {
    href: string;
    ariaLabelledby: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    projectType: string;
    projectTypeHref: string;
    projectTypeAriaLabelledby: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
    href,
    ariaLabelledby,
    imageSrc,
    imageAlt,
    title,
    projectType,
    projectTypeHref,
    projectTypeAriaLabelledby
}) => (
    <div className="project-container">
        <Link className='absolute inset-fill z-1' href={href} aria-labelledby={ariaLabelledby}></Link>
        <div className="project-poster-container z-0">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
            />
        </div>
        <div className="project-title-container relative z-2">
            <h3 className="title-h3">{title}</h3>
            <Link href={projectTypeHref} aria-labelledby={projectTypeAriaLabelledby} className="project-type">{projectType}</Link>
        </div>
    </div>
);

const ProjectsSection: React.FC = () => {
    return (
        <section className="projects-section">
            <GridBlock containerClass="mt-142">
                <ProjectItem
                    href="/services/brand-strategy"
                    ariaLabelledby="Brand Strategy and Design Agency in Dubai and Abu Dhabi UAE Wow Studio .io UAE"
                    imageSrc="/project-1.webp"
                    imageAlt="Walsos Identity design"
                    title="GET YOUR ADVICE FROM EXPERTS WORLDWIDE"
                    projectType="BRAND STRATEGY"
                    projectTypeHref="/services/brand-strategy"
                    projectTypeAriaLabelledby="Brand Strategy and Design Agency in Dubai and Abu Dhabi UAE Wow Studio .io UAE"
                />
            </GridBlock>
            <GridBlock>
                <ProjectItem
                    href="/portfolio/nobots/"
                    ariaLabelledby="Identity Design of Nobots App by Wow Studio in Dubai and Abu Dhabi UAE"
                    imageSrc="/project-2.webp"
                    imageAlt="Nobots Brand Strategy by Wow Studio"
                    title="PLATFORM FOR GAMING COMMUNITY"
                    projectType="IDENTITY DESIGN"
                    projectTypeHref="/services/identity-design"
                    projectTypeAriaLabelledby="Creative Identity Design Services by Wow Studio in Dubai and Abu Dhabi UAE"
                />
            </GridBlock>
            <GridBlock containerClass="mt-142">
                <ProjectItem
                    href="/portfolio/salamtik/"
                    ariaLabelledby="Identity Design of Salamtik by Wow Studio in Dubai and Abu Dhabi UAE"
                    imageSrc="/project-3.webp"
                    imageAlt="Salamtik Identity Design by Wow Studio"
                    title="PLATFORM FOR GAMING COMMUNITY"
                    projectType="IDENTITY DESIGN"
                    projectTypeHref="/services/identity-design"
                    projectTypeAriaLabelledby="Creative Identity Design Services by Wow Studio in Dubai and Abu Dhabi UAE"
                />
            </GridBlock>
        </section>
    );
};

export default ProjectsSection;