import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WelcomePage.css';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { GuestLogin } from './GuestLogin/GuestLogin';
import { BrowserDetection } from '../BrowserDetection/BrowserDetection';
import { isChrome } from 'react-device-detect';


export const WelcomePage = ({ connectWallet, guestName, handleGuestLogin, updateGuestName, guestNameMsg }) => {

    useEffect(() => {
        document.title = 'Welcome | BetGoalPro';
    })

    return (
        <Container className='welcome--body'>

            <div className='position-absolute' style={{ marginTop: '-500px', textAlign: 'left', paddingLeft: '12px', paddingRight: '12px', }}>
                <BrowserDetection detectionMsg={"To connect your wallet, please use Chrome."} />
            </div>

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
