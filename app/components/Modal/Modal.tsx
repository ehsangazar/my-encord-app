import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import FormGroup from "../FormGroup/FormGroup";

interface ModalProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ title, children, open, onClose, description }: ModalProps) => {
  const modalRef = useRef(null);

  const clickOutsideModal = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const pressEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideModal);
    document.addEventListener("keydown", pressEscape);
    return () => {
      document.removeEventListener("mousedown", clickOutsideModal);
      document.removeEventListener("keydown", pressEscape);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div
        ref={modalRef}
        className="bg-white p-4 rounded-lg min-w-full sm:min-w-96"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {description && <p className="mb-4">{description}</p>}
        {children}
        <FormGroup>
          <Button colorScheme="gray" onClick={onClose}>
            Close
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Modal;
