// components/BootstrapDropdown.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapDropdown: React.FC<BootstrapDropdownProps> = ({ children, ...props }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let dropdownInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/dropdown").then((Dropdown) => {
                if (dropdownRef.current) {
                    dropdownInstance = new Dropdown.default(dropdownRef.current);
                }
            });
        }

        return () => {
            dropdownInstance?.dispose();
        };
    }, []);

    return (
        <div ref={dropdownRef} {...props} className={`dropdown ${props.className || ''}`}>
            {children}
        </div>
    );
};

export default BootstrapDropdown;