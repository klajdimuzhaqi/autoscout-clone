import { useState } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import NavAdmin from "./Nav";
import EditCar from './EditCarModal';
import AddNewCar from "./AddNewCar";


const HomeAdmin = () => {

    const [edit, setEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const openEdit = () => {
        setEdit(true);
    }

    const closeEdit = () => {
        setEdit(false);
    }

    const openCreate = () => {
        setOpen(true);
    }

    const closeCreate = () => {
        setOpen(false);
    }

    return (
        <>
            <NavAdmin />

            <Container className="my-4">
                <Row>

                    <Col className="d-flex justify-content-between">
                        <span className="mb-0 ms-5">Current Cars</span>
                        <Button variant="primary" onClick={openCreate}>
                            Add new car
                        </Button>                        
                    </Col>
                </Row>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Registration</th>
                        <th>Odometer</th>
                        <th>Alimention</th>
                        <th>Transmision</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mercedes</td>
                        <td>C-class</td>
                        <td>2018</td>
                        <td>128000</td>
                        <td>Gasoline</td>
                        <td>Manual</td>
                        <td>
                            <Button variant="primary" onClick={openEdit}>Edit</Button>
                        </td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Audi</td>
                        <td>A4</td>
                        <td>2020</td>
                        <td>335000</td>
                        <td>Gasoline</td>
                        <td>Manual</td>
                        <td>
                            <Button variant="primary" onClick={openEdit}>Edit</Button>
                        </td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table >

            <EditCar open={edit} close={closeEdit} />
            <AddNewCar open={open} close={closeCreate} />
        </>

    );
}

export default HomeAdmin;