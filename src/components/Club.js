import React from 'react'
import { useParams } from 'react-router-dom'
import { leagues } from '../data/leagues'

export const Club = () => {

    const { leagueAlias, clubAlias } = useParams();

    const league = leagues?.find((league) => league.alias === leagueAlias);

    const club = league?.clubs?.find((team) => team.alias === clubAlias);

    console.log("THIS IS LEAGUE: ", league);

    console.log("THIS IS CLUB: ", club);

    return (
        <div>Hello {club.name}</div>
    )
}
