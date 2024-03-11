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
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white p-4 rounded-lg min-w-full sm:min-w-96">
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
