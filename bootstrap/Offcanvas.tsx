// components/BootstrapOffcanvas.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapOffcanvasProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapOffcanvas: React.FC<BootstrapOffcanvasProps> = ({ children, ...props }) => {
    const offcanvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let offcanvasInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/offcanvas").then((Offcanvas) => {
                if (offcanvasRef.current) {
                    offcanvasInstance = new Offcanvas.default(offcanvasRef.current);
                }
            });
        }

        return () => {
            offcanvasInstance?.dispose();
        };
    }, []);

    return (
        <div ref={offcanvasRef} {...props} className={`offcanvas ${props.className || ''}`} tabIndex={-1}>
            {children}
        </div>
    );
};

export default BootstrapOffcanvas;