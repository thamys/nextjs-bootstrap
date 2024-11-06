// components/BootstrapScrollSpy.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapScrollSpyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapScrollSpy: React.FC<BootstrapScrollSpyProps> = ({ children, ...props }) => {
    const scrollSpyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scrollSpyInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/scrollspy").then((ScrollSpy) => {
                if (scrollSpyRef.current) {
                    scrollSpyInstance = new ScrollSpy.default(scrollSpyRef.current);
                }
            });
        }

        return () => {
            scrollSpyInstance?.dispose();
        };
    }, []);

    return (
        <div ref={scrollSpyRef} {...props}>
            {children}
        </div>
    );
};

export default BootstrapScrollSpy;