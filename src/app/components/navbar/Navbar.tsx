'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { usePathname } from 'next/navigation'

type Props = {
    NavbarUnderlay?: boolean
}

export default function Navbar({NavbarUnderlay}: Props) {
    const [navbar, setNavbar] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    const changeBackground = useCallback(() => {
        if(window.scrollY >= 77) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, [changeBackground]);
    
    return (
        <>
            { NavbarUnderlay &&
                <div className={`underlay-navbar`} />
            }
            <BootstrapNavbar className={`custom-navbar ${navbar === true ? 'navbar-scrolled' : ''}`} expand="lg" fixed="top" expanded={expanded}>
                <Container className="custom-navbar-container">
                    <Link href="/">
                        <div className="navbar-brand-logo">
                                <Image
                                    src="/brand-logo.svg"
                                    alt="Vercel Logo"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 140px,
                                    170px"
                                />
                        </div>
                    </Link>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}>
                        <div className="nav-toggle-line top" />
                        <div className="nav-toggle-line bottom" />
                    </BootstrapNavbar.Toggle>
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto hide-mobile">
                            <Link href="/"  className={pathname?.endsWith('/') ? "active-navbar-link" : ''}>
                                <div className="nav-link">Home</div>
                            </Link>
                            <Link href="/services" className={pathname?.endsWith('/services') ? "active-navbar-link" : ''}>
                                <div className="nav-link">Services</div>
                            </Link>
                            <Link href="/studio" className={pathname?.endsWith('/studio') ? "active-navbar-link" : ''}>
                                <div className="nav-link">Studio</div>
                            </Link>
                            <Link href="/portfolio" className={pathname?.endsWith('/portfolio') ? "active-navbar-link" : ''}>
                                <div className="nav-link">Portfolio</div>
                            </Link>
                            <Link href="/blogs" className={pathname?.endsWith('/blogs') ? "active-navbar-link" : ''}>
                                <div className="nav-link">Blogs</div>
                            </Link>
                            <Link href="/contact" className={pathname?.endsWith('/contact') ? "active-navbar-link" : ''}>
                                <div className="nav-link">Contact</div>
                            </Link>
                        </Nav>
                        <div className="hide-desktop mobile-nav">
                            <Container>
                                <div className="mobile-nav-content">
                                    <div>
                                        <Link href="/" className={pathname?.endsWith('/') ? "active-navbar-link" : ''} onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                            <div className="nav-link">Home</div>
                                        </Link>
                                        <Link href="/portfolio" className={pathname?.endsWith('/portfolio') ? "active-navbar-link" : ''}>
                                            <div className="nav-link">Portfolio</div>
                                        </Link>
                                        <a href="/#work" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                            <div className="nav-link">WHAT WE DO</div>
                                        </a>
                                        <Link href="/studio" className={pathname?.endsWith('/studio') ? "active-navbar-link" : ''}>
                                            <div className="nav-link">Studio</div>
                                        </Link>
                                    </div>
                                    <div className="nav-arrow-container">
                                        <img src="/nav-arrow.svg" alt="Wow Studio Navigation" />
                                    </div>
                                    <div className="nav-cta-container">
                                        <Link href="/contact">
                                            <button className="cta-btn">Get in touch</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="vertical-dashed-line left" />
                                <div className="vertical-dashed-line right" />
                            </Container>
                            <div className="horizontal-dashed-line top" />
                            <div className="horizontal-dashed-line bottom" />
                        </div>
                    </BootstrapNavbar.Collapse>
                </Container>
                <div className="horizontal-dashed-line" />
            </BootstrapNavbar>
        </>
    );
}