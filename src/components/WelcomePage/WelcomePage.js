import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WelcomePage.css';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { GuestLogin } from './GuestLogin/GuestLogin';
import { BrowserDetection } from '../BrowserDetection/BrowserDetection';
import { isChrome } from 'react-device-detect';
import { GrClose } from 'react-icons/gr';

export const WelcomePage = ({ connectWallet, guestName, handleGuestLogin, updateGuestName, guestNameMsg }) => {


    const [show, setShow] = useState(true);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    useEffect(() => {
        document.title = 'Welcome | BetGoalPro';
    })

    return (
        <Container className='welcome--body position-relative'>

            {/* {show ? */}
            {/* <div className='w-100 d-flex'
                style={{ maxWidth: "1272px", zIndex: "9999", }}>
                <BrowserDetection
                    detectionMsg={<div className='d-flex w-100'>
                        To connect your wallet, please use Chrome.

                        <span className='mt-auto ms-auto me-sm-4 me-3' style={{ cursor: 'pointer' }}>
                            <GrClose onClick={handleClose} />
                        </span>
                    </div>
                    } />
            </div> */}
            {/* : null} */}


            <span className='w-100 welcome--btns'>
                <ConnectWallet
                    connectWallet={connectWallet} />
                <GuestLogin
                    guestName={guestName}
                    handleGuestLogin={handleGuestLogin}
                    updateGuestName={updateGuestName}
                    guestNameMsg={guestNameMsg} />

                {/* <div className='position-absolute' style={{ marginTop: '200px' }}>Hello</div> */}

            </span>
            <div className='position-absolute text-muted' style={{ marginTop: '650px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'justify' }}>
                <Container>
                    <Row>
                        <Col>
                            BetGoalPro application uses the Hedera™ network. Hedera” is a trademark of Hedera Hashgraph, LLC. BetGoalPro is not affiliated with, sponsored, or endorsed by Hedera Hashgraph, LLC. All rights reserved.
                        </Col>
                    </Row>
                </Container>
            </div>

        </Container>
    )
}
