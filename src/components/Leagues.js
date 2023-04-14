import React from 'react'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { leagues } from '../data/leagues'
import './styles.css'

export const Leagues = () => {
    return (
        <ListGroup
            defaultActiveKey="#link1"
            variant="flush"
        >
            <Row>
                {leagues.map((league) => {
                    return (

                        <Col key={league.id}>
                            <Link to={`/leagues/${league.alias}`}>
                                {league.name}
                                <Image src={league.logo} fluid className='club--logo' />
                            </Link>
                        </Col>


                        // <ListGroup.Item action href={`/leagues/${league.alias}`} key={league.id} className='d-flex align-items-center'>
                        //     {/* {league.name} */}
                        //     <Image src={league.logo} fluid className='club--logo' />
                        // </ListGroup.Item>
                    )
                })}
            </Row>



        </ListGroup>
    )
}
