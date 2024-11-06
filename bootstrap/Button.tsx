// components/BootstrapButton.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const BootstrapButton: React.FC<BootstrapButtonProps> = ({ children, ...props }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let buttonInstance: any;

        // Carrega e inicializa o Button apenas no lado do cliente
        if (typeof window !== 'undefined') {
            import("bootstrap/js/dist/button").then((Button) => {
                if (buttonRef.current) {
                    buttonInstance = new Button.default(buttonRef.current);
                }
            });
        }

        // Limpa a instância ao desmontar o componente
        return () => {
            buttonInstance?.dispose();
        };
    }, []);

    return (
        <button ref={buttonRef} {...props} data-bs-toggle="button">
            {children}
        </button>
    );
};

export default BootstrapButton;