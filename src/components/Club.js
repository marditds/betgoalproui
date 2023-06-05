import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { leagues } from '../data/leagues'

export const Club = ({ pairingData }) => {

    const { leagueAlias, clubAlias } = useParams();
    const navigate = useNavigate();

    const league = leagues?.find((league) => league.alias === leagueAlias);

    const club = league?.clubs?.find((team) => team.alias === clubAlias);

    console.log("THIS IS LEAGUE: ", league);

    console.log("THIS IS CLUB: ", club);

    useEffect(() => {
        if (!pairingData || !pairingData.accountIds) {
            navigate('/');
        }
    }, [pairingData, navigate]
    )

    return (
        <div>Hello {club.name}</div>
    )
}
