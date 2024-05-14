import React from "react";
import Icon from "@mdi/react";
import { MemoryCheckboxCross } from "@pictogrammers/memory";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close" onClick={onClose}>
          <Icon path={MemoryCheckboxCross} size={1} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
