import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, Form, Button, Modal } from 'react-bootstrap'
import { Counter } from './Counter';
import './PredictEntry.css'



export const PredictEntry = ({ league, pairingData, connectWallet }) => {

    let { leagueAlias } = useParams();

    const [isCompleted, setIsCompleted] = useState(false);
    const [show, setShow] = useState(true);
    const [value, setValue] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsCompleted((preVal) => true);
    }

    const handleReset = () => {
        console.log('reset clicked!');
        setValue((preVal) => 0);
        setResetKey((preVal) => preVal + 1);
    }

    useEffect(() => {
        setIsCompleted(preVal => false);
    }, [leagueAlias]);

    console.log("isCompleted Status: " + isCompleted);

    return (
        <Col>
            {!isCompleted ?
                <>
                    <div className='d-flex align-items-center'>
                        <h2>Make Your Picks for {league.name}</h2>
                        <Image
                            src={league.logo}
                            style={{ maxHeight: "36px" }}
                            className='ms-3 league--logo--entry'
                            fluid />
                    </div>
                    <div className="predict--entry--div">
                        <Form className='predict--entry--form'>

                            <Form.Group className='myFG'>
                                <Row className='match--row pt-4 pb-4'>
                                    <Col className='d-flex justify-content-end align-items-center '>
                                        <Form.Label className='my-0 me-3'>
                                            {league.clubs[1].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[1].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[1].name
                                            }
                                        </Form.Label>
                                        {/* <Form.Control
                                    type='number'
                                    value={value}
                                    className='team--points'
                                    readOnly
                                /> */}
                                        <Counter key={`${value}-${resetKey}`} value={value} />

                                    </Col>


                                    <Col className='d-flex justify-content-start align-items-center'>
                                        <Counter key={`${value}-${resetKey}`} value={value} />

                                        <Form.Label className='my-0 ms-3'>
                                            {league.clubs[7].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[7].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[7].name
                                            }
                                        </Form.Label>
                                    </Col >
                                </Row>
                            </Form.Group>




                            <Form.Group className='myFG'>

                                <Row className='match--row pt-4 pb-4'>
                                    <Col className='d-flex justify-content-end align-items-center'>

                                        <Form.Label className='my-0 me-3'>
                                            {league.clubs[3].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[3].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[3].name
                                            }
                                        </Form.Label>
                                        <Counter key={`${value}-${resetKey}`} value={value} />
                                    </Col>

                                    <Col className='d-flex justify-content-start align-items-center'>

                                        <Counter key={`${value}-${resetKey}`} value={value} />

                                        <Form.Label className='my-0 ms-3'>
                                            {league.clubs[6].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[6].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[6].name
                                            }
                                        </Form.Label>
                                    </Col>

                                </Row>
                            </Form.Group>


                            <Form.Group className='myFG'>

                                <Row className='match--row pt-4 pb-4'>
                                    <Col className='d-flex justify-content-end align-items-center'>

                                        <Form.Label className='my-0 me-3'>
                                            {league.clubs[5].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[5].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[5].name
                                            }
                                        </Form.Label>
                                        <Counter key={`${value}-${resetKey}`} value={value} />


                                    </Col>

                                    <Col className='d-flex justify-content-start align-items-center'>

                                        <Counter key={`${value}-${resetKey}`} value={value} />


                                        <p className='my-0 ms-3'>
                                            {league.clubs[4].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[4].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[4].name
                                            }
                                        </p>

                                    </Col>

                                </Row>
                            </Form.Group>


                            <Form.Group className='myFG'>

                                <Row className='match--row pt-4 pb-4'>
                                    <Col className='d-flex justify-content-end align-items-center'>

                                        <Form.Label className='my-0 me-3'>
                                            {league.clubs[8].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[8].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[8].name
                                            }
                                        </Form.Label>
                                        <Counter key={`${value}-${resetKey}`} value={value} />


                                    </Col>

                                    <Col className='d-flex justify-content-start align-items-center'>

                                        <Counter key={`${value}-${resetKey}`} value={value} />


                                        <p className='my-0 ms-3'>
                                            {league.clubs[4].name.split(" ").slice(0, 2).length > 1
                                                ?
                                                league.clubs[4].name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                league.clubs[4].name
                                            }
                                        </p>

                                    </Col>

                                </Row>
                            </Form.Group>

                            <div className='d-flex justify-content-end mb-4 me-3'>
                                <Button className="picks--btn--rst me-3 ms-3 ms-sm-0" onClick={handleReset}>
                                    Reset
                                </Button>
                                {/* {!pairingData ?
                                    <Button type="button" className="picks--btn--smbt"
                                        onClick={connectWallet
                                        }>
                                        Connect Wallet to Submit
                                    </Button>
                                    : */}
                                <Button
                                    type={!pairingData ? "button" : "submit"}
                                    className="picks--btn--smbt"
                                    onClick={!pairingData ? connectWallet : handleSubmit}>
                                    Submit
                                </Button>
                                {/* } */}

                            </div>
                        </Form>
                    </div>
                </>
                :
                <>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        animation={false}
                        centered
                        className='modal--content'
                    >
                        <Modal.Header className='modal--header'>
                            <Modal.Title>You're all done!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal--body'>
                            <p>Please check back later for more matches.</p>
                            <div className='d-flex justify-content-end'>
                                <Button onClick={() => setShow(false)}>Close</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <h2>No more matches. Please check back later.</h2>
                </>
            }
        </Col>
    )
}
