import React from 'react'
import { Container, Navbar, NavDropdown, Form, Nav } from 'react-bootstrap'


export const NavMenu = ({ pairingData, connectWallet, disconnectPairing }) => {



    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">TOTO HBAR</Navbar.Brand>

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
                            {!pairingData ?
                                <Nav.Link
                                    onClick={connectWallet}
                                >
                                    Connect Wallet
                                </Nav.Link>
                                : <>
                                    <NavDropdown title={pairingData.accountIds} >
                                        <NavDropdown.Item href="/me" className=' text-lg-start text-end'>
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => disconnectPairing(pairingData)} className=' text-lg-start text-end '>
                                            Disconnect
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
