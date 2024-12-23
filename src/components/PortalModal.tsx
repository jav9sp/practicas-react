import { ReactNode, useEffect, useState } from "react";

type PortalModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function PortalModal({
  children,
  isOpen,
  onClose,
}: PortalModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-20 h-screen w-screen flex items-center justify-center bg-cyan-600/80 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}>
      <span
        className="absolute top-6 right-6 font-semibold text-4xl cursor-pointer"
        onClick={handleClose}>
        x
      </span>
      <div
        className="w-1/2 h-1/2 bg-white rounded-lg p-4"
        onClick={(e) => e.stopPropagation()}>
        <h2 className="my-0">Este es un modal con CreatePortal</h2>
        {children}
      </div>
    </div>
  );
}
