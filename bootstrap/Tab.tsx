// components/BootstrapTab.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapTabProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapTab: React.FC<BootstrapTabProps> = ({ children, ...props }) => {
    const tabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let tabInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/tab").then((Tab) => {
                if (tabRef.current) {
                    tabInstance = new Tab.default(tabRef.current);
                }
            });
        }

        return () => {
            tabInstance?.dispose();
        };
    }, []);

    return (
        <div ref={tabRef} {...props}>
            {children}
        </div>
    );
};

export default BootstrapTab;