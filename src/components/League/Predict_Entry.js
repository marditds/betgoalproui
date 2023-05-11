import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { leagues } from '../../data/leagues'
import { Counter } from './Counter';
import { Back } from '../Back-Btn/Back'
import './Predict_Entry.css'



export const Predict_Entry = ({ league }) => {


    const [value, setValue] = useState(0);

    console.log('PREDITCT');
    return (
        <Col>
            <Row className='match--row' >
                <Col className='d-flex justify-content-end align-items-center'>

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
                    <Counter value={value} />

                </Col>

                <Col className='d-flex justify-content-start align-items-center'>
                    <Counter value={value} />
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

                </Col >


            </Row>
            <Row className='match--row'>
                <Col className='d-flex justify-content-end align-items-center'>

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
                    <Counter value={value} />

                </Col>

                <Col className='d-flex justify-content-start align-items-center'>

                    <Counter value={value} />
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

                </Col>

            </Row>



        </Col>
    )
}
