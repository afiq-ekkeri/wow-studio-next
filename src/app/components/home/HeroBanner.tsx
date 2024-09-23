'use client'
import React, { createRef, useEffect, useState } from 'react'
import Link from 'next/link'
import animationData from '@/../public/lottie/atf-lottie-2.json';
import animationDataMobile from '@/../public/lottie/atf-lotte-mobile.json';
import GridBlock from '../gridblock/GridBlock';
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export default function HeroBanner() {
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const lottieDesktopContainer = createRef<HTMLDivElement>();
    const lottieMobileContainer = createRef<HTMLDivElement>();

    useEffect(() => {
        setIsClient(true);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 991.98);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        let anim: any = null;

        const loadLottie = async () => {
            const lottieModule = await import('lottie-web');
            const lottie = lottieModule.default;

            if (isMobile) {
                anim = lottie.loadAnimation({
                    container: lottieMobileContainer.current!,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: animationDataMobile,
                });
            } else {
                anim = lottie.loadAnimation({
                    container: lottieDesktopContainer.current!,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: { preserveAspectRatio: 'none' }
                });
            }
        };

        loadLottie();

        return () => {
            if (anim) anim.destroy();
        };
    }, [isClient, isMobile]);

    return (
        <section className="banner-section">
            <div className="video-overlay-container">
                {(isClient && !isMobile) && (
                    <ReactPlayer 
                        className="overlay-video"
                        playing={true}
                        width='100%'
                        height='100%'
                        url={"https://www.dropbox.com/s/0cb7v4nj52yc3wf/wow-studio-hd.mp4?dl=0"}
                        config={{
                            file: { 
                                attributes: { 
                                poster: '/video-placeholder-2.webp' 
                                } 
                            } 
                        }}
                        muted={true}
                        loop={true}
                        controls={false}
                    />
                )}
                <div className="video-color-overlay"/>
                <div className="lottie-container">
                    <div className="lottie" ref={lottieDesktopContainer}></div>
                </div>
            </div>
            <GridBlock main={true}>
                <div className="banner-info-container">
                    <div className="lottie-mobile" ref={lottieMobileContainer}></div>
                    <h1 className="title-h1">WE SPECIALIZE IN BUILDING DIGITAL BRANDS</h1>
                    <p className="mb-25">We make every encounter people have with your brand, memorable and meaningful. We help build brands that leaves a lasting impression, brands with purpose, which impacts the lives of millions.</p>
                    <p className="mb-25 mobile-p">We make every encounter people have with your brand, memorable and meaningful. We help build brands with purpose, brands that last.</p>
                    <Link href="/contact">
                        <button className="cta-btn">Get in touch</button>
                    </Link>
                </div>
            </GridBlock>
        </section>
    );
}