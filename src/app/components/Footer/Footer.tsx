'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiArrowUpRight } from "react-icons/fi";
import { RiBuildingLine } from "react-icons/ri";
import { RiHome6Line } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import GridBlock from '../gridblock/GridBlock';

type Props = {
    NavbarUnderlay?: boolean
}
type FooterProps = {
    whiteFooter?: boolean
}


export default function Footer({whiteFooter=false}: FooterProps) {
    return (
        <>
            <footer className={`footer-section ${whiteFooter ? 'white' : ''}`}>
                <div className={`footer-bg ${whiteFooter ? 'white' : ''}`}/>
                <Marquee className="marquee-container" gradient={false} speed={50}>
                    <div className="marquee-content">
                        {Array.from(Array(3), (_, i)=> (
                            <a key={i.toString()} href="mailto:contact@wowstudio.io" className="footer-mail-link">
                                <h2 className="title-h2">LETS WORK TOGETHER</h2>
                                <div className="footer-logo">
                                    <Image
                                        src="/brand-logo-icon.webp"
                                        alt="brand-img"
                                        width={45}
                                        height={27}
                                    />
                                </div>
                                <h2 className="title-h2">CONTACT@WOWSTUDIO.IO</h2>
                                <div className="footer-logo">
                                    <Image
                                        src="/brand-logo-icon.webp"
                                        alt="brand-img"
                                        width={45}
                                        height={27}
                                    />
                                </div>
                            </a>
                        ))}                    
                    </div>
                </Marquee>
                <GridBlock main hideInnerLines={true}>
                    <div className="footer-container">
                        <div className="footer-left-container">
                            <div className="footer-logo-container">
                                <img src="/footer-logo.svg" alt="wow studio" />
                            </div>
                            <p className="footer-brand-desc">Transforming brands with strategic design. wowstudio.io, a creative studio based in Dubai, shaping stories that resonate globally.</p>
                            <p className="footer-brand-desc-ipad">Transforming brands with strategic design, based in Dubai.</p>
                            <div className="social-container">
                                <a className="social-icon-container" aria-label="wow studio Instsgram" href="https://www.instagram.com/wowstudio.io/" target="_blank">
                                    <AiFillInstagram className="social-icon" size="18px"/>
                                </a>
                                <a className="social-icon-container" href="https://www.linkedin.com/company/wow-studio-io/" target="_blank" aria-label="wow studio Linkedin">
                                    <FaLinkedinIn className="social-icon" size="16px" />
                                </a>
                                <a className="social-icon-container" href="https://www.facebook.com/WOWStudioIOUAE" target="_blank" aria-label="wow studio Facebook">
                                    <FaFacebookF className="social-icon" size="16px"/>
                                </a>
                                <a className="social-icon-container" href="https://twitter.com/WowStudio_io" target="_blank" aria-label="wow studio Twitter">
                                    <FaTwitter className="social-icon" size="16px"  />
                                </a>
                            </div>
                        </div>
                        <div className="footer-right-container">
                            <div className="footer-list-container">
                                <h3>OUR SERVICES</h3>
                                <Link href="/services">
                                    <p>Overview <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/services/brand-strategy">
                                    <p>Brand Strategy <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/services/identity-design">
                                    <p>Identity Design <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/services/social-media">
                                    <p>Social Media <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/services/web-design">
                                    <p>Web Design <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                            </div>
                            
                            <div className="footer-list-container">
                                <h3>QUICK LINKS</h3>
                                <Link href="/contact">
                                    <p>Contact us <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/">
                                    <p>Home <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/studio">
                                    <p>Studio <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/blogs">
                                    <p>Blogs <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                                <Link href="/portfolio">
                                    <p>Portfolio <FiArrowUpRight className="footer-list-icon" /></p>
                                </Link>
                            </div>
                            <div className="footer-list-container hide-xs">
                                <h3>SOCIAL</h3>
                                <a href="https://www.facebook.com/WOWStudioIOUAE" target="_blank" rel="noreferrer">
                                    Facebook <FiArrowUpRight className="footer-list-icon" />
                                </a>
                                <a href="https://www.instagram.com/wowstudio.io/" target="_blank" rel="noreferrer"> 
                                    Instagram <FiArrowUpRight className="footer-list-icon" />
                                </a>
                                <a href="https://www.linkedin.com/company/wow-studio-io/" target="_blank" rel="noreferrer">
                                    Linkedin <FiArrowUpRight className="footer-list-icon" />
                                </a>
                                <a href="https://x.com/WowStudio_io?s=20" target="_blank" rel="noreferrer">
                                    Twitter <FiArrowUpRight className="footer-list-icon" />
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                    Youtube <FiArrowUpRight className="footer-list-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </GridBlock>
                <div className="horizontal-dashed-line bottom" />
                <div className="bg-black">
                    <div className="container-lg">
                        <div className="footer-legal-strip dark">
                            <p>All Rights Reserved ©️ Copyright 2024 wowstudio.io</p>
                            <span className="footer-legal-strip-links hide-xs">
                                <Link href="/privacypolicy">Privacy policy</Link>
                                <Link href="/sitemap">Sitemap</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
            <BottomBar whiteFooter={whiteFooter} />
        </>
    );
}

const BottomBar = ({whiteFooter=false}: FooterProps) => {
    const pathname = usePathname();
    return(
        <div className={`bottom-tab ${whiteFooter ? 'white' : ''}`}>
            <Link href="/" className={`${pathname?.endsWith('/') ? "active-bottom-tab" : "" } tab-link`}>
                <RiHome6Line size="22px" className="tab-icon home" />
                <div className="tab-title">Home</div>
            </Link>
            <Link href="/studio" className={`${pathname?.endsWith('/studio') ? "active-bottom-tab" : "" } tab-link`}>
                <RiBuildingLine size="20px" className="tab-icon" />
                <div className="tab-title">Studio</div>
            </Link>
            <Link href="/services" className={`${pathname?.endsWith('/studio') ? "active-bottom-tab" : "" } tab-link`}>
                <ImStack size="20px" className="tab-icon" />
                <div className="tab-title">Services</div>
            </Link>
            <Link href="/contact" className={`${pathname?.endsWith('/studio') ? "active-bottom-tab" : "" } tab-link`}>
                <GrContact size="18px" className="tab-icon" color="red"/>
                <div className="tab-title">Contact</div>
            </Link>
        </div>
    )
}