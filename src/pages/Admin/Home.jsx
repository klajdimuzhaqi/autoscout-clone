import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavAdmin from "./Nav";
import EditCar from './EditCarModal';

const HomeAdmin = () => {

    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    }

    return (
        <>
            <NavAdmin />
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
                            <Button variant="primary" onClick={handleEdit}>Edit</Button>
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
                            <Button variant="primary" onClick={handleEdit}>Edit</Button>
                        </td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mercedes</td>
                        <td>G-Class</td>
                        <td>2018</td>
                        <td>51000</td>
                        <td>Diesel</td>
                        <td>Automatic</td>
                        <td>
                            <Button variant="primary" onClick={handleEdit}>Edit</Button>
                        </td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mercedes</td>
                        <td>C-class</td>
                        <td>2018</td>
                        <td>128000</td>
                        <td>Gasoline</td>
                        <td>Manual</td>
                        <td>
                            <Button variant="primary" onClick={handleEdit}>Edit</Button>
                        </td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table >

            <EditCar open={edit} close={setEdit} />
        </>

    );
}

export default HomeAdmin;