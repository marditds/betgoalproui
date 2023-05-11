import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './NavMenu.css'


export const NavMenu = ({ pairingData, connectWallet, disconnectPairing }) => {



    return (
        <>
            <Navbar collapseOnSelect expand="lg"
                fixed='bottom' className='navbar--body'
            >
                <Container>
                    <Navbar.Brand href="/" className='navbar--logo'>TOTO HBAR</Navbar.Brand>
                    <Nav>
                        {!pairingData ?
                            <Nav.Link
                                onClick={connectWallet}
                                className='navbar--navlink' >
                                Connect Wallet
                            </Nav.Link>
                            : <>
                                <Nav.Link href='/me' className=' text-lg-start text-end navbar--navlink' >
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
