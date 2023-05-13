import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Counter } from './Counter';
import './Predict_Entry.css'



export const Predict_Entry = ({ league }) => {

    console.log('PREDITCT');
    return (
        <Col>
            <h2>Make Your Picks for {league.name}</h2>
            <div className="predict--entry--div">
                <Form className='predict--entry--form'>

                    <Form.Group>
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
                                <Counter />

                            </Col>

                            {/* <span className='predict--entry--vs'>VS</span> */}

                            <Col className='d-flex justify-content-start align-items-center'>
                                <Counter />

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




                    <Form.Group>
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
                                <Counter />
                            </Col>

                            <Col className='d-flex justify-content-start align-items-center'>

                                <Counter />
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


                    <Form.Group>
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
                                <Counter />

                            </Col>

                            <Col className='d-flex justify-content-start align-items-center'>

                                <Counter />

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
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Col >
    )
}
