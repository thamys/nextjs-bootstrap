// components/BootstrapToast.tsx
"use client";

import { useEffect, useRef } from "react";

interface BootstrapToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isVisible: boolean;
}

const BootstrapToast: React.FC<BootstrapToastProps> = ({
  children,
  isVisible,
  ...props
}) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      import("bootstrap/js/dist/toast").then(({ default: Toast }) => {
        if (!toastRef.current) return;
        const toastInstance = new Toast(toastRef.current);
        if (isVisible) {
          toastInstance.show();
        } else {
          toastInstance.hide();
        }
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={toastRef}
      {...props}
      className={`toast ${props.className || ""}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {children}
    </div>
  );
};

export default BootstrapToast;
