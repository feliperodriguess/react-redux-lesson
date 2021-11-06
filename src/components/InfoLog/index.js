import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Logout from "../Logout/Logout"
import Login from "../Login/Login"

export const InfoLog = () => {
    const [name, setName] = useState('');
    return (
        <Form>
            <h1 className="mt-5">Login</h1>
            <Row className="align-items-center">
                <Col sm={6} className="my-1">
                    <Form.Control type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col sm={6} >
                    <Login name={name} className='mx-1'>Login</Login>
                    <Logout className='mx-1' />
                </Col>
            </Row>
            <hr />
        </Form>
    )
}