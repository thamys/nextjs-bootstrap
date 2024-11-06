// hooks/useToast.tsx
import { useState, ReactNode } from "react";
import { BootstrapToast } from "@/bootstrap";

interface UseToastProps {
  title: string;
  children: ReactNode;
}

export function useToast({ title, children }: UseToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(false); // Reseta o estado para garantir que o toast seja exibido novamente
    setTimeout(() => setIsVisible(true), 0); // Pequeno atraso para que o React detecte a mudança de estado
  };

  const hideToast = () => setIsVisible(false);

  return {
    showToast,
    hideToast,
    ToastComponent: (
      <BootstrapToast
        isVisible={isVisible}
        className="position-fixed bottom-0 end-0 m-3"
      >
        <div className="toast-header">
          <strong className="me-auto">{title}</strong>
          <small>1 min ago</small>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={hideToast}
          ></button>
        </div>
        <div className="toast-body">{children}</div>
      </BootstrapToast>
    ),
  };
}
