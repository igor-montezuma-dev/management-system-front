import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { X, XIcon } from "lucide-react";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

const Modal = ({ children, isOpen, onClose, name }: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex size-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-dark-secondary">
        <Header
          name={name}
          buttonComponent={
            <button
              className="rounded-full bg-blue-primary flex size-7 items-center justify-center text-white hover:bg-blue-600"
              onClick={onClose}
            >
              <XIcon size={18} />
            </button>
          }
          isSmallText
        />
      {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
