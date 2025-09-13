import React, { useState } from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import './NavMenu.css'
// import hashpackLogo from '../../assets/hashpackLogo.png'
import { isChrome } from 'react-device-detect';
import { BrowserDetection } from '../BrowserDetection/BrowserDetection';
import { GrClose } from 'react-icons/gr';

// export const NavMenu = ({ pairingData, connectWallet, disconnectPairing }) => {
export const NavMenu = ({ pairingData, connectWallet }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>


            {show ?
                // <Container className='w-100'>
                <div className='mt-1 position-fixed w-100' style={{ zIndex: '9999', bottom: '0px' }}>
                    <BrowserDetection
                        detectionMsg={
                            <div className='w-100 d-flex'>
                                To connect your wallet, please use Chrome's HashPack™ extension.

                                <span className='mt-auto ms-auto me-sm-4 me-3' style={{ cursor: 'pointer' }}>
                                    <GrClose onClick={handleClose} />
                                </span>
                            </div>
                        } />
                </div>
                // </Container>
                : null
            }


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
                                    <Button onClick={!isChrome ? handleShow : connectWallet}
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
