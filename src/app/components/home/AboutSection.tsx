'use client'
import { useState } from 'react'
import GridBlock from '@/app/components/gridblock/GridBlock';


export default function AboutSection() {
    const [truncate, setTruncate] = useState(true)

    const handleTruncate = () => {
        setTruncate(!truncate);
    };
    
    return (
        <section className="about-section">
            <GridBlock main hideInnerLines={true} containerClass="mb-0">
                <div className="about-container">
                    <h2 className="title-h2">IF YOU'RE FEELING FORMAL, CALL US A “BRAND STRATEGY AND DESIGN FIRM.”</h2>
                    <p className="desktop-p">We are creative makers who work alongside company leaders to craft the next generation of genre-defining brands. We help businesses grow, launch products, and build enduring relationships with their communities. We’re heads down creating the very best work using the smallest team footprint. One team, one dream, together with our partners.</p>
                    <p className={`mobile-p ${truncate ? 'trancate-text' : ''}`}>
                        We are creative makers who work alongside company leaders 
                        to craft the next generation of genre-defining brands. We’re 
                        heads down creating the very best work using the smallest team 
                        footprint. One team, one dream, together with our partners.
                    </p>
                    <span className="read-more" onClick={handleTruncate}> {truncate ? '...Read More' : '...Read Less'}</span>
                </div>
            </GridBlock>
        </section>
    );
}