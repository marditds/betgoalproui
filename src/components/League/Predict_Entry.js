import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { leagues } from '../../data/leagues'
import { Counter } from './Counter';
import { Back } from '../Back-Btn/Back'
import './Predict_Entry.css'



export const Predict_Entry = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    const [value, setValue] = useState(0);

    console.log('PREDITCT');
    return (
        <Container fluid>
            <Container>
                <Back />
                <h2>Make Your Picks for {league.name}</h2>
                <Row className='match--row'>
                    <Col className='d-flex justify-content-between'>

                        {league.clubs[1].name.split(" ").slice(0, 3).slice(0, 2).map((team, i) =>
                            <React.Fragment key={i}>
                                {team.slice(0, 3)}
                                {" "}
                            </React.Fragment>
                        )}
                        <Counter value={value} />

                    </Col>

                    <Col className='d-flex justify-content-between'>
                        <Counter value={value} />
                        {league.clubs[7].name.split(" ").slice(0, 2).map((team, i) =>
                            <React.Fragment key={i}>
                                {team.slice(0, 3)}
                                {" "}
                            </React.Fragment>
                        )}

                    </Col >

                </Row>
                <Row className='match--row'>
                    <Col className='d-flex justify-content-between'>

                        {league.clubs[3].name.split(" ").slice(0, 2).map((team, i) =>
                            <React.Fragment key={i}>
                                {team.slice(0, 3)}
                                {" "}
                            </React.Fragment>
                        )}
                        <Counter value={value} />

                    </Col>

                    <Col className='d-flex justify-content-between'>

                        <Counter value={value} />
                        {league.clubs[6].name.split(" ").slice(0, 2).map((team, i) =>
                            <React.Fragment key={i}>
                                {team.slice(0, 3)}
                                {" "}
                            </React.Fragment>
                        )}

                    </Col>

                </Row>

                <Row>
                    <Col>Team A</Col>
                    <Col>Team B</Col>
                </Row>
                <Row>
                    <Col>Team A</Col>
                    <Col>Team B</Col>
                </Row>
                <Row>
                    <Col>Team A</Col>
                    <Col>Team B</Col>
                </Row>
            </Container>
        </Container>
    )
}
