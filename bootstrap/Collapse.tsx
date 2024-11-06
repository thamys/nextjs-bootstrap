// components/BootstrapCollapse.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapCollapseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapCollapse: React.FC<BootstrapCollapseProps> = ({ children, ...props }) => {
    const collapseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let collapseInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/collapse").then((Collapse) => {
                if (collapseRef.current) {
                    collapseInstance = new Collapse.default(collapseRef.current);
                }
            });
        }

        return () => {
            collapseInstance?.dispose();
        };
    }, []);

    return (
        <div ref={collapseRef} {...props} className={`collapse ${props.className || ''}`}>
            {children}
        </div>
    );
};

export default BootstrapCollapse;