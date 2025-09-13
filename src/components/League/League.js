import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { leagues } from '../../data/leagues'
import { Back } from '../Back-Btn/Back'
import './League.css'


// export const League = ({ pairingData }) => {
export const League = () => {

    let { leagueAlias } = useParams();
    // const navigate = useNavigate();

    const league = leagues?.find((league) => league.alias === leagueAlias)

    console.log(league.name);

    console.log(league.clubs);

    useEffect(() => {
        document.title = `${league.name} | BetGoalPro`;
    })

    // useEffect(() => {
    //     if (!pairingData || !pairingData.accountIds) {
    //         navigate('/');
    //     }

    //     document.title = `BetGoalPro | ${league.name}`;


    // }, [pairingData, navigate]
    // )

    // console.log('league pairing: ' + pairingData);

    return (
        <Container fluid className='league--body'
            style={{ background: `url(${league.logo})` }}
        >

            <Container>
                <Back />
                <Link to={`./picks`} className='league--a'>
                    <Row className='league--row'>
                        <Col className='d-flex justify-content-center align-items-center league--col'>
                            <h3>YOUR PICKS</h3>
                        </Col>
                    </Row>
                </Link>

                {/* <span className='d-none'>this is pairing data: {pairingData?.accountIds}</span> */}
                <Link to={`./scoreboard`} className='league--a'>
                    <Row className='league--row'>
                        <Col className='d-flex justify-content-center align-items-center league--col'>
                            <h3>SCOREBOARD</h3>
                        </Col>
                    </Row>
                </Link>

            </Container>
        </Container>
    )
}
