// @/hooks/useBootstrap.tsx
"use client";

import { createContext, useContext, useEffect, ReactNode, useState } from "react";
// Importa todos os componentes do Bootstrap de @/bootstrap/index
import * as BootstrapComponents from "@/bootstrap/index";

type BootstrapContextType = null;

const BootstrapContext = createContext<BootstrapContextType>(null);

interface BootstrapProviderProps {
    children: ReactNode;
}

export function BootstrapProvider({ children }: BootstrapProviderProps) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Verifica a preferência de tema do usuário
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

            // Função para atualizar o tema
            const updateTheme = (e: MediaQueryListEvent) => {
                setTheme(e.matches ? "dark" : "light");
            };

            // Define o tema inicial
            setTheme(prefersDarkScheme.matches ? "dark" : "light");

            // Adiciona o listener para atualizar o tema quando a preferência mudar
            prefersDarkScheme.addEventListener("change", updateTheme);

            // Remove o listener ao desmontar o componente
            return () => {
                prefersDarkScheme.removeEventListener("change", updateTheme);
            };
        }
    }, []);

    return (
        <BootstrapContext.Provider value={null}>
            <div data-bs-theme={theme}>{children}</div>
        </BootstrapContext.Provider>
    );
}

export function useBootstrap() {
    return useContext(BootstrapContext);
}

// Exporta todos os componentes de BootstrapComponents
export const {
    BootstrapAlert,
    BootstrapButton,
    BootstrapCarousel,
    BootstrapCollapse,
    BootstrapDropdown,
    BootstrapModal,
    BootstrapOffcanvas,
    BootstrapPopover,
    BootstrapScrollSpy,
    BootstrapTab,
    BootstrapToast,
    BootstrapTooltip,
} = BootstrapComponents;