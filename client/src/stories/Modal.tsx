import { Button, Modal as BTModal, ModalDialogProps } from "react-bootstrap";

export interface ModalProps extends ModalDialogProps {
  children: JSX.Element;
  handleClose: () => {};
  title: string;
  disabled: boolean;
  handleFormSubmit: () => {};
}

export const Modal = ({ handleClose, title, children, disabled, handleFormSubmit, ...props }: ModalProps) => {
  return (
    <BTModal onHide={handleClose} {...props}>
      <BTModal.Header closeButton>
        <BTModal.Title>{title}</BTModal.Title>
      </BTModal.Header>
      <BTModal.Body>
        {children}
      </BTModal.Body>
      <BTModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button
          variant="primary"
          disabled={disabled}
          onClick={handleFormSubmit}
        >
          Salvar
        </Button>
      </BTModal.Footer>
    </BTModal>
  );
};

export default Modal;
