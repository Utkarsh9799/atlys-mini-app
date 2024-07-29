import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = (props) => {
  const { open, children } = props;

  const backdropClasses = `fixed w-full inset-0 flex justify-center items-center transition-all duration-500 ${
    open ? "opacity-100 bg-[#00000080]" : "opacity-0 bg-transparent invisible"
  }`;

  const contentClasses = `w-5/6 sm:2/3 lg:w-1/3 rounded-lg shadow p-6 transition-all duration-500 ${
    open ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className={backdropClasses}>
      <div className={contentClasses} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
