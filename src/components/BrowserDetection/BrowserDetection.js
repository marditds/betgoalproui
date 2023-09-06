import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsExclamationCircle } from 'react-icons/bs';
import { isChrome } from 'react-device-detect';
import { browserName } from 'react-device-detect';


export const BrowserDetection = ({ detectionMsg }) => {

    const chrome = browserName == 'Chrome';

    return (
        <>
            {!chrome ?

                <Container>
                    <Row className='justify-content-start'>
                        <Col style={{ color: 'black', backgroundColor: "red", paddingTop: '15px', paddingBottom: '15px', borderRadius: '0.375rem' }}>
                            <div className='w-100 d-flex align-items-center'>
                                <BsExclamationCircle size={38} className='me-2' />
                                {detectionMsg}
                            </div>
                        </Col>
                    </Row>
                </Container>

                : null}
        </>
    )
}
