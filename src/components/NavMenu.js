import React from 'react'
import { Container, Navbar, NavDropdown, Form, Nav } from 'react-bootstrap'


export const NavMenu = ({ pairingData, connectWallet, disconnectPairing }) => {



    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
                fixed='bottom'
            >
                <Container>
                    <Navbar.Brand href="/" >TOTO HBAR</Navbar.Brand>
                    <Nav>
                        {!pairingData ?
                            <Nav.Link
                                onClick={connectWallet}
                            >
                                Connect Wallet
                            </Nav.Link>
                            : <>
                                <Nav.Link href='/me' className=' text-lg-start text-end' >
                                    Profile
                                </Nav.Link>
                                {/* <NavDropdown title={pairingData.accountIds}  >
                                    <NavDropdown.Item href="/me"
                                        className=' text-lg-start text-end'
                                    >
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => disconnectPairing(pairingData)}
                                        className=' text-lg-start text-end '
                                    >
                                        Disconnect
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </>
                        }

                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}
