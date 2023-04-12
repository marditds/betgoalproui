import React, { useState } from 'react'
import { Container, Navbar, Form, Nav } from 'react-bootstrap'
import { HashConnect } from 'hashconnect'


export const NavMenu = () => {
    const [accountId, setAccountId] = useState("");

    let hashconnect = new HashConnect(true);

    let appMetadata = {
        name: "totoFootball",
        description: "prediction app",
    }

    let initData = hashconnect.init(appMetadata, "testnet", false);


    hashconnect.pairingEvent.once((pairingData) => {
        console.log('wallet paired')
        console.log(pairingData)

        setAccountId(pairingData.accountIds)
        console.log('THIS IS ACCOUNT ID: ', pairingData.accountIds);
    })


    // console.log(hashconnect.status);

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
                            {!accountId ?
                                <Nav.Link onClick={async () => hashconnect.connectToLocalWallet(initData.pairingString)
                                }>Connect Wallet</Nav.Link>
                                :
                                <Nav.Link onClick={async () => hashconnect.disconnect(initData.pairingString)}>Disconnect Wallet - {accountId}</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
