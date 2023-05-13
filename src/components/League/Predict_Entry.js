import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { Counter } from './Counter';
import './Predict_Entry.css'



export const Predict_Entry = ({ league }) => {


    const [value, setValue] = useState(0);

    console.log('PREDITCT');
    return (
        <Col>
            <h2>Make Your Picks for {league.name}</h2>
            <div className="predict--entry--div">
                <Row className='match--row pt-4 pb-4'>
                    <Col className='d-flex justify-content-end align-items-center '>
                        <p className='my-0 me-3'>
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
                        </p>
                        <Counter value={value} />

                    </Col>

                    <Col className='d-flex justify-content-start align-items-center'>
                        <Counter value={value} />

                        <p className='my-0 ms-3'>
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
                        </p>
                    </Col >


                </Row>
                <Row className='match--row pt-4 pb-4'>
                    <Col className='d-flex justify-content-end align-items-center'>

                        <p className='my-0 me-3'>
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
                        </p>
                        <Counter value={value} />

                    </Col>

                    <Col className='d-flex justify-content-start align-items-center'>

                        <Counter value={value} />

                        <p className='my-0 ms-3'>
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
                        </p>

                    </Col>

                </Row>


                <Row className='match--row pt-4 pb-4'>
                    <Col className='d-flex justify-content-end align-items-center'>

                        <p className='my-0 me-3'>
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
                        </p>
                        <Counter value={value} />

                    </Col>

                    <Col className='d-flex justify-content-start align-items-center'>

                        <Counter value={value} />

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

            </div>
        </Col>
    )
}
