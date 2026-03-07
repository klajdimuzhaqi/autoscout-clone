import { Modal, Button } from "react-bootstrap";

const DeleteCar = ({ show, close, onConfirm }) => {
    return (
        <Modal show={show} onHide={close} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Car</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Are you sure you want to delete it?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteCar;