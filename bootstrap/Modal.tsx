// components/BootstrapModal.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const BootstrapModal: React.FC<BootstrapModalProps> = ({ children, ...props }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let modalInstance: any;

        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/modal").then((Modal) => {
                if (modalRef.current) {
                    modalInstance = new Modal.default(modalRef.current);
                }
            });
        }

        return () => {
            modalInstance?.dispose();
        };
    }, []);

    return (
        <div ref={modalRef} {...props} className={`modal fade ${props.className || ''}`} tabIndex={-1}>
            {children}
        </div>
    );
};

export default BootstrapModal;