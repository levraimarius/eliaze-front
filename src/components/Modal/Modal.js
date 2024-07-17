import React, { useEffect } from "react";
import Icon from "@mdi/react";
import { MemoryClose } from "@pictogrammers/memory";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close" onClick={onClose}>
          <Icon path={MemoryClose} size={1.2} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
