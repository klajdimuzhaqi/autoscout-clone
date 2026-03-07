import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditCar = ({ open, close }) => {

    return (


        <>
            <Modal show={open} onHide={close} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicMake">
                            <Form.Label>Make</Form.Label>
                            <Form.Control type="text" placeholder="Make" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicModel">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" placeholder="Model" />
                        </Form.Group>


                        <Form.Label>Registration</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example">
                            <option>Registration</option>
                            <option value="1">2020</option>
                            <option value="2">2021</option>
                            <option value="3">2022</option>
                            <option value="4">2023</option>
                            <option value="5">2024</option>
                            <option value="6">2025</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="formBasicAlimention">
                            <Form.Label>Alimention</Form.Label>
                            <Form.Control type="text" placeholder="Alimention" />
                        </Form.Group>


                        <Form.Label>Transmision</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example">
                            <option>Transmision</option>
                            <option value="1">Manual</option>
                            <option value="2">Automatic</option>
                        </Form.Select>

                        <Button className="float-start" variant="secondary" onClick={close}>
                            Close
                        </Button>
                        <Button className="float-end" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditCar;