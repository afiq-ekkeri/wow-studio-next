'use client'
import React, {useEffect} from "react"

interface Props {
    children: React.ReactNode 
}

export function LineAnimation({ children }: Props) {
    useEffect(() =>{
        const options = {
            root: null,
            threshold: 0.2,
            delay: 100
          };
          
        const gridSections =  document.querySelectorAll(".grid-section")
        const sectionObserver = new IntersectionObserver(callback, options);
        gridSections.forEach(section => {
            sectionObserver.observe(section);
        });
        function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                  entry.target.classList.add("show-lines");
            
                  observer.unobserve(entry.target);
                }
              });
          }
        
    },[])
    return(
        <div>
            {children}
        </div>
    )
}
