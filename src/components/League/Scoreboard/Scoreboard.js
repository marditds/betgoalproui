import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { leagues } from '../../../data/leagues';
import { Back } from '../../Back-Btn/Back';
import { ScoreboardChart } from './ScoreboardChart';
import { OtherLeaguesScoreboard } from './OtherLeaguesScoreboard';
import './Scoreboard.css';

export const Scoreboard = () => {
    // export const Scoreboard = ({ pairingData }) => {

    let { leagueAlias } = useParams();
    // const navigate = useNavigate();

    const league = leagues.find((league) => league.alias === leagueAlias);

    useEffect(() => {
        document.title = `Scoreboard | ${league.name} | BetGoalPro`;
    })

    // useEffect(() => {
    //     if (!pairingData || !pairingData.accountIds) {
    //         navigate('/');
    //     }

    //     document.title = `BetGoalPro | ${league.name} | Scoreboard`;

    // }, [pairingData, navigate]
    // )

    return (
        <Container fluid>
            <Container className='scoreboard--body'>
                <Back />

                <Row>

                    <ScoreboardChart league={league} />

                    <Col lg={5} className='mt-4 mt-lg-0 d-flex flex-column-reverse flex-lg-column'>
                        <OtherLeaguesScoreboard leagues={leagues} />

                        <Row>
                            <Col className='mt-0 mt-lg-3 mb-3'>
                                <Link
                                    to={`/leagues/${league.alias}/picks`}
                                    className='sb--btn'
                                >
                                    Make Your Picks for {league.name}
                                    <Image src={league.logo}
                                        style={{ maxHeight: "36px" }}
                                        className='ms-3 league--logo--chart' fluid />
                                </Link>
                                {/* /leagues/Bundesliga/picks */}
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}
