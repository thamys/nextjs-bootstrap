// components/BootstrapAlert.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BootstrapAlert: React.FC<BootstrapAlertProps> = ({
  children,
  ...props
}) => {
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alertInstance: any;

    // Carrega e inicializa o Alert apenas no lado do cliente
    if (typeof window !== "undefined") {
      import("bootstrap/js/dist/alert").then((Alert) => {
        if (alertRef.current) {
          alertInstance = new Alert.default(alertRef.current);
        }
      });
    }

    // Limpa a instância ao desmontar o componente
    return () => {
      alertInstance?.dispose();
    };
  }, []);

  return (
    <div
      ref={alertRef}
      {...props}
      className={`alert ${props.className || ""}`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default BootstrapAlert;
