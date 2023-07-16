import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import './ConnectWallet.css';
import hashpackLogo from '../../../assets/hashpackLogo.png';

export const ConnectWallet = ({ connectWallet }) => {
    return (
        <Container className='cnnct--body'>
            {/* <div className='cnnct--btn'> */}
            <Button onClick={connectWallet} className='cnnct--btn w-100'>
                Connect Wallet
                <Image src={hashpackLogo} fluid />
            </Button>
            {/* </div> */}
        </Container>
    )
}
