import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, labelledBy, children }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby={labelledBy} data-testid="modal-overlay">
      <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#FBF7F1] rounded-3xl shadow-2xl em-fade-up" data-testid="modal-content">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-orange-600 transition-colors shadow-sm" aria-label="Close" data-testid="modal-close">
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}