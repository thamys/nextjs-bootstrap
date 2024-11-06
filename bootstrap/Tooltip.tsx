// components/BootstrapTooltip.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title: string;
    placement?: "auto" | "top" | "bottom" | "left" | "right";
}

const BootstrapTooltip: React.FC<BootstrapTooltipProps> = ({ children, title, ...props }) => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let tooltipInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/tooltip").then((Tooltip) => {
                if (tooltipRef.current) {
                    tooltipInstance = new Tooltip.default(tooltipRef.current, {
                        title: title,
                        placement: props['placement'] || 'top',
                    });
                }
            });
        }

        return () => {
            tooltipInstance?.dispose();
        };
    }, [title]);

    return (
        <div ref={tooltipRef} {...props} data-bs-toggle="tooltip" title={title}>
            {children}
        </div>
    );
};

export default BootstrapTooltip;