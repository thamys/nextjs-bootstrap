// components/BootstrapCarousel.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapCarousel: React.FC<BootstrapCarouselProps> = ({ children, ...props }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let carouselInstance: any;

        // Carrega e inicializa o Carousel apenas no lado do cliente
        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/carousel").then((Carousel) => {
                if (carouselRef.current) {
                    carouselInstance = new Carousel.default(carouselRef.current);
                }
            });
        }

        // Limpa a instância ao desmontar o componente
        return () => {
            carouselInstance?.dispose();
        };
    }, []);

    return (
        <div ref={carouselRef} {...props} className={`carousel slide ${props.className || ''}`} data-bs-ride="carousel">
            <div className="carousel-inner">
                {children}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default BootstrapCarousel;