import React from 'react';
import { Container } from 'react-bootstrap';
import './WelcomePage.css';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { GuestLogin } from './GuestLogin/GuestLogin';

export const WelcomePage = ({ connectWallet, guestName, handleGuestLogin, updateGuestName, guestNameMsg }) => {
    return (
        <Container className='welcome--body'>
            <span className='w-100'>
                <ConnectWallet
                    connectWallet={connectWallet} />
                <GuestLogin
                    guestName={guestName}
                    handleGuestLogin={handleGuestLogin}
                    updateGuestName={updateGuestName}
                    guestNameMsg={guestNameMsg} />
            </span>
        </Container>
    )
}
