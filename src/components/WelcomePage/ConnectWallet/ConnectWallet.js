import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './ConnectWallet.css'

export const ConnectWallet = ({ connectWallet }) => {
    return (
        <Container className='cnnct--body'>
            {/* <div className='cnnct--btn'> */}
            <Button onClick={connectWallet} className='cnnct--btn w-100'>Connect Wallet</Button>
            {/* </div> */}
        </Container>
    )
}
