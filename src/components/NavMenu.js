import React from 'react'
import { Container, Navbar, Form, Nav } from 'react-bootstrap'

export const NavMenu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ToTo ETH</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form className="ms-lg-auto w-50">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className=""
                                aria-label="Search"
                            /></Form>
                        <Nav className='ms-lg-auto text-end'>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#connectWallet">Connect Wallet</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
