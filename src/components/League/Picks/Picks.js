import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { leagues } from '../../../data/leagues';
import { Back } from '../../Back-Btn/Back';
import { PredictEntry } from './PredictEntry';
import { OtherLeaguesPicks } from './OtherLeaguesPicks';
import './Picks.css';


export const Picks = ({ pairingData, connectWallet }) => {

    let { leagueAlias } = useParams();
    const navigate = useNavigate();

    const league = leagues.find((league) => league.alias === leagueAlias);

    useEffect(() => {
        document.title = `Picks | ${league.name} | BetGoalPro`;
    })

    // useEffect(() => {
    //     if (!pairingData || !pairingData.accountIds) {
    //         navigate('/');
    //     }

    //     document.title = `BetGoalPro | ${league.name} | Picks`;

    // }, [pairingData, navigate]
    // )

    return (
        <Container fluid>
            <Container className='stuff picks--body'>
                <Back />

                <Row>

                    <PredictEntry league={league} pairingData={pairingData} connectWallet={connectWallet} />

                    <Col lg={5} className='mt-4 mt-lg-0 d-flex flex-column-reverse flex-lg-column'>

                        <OtherLeaguesPicks leagues={leagues} />

                        <Row>
                            <Col className='mt-0 mt-lg-3 mb-3'>
                                <Link
                                    to={`/leagues/${league.alias}/scoreboard`}
                                    className='picks--btn'
                                >
                                    View {league.name}'s Scoreboard
                                    <Image
                                        src={league.logo}
                                        style={{ maxHeight: "36px" }}
                                        className='ms-3 league--logo--entry'
                                        fluid
                                    />
                                </Link>
                            </Col>
                        </Row>
                        {/* leagues/Bundesliga/scoreboard */}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
