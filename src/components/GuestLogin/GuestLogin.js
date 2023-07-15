import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const GuestLogin = ({ guestName, handleGuestLogin, updateGuestName }) => {

    const [gName, setGName] = useState(guestName);

    useEffect(() => {
        setGName(guestName);
    }, [guestName]);

    const onGuestNameChange = (event) => {
        setGName(preVal => event.target.value);
        updateGuestName(preVal => event.target.value);
    }


    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="guestName">
                    <Form.Label>Guest Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={gName}
                        onChange={onGuestNameChange}
                        // defaultValue={""}
                        placeholder="Name" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleGuestLogin}>
                    Login as a Guest
                </Button>
            </Form>
        </Container>
    )
}
