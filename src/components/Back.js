import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, BUtton, Button } from 'react-bootstrap'
import './Back.css'

export const Back = () => {
    let navigate = useNavigate();

    return (
        <Row>
            <Col>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </Col>
        </Row>
    )
}
