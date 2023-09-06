import React, { useState } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import './ConnectWallet.css';
import hashpackLogo from '../../../assets/hashpackLogo.png';
import { BrowserDetection } from '../../BrowserDetection/BrowserDetection';
import { isChrome } from 'react-device-detect';
import { GrClose } from 'react-icons/gr';

export const ConnectWallet = ({ connectWallet }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <>

            <Container className='cnnct--body position-relative'>
                {/* <div className='cnnct--btn'> */}
                {show ?
                    <div className='w-100 d-flex'
                        style={{ maxWidth: "1272px", zIndex: "9999", }}>
                        <BrowserDetection
                            detectionMsg={<div className='d-flex w-100'>
                                To connect your wallet, please use Chrome.

                                <span className='mt-auto ms-auto me-sm-4 me-3' style={{ cursor: 'pointer' }}>
                                    <GrClose onClick={handleClose} />
                                </span>
                            </div>
                            } />
                    </div>
                    : null}


                <Button onClick={!isChrome ? handleShow : connectWallet} className='cnnct--btn w-100'>
                    {/* <Button onClick={connectWallet} className='cnnct--btn w-100'> */}
                    Connect Wallet
                    <Image src={hashpackLogo} fluid />
                </Button>
                {/* </div> */}
            </Container>
        </>
    )
}
