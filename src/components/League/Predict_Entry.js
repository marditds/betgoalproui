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

    // setValue((preVal) => value++);

    console.log('PREDITCT');
    return (
        <Container fluid>
            <Container>
                <Back />
                <h2>Make Your Picks for {league.name}</h2>
                <Row>
                    <Col className='d-flex justify-content-between'>
                        {league.clubs[1].name}
                        <Counter value={value} />
                    </Col>

                    <Col className='d-flex justify-content-between'>
                        <Counter value={value} />
                        {league.clubs[7].name}
                    </Col>

                </Row>
                {/* <Row className='match'>
                    <Form.Group as={Col} controlId="formGridEmail" className='d-flex justify-content-between'>
                        <Form.Label>{league.clubs[1].name}</Form.Label>
                        <Form.Control type="number" value={value} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" className='d-flex justify-content-between'>
                        <Form.Control type="number" />
                        <Form.Label>{league.clubs[7].name}</Form.Label>
                    </Form.Group>
                </Row> */}
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
