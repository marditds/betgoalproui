import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profPic from '../assets/100x100.png'

export const Profile = ({ pairingData }) => {

    console.log('THIS IS PAIRING DATA IN ME2', pairingData);

    const navigate = useNavigate();
    const [username, setUsername] = useState("username");
    const [trackRecord, setTrackRecord] = useState("trackrecord");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (!pairingData || !pairingData.accountIds) {
            navigate('/');
        }
    }, [pairingData, navigate]
    )

    return (
        <Container style={{ color: "white" }}>

            <h3 xs={12}>Profile</h3>
            <Row>
                <Col className='text-end'><Image src={profPic} roundedCircle /></Col>
                <Col className='d-flex flex-column'>
                    <Col>{username}</Col>
                    <Col>Account Balance: $ {balance}</Col>
                    <Col>{trackRecord}</Col>
                </Col>
            </Row>
            <Row>
                <h4>Your Picks</h4>
            </Row>
        </Container>
    )
}