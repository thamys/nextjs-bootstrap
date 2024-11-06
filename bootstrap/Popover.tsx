// components/BootstrapPopover.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapPopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapPopover: React.FC<BootstrapPopoverProps> = ({ children, ...props }) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let popoverInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/popover").then((Popover) => {
                if (popoverRef.current) {
                    popoverInstance = new Popover.default(popoverRef.current);
                }
            });
        }

        return () => {
            popoverInstance?.dispose();
        };
    }, []);

    return (
        <div ref={popoverRef} {...props} data-bs-toggle="popover">
            {children}
        </div>
    );
};

export default BootstrapPopover;