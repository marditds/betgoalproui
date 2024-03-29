import React, { useEffect } from 'react'
import { Leagues } from './Leagues'
import { CurrentMatches } from './CurrentMatches'
import "./Home.css"

export const Home = () => {

    useEffect(() => {
        document.title = 'Home | BetGoalPro';
    })

    return (
        <div className='home--body'>
            {/* <Row className='d-flex flex-column'> */}
            {/* <Row > */}
            {/* <Col > */}
            <CurrentMatches />
            {/* </Col> */}

            {/* <Col> */}
            <Leagues />
            {/* </Col> */}


            {/* </Row> */}
        </div>
    )
}
