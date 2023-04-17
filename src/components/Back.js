import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, BUtton, Button } from 'react-bootstrap'
import { IoIosArrowBack } from 'react-icons/io'
import './Back.css'

export const Back = () => {

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <Row>
            <Col>
                <Button onClick={handleBack} className='back--btn'>
                    <IoIosArrowBack />
                    Back
                </Button>
            </Col>
        </Row>
    )
}