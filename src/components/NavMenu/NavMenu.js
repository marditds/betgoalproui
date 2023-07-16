import React from 'react'
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap'
import './NavMenu.css'
import hashpackLogo from '../../assets/hashpackLogo.png'


export const NavMenu = ({ pairingData, connectWallet, disconnectPairing }) => {



    return (
        <>
            <Navbar collapseOnSelect expand="sm"
                fixed='bottom' className='navbar--body'
            >
                <Container>
                    <Navbar.Brand href="/" className='navbar--logo'>
                        BetGoalPro
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className='ms-auto d-flex align-items-center justify-content-end'>
                        {/* <Nav.Link href='/me' className=' text-lg-start text-end navbar--navlink' >
                            Profile
                        </Nav.Link> */}

                        {/* <Nav.Link href='/about'
                                className='navbar--navlink'
                            >
                                About
                            </Nav.Link> */}

                        {!pairingData ?
                            <Nav.Link
                                className='navbar--navlink'
                            >
                                <span className='p-2'>
                                    <Button onClick={connectWallet}
                                        className='cnnct--wllt'
                                    >
                                        Connect{" "}
                                        {/* <Image src={hashpackLogo} fluid /> */}
                                        Wallet
                                    </Button>

                                </span>
                            </Nav.Link>
                            :
                            <>
                                <Nav.Link href='/me' className=' text-lg-start text-end navbar--navlink' >
                                    Profile
                                </Nav.Link>
                            </>
                        }


                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar >
        </>
    )
}
