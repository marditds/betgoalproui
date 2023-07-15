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
                    <Navbar.Brand href="/" className='navbar--logo'>BetGoalPro</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/me' className=' text-lg-start text-end navbar--navlink' >
                            Profile
                        </Nav.Link>
                        {/* {!pairingData ?
                            <Nav.Link
                                onClick={connectWallet}
                                className='navbar--navlink' >
                                Connect Wallet
                            </Nav.Link>
                            : <>
                                <Nav.Link href='/me' className=' text-lg-start text-end navbar--navlink' >
                                    Profile
                                </Nav.Link> 
                            </>
                        }  */}


                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}
