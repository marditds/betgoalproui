import React from 'react'
import { Leagues } from './Leagues'
import { CurrentMatches } from './CurrentMatches'
import "./Home.css"

export const Home = () => {
    return (
        <>
            {/* <Row className='d-flex flex-column'> */}
            {/* <Row > */}
            {/* <Col > */}
            <CurrentMatches />
            {/* </Col> */}

            {/* <Col> */}
            <Leagues />
            {/* </Col> */}


            {/* </Row> */}
        </>
    )
}
