import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const AuthCheck = ({ totoId, handleChange, handleSubmit }) => {


    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="totoIdForm">
                    <Form.Label>Toto ID:</Form.Label>
                    <Form.Control type="id" value={totoId}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
