'use client'
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react"

interface Props {
    children: React.ReactNode 
}

export function LineAnimation({ children }: Props) {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const pathname = usePathname();


    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.2,
            delay: 100
        };
          
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add("show-lines");
                    observer.unobserve(entry.target);
                }
            });
        };

        observerRef.current = new IntersectionObserver(callback, options);

        const gridSections = document.querySelectorAll(".grid-section");
        gridSections.forEach(section => {
            observerRef.current?.observe(section);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [pathname]);

    return (
        <div>
            {children}
        </div>
    );
}