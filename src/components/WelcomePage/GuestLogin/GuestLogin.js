// import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './GuestLogin.css';

// export const GuestLogin = ({ guestName, handleGuestLogin, updateGuestName }) => {
export const GuestLogin = ({ handleGuestLogin }) => {

    // const [gName, setGName] = useState(guestName);
    // const [showMsg, setShowMsg] = useState(false);

    // useEffect(() => {
    //     setGName(guestName);
    // }, [guestName]);

    // const onGuestNameChange = (e) => {
    //     setGName(preVal => e.target.value);
    //     updateGuestName(preVal => e.target.value);
    //     // if (e.target.value.length < 2) {
    //     //     setShowMsg(true);
    //     // } else {
    //     //     setShowMsg(false);
    //     // }

    // }

    return (
        <Container className='guest--login--body'>
            {/* <Form> */}
            {/* <Form.Group className="mb-3" controlId="guestName">
                    <Form.Label>Guest Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={gName}
                        onChange={onGuestNameChange}
                        placeholder="Name"
                        className='input--field' /> 
                </Form.Group> */}

            <Button
                variant="primary"
                type="submit"
                onClick={handleGuestLogin}
                className='guest--lgn--btn'>
                Continue as a Guest
            </Button>
            {/* </Form> */}
        </Container>
    )
}
