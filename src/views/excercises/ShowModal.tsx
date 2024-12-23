import { createPortal } from "react-dom";
import PortalModal from "../../components/PortalModal";
import { useState } from "react";

export default function ShowModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Mostrar Modal con CreatePortal</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="border rounded py-2 px-4 mx-auto block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold">
        Abrir Modal
      </button>
      {createPortal(
        <PortalModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>Hola desde Modal</p>
        </PortalModal>,
        document.getElementById("modal-portal")!
      )}
    </div>
  );
}
