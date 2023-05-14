import React, { useState, useEffect } from 'react'
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

    const onUsernameChange = (event) => {
        setUsername(preVal => event.target.value);
    }

    const onFirstnameChange = (event) => {
        setFirstname(preVal => event.target.value);
    }

    const onLastnameChange = (event) => {
        setLastname(preVal => event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(preVal => event.target.value);
    }

    const handleSaveChanges = (event) => {
        event.preventDefault();
        setUserData({ ...userData, username, firstname, lastname, email });
    }

    console.log(userData.username + ", " + userData.firstname + ", " + userData.lastname + ", " + userData.email)

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
                        <Col>Account Balance: {balance} HBAR</Col>
                        <Col>Wallet ID: {pairingData.accountIds}</Col>
                        <Col>{trackRecord}Winnign Streak</Col>
                    </Col>
                </Row>
                <Row className='flex-column'>
                    <h4>Settings</h4>
                    <Col>
                        <Form >
                            {/* name lastname username email DOB */}
                            <Row>

                                {/* USERNAME */}
                                <Form.Group as={Col} md={4} controlId="usernameField" className='profile--form--group'>
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control
                                        type='username'
                                        value={username}
                                        onChange={onUsernameChange}
                                        className='profile--form--control' />
                                </Form.Group>

                                {/* FIRST NAME */}
                                <Form.Group as={Col} md={4} controlId="firstnameField" className='profile--form--group'>
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control
                                        type='name'
                                        value={firstname}
                                        onChange={onFirstnameChange}
                                        className='profile--form--control' />
                                </Form.Group>

                                {/* LAST NAME */}
                                <Form.Group as={Col} md={4} controlId="lastnameField" className='profile--form--group'>
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type='name'
                                        value={lastname}
                                        onChange={onLastnameChange}
                                        className='profile--form--control' />
                                </Form.Group>
                            </Row>
                            <Row>

                                {/* EMAIL */}
                                <Form.Group as={Col} md={6} controlId="emailField" className='profile--form--group'>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type='email'
                                        vaue={email}
                                        onChange={onEmailChange}
                                        className='profile--form--control' />
                                </Form.Group>

                                {/* DATE OF BIRTH */}
                                <Form.Group as={Col} md={6} controlId="dateField" className='profile--form--group'>
                                    <Form.Label>Date of Birth:</Form.Label>
                                    <Form.Control type='date'
                                        className='profile--form--control' />
                                </Form.Group>


                                <Col className='d-flex justify-content-sm-end justify-content-evenly align-items-end profile--btns'>

                                    <Button
                                        className='profile--dscnnct--btn'
                                        onClick={() => disconnectPairing(pairingData)}>Disconnect Wallet</Button>

                                    <Button className='profile--save--btn' type='submit' onClick={handleSaveChanges}>Save Changes</Button>

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
