import React from 'react'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { leagues } from '../data/leagues'
import './styles.css'

export const Leagues = () => {
    return (

        <Row>
            {leagues.map((league) => {
                return (

                    <Col key={league.id}>
                        <Link to={`/leagues/${league.alias}`}>
                            {/* {league.name} */}
                            <Image src={league.logo} fluid className='club--logo' />
                        </Link>
                    </Col>



                )
            })}
        </Row>



    )
}
