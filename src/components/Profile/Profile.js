import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import { Back } from '../Back-Btn/Back'
import './Profile.css'
import profPic from '../../assets/100x100.png'

export const Profile = ({ pairingData, disconnectPairing }) => {

    console.log('THIS IS PAIRING DATA IN ME2', pairingData);

    const navigate = useNavigate();
    const [username, setUsername] = useState("username");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(profPic);
    const [userData, setUserData] = useState({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        avatar: avatar
    })

    const [trackRecord, setTrackRecord] = useState("trackrecord");
    const [balance, setBalance] = useState(0);

    console.log(userData.username);

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSaveChanges = (event) => {
        event.preventDefault();
        setUserData({ ...userData, username });
    }

    useEffect(() => {
        if (!pairingData || !pairingData.accountIds) {
            navigate('/');
        }
    }, [pairingData, navigate]
    )

    return (
        <Container fluid>
            <Container style={{ color: "white" }}>
                <Back />
                <h3>Profile</h3>
                <Row>
                    <Col className='text-md-end text-center' md={6} sm={12}>
                        <Image src={userData.avatar} roundedCircle />
                    </Col>
                    <Col className='d-flex flex-column text-md-start text-center'>
                        <Col><h4>{userData.username}</h4></Col>
                        <Col>Account Balance: $ {balance}</Col>
                        <Col>Wallet ID: {pairingData.accountIds}</Col>
                        <Col>{trackRecord}</Col>
                    </Col>
                </Row>
                <Row className='flex-column'>
                    <h4>Settings</h4>
                    <Col>
                        <Form >
                            {/* name lastname username email DOB */}
                            <Row>
                                <Form.Group as={Col} md={4} controlId="usernameField" className='profile--form--group'>
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control
                                        type='username'
                                        value={username}
                                        onChange={onUsernameChange}
                                        className='profile--form--control' />
                                </Form.Group>

                                <Form.Group as={Col} md={4} controlId="firstnameField" className='profile--form--group'>
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type='name'
                                        className='profile--form--control' />
                                </Form.Group>

                                <Form.Group as={Col} md={4} controlId="lastnameField" className='profile--form--group'>
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type='name'
                                        className='profile--form--control' />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md={6} controlId="emailField" className='profile--form--group'>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type='email'
                                        className='profile--form--control' />
                                </Form.Group>

                                <Form.Group as={Col} md={6} controlId="dateField" className='profile--form--group'>
                                    <Form.Label>Date of Birth:</Form.Label>
                                    <Form.Control type='date'
                                        className='profile--form--control' />
                                </Form.Group>

                                <Col className='d-flex justify-content-sm-end justify-content-evenly align-items-end profile--btns'>

                                    <Button onClick={() => disconnectPairing(pairingData)}>Disconnect Wallet</Button>

                                    <Button type='submit' onClick={handleSaveChanges}>Save Changes</Button>

                                </Col>
                            </Row>

                        </Form>
                    </Col>
                    <Col className='d-flex justify-content-end'></Col>
                </Row>
            </Container>
        </Container >
    )
}
