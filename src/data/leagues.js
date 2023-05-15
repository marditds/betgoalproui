export const logos = require.context('../assets', true);
export const leagues = [
    {
        id: 1,
        alias: "Serie_A",
        name: "SerieA",
        logo: logos("./seriea.png"),
        clubs: [
            {
                id: 1,
                name: 'AC Milan',
                alias: 'AC_Milan',
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 2,
                name: 'Atalanta',
                alias: 'Atalanta',
                win: 2,
                lose: 0,
                points: 6
            },
            {
                id: 3,
                name: 'Bologna',
                alias: 'Bologna',
                win: 5,
                lose: 0,
                points: 15
            },
            {
                id: 4,
                name: 'Cremonese',
                alias: 'Cremonese',
                win: 4,
                lose: 0,
                points: 12
            },
            {
                id: 5,
                name: 'Empoli',
                alias: 'Empoli',
                win: 1,
                lose: 0,
                points: 3
            },
            {
                id: 6,
                name: 'Fiorentina',
                alias: 'Fiorentina',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 7,
                name: 'Hellas Verona',
                alias: 'Hellas_Verona',
                win: 1,
                lose: 0,
                points: 3
            },
            {
                id: 8,
                name: 'Inter Milan',
                alias: 'Inter_Milan',
                win: 1,
                lose: 0,
                points: 3
            },
            {
                id: 9,
                name: 'Juventus',
                alias: 'Juventus',
                win: 2,
                lose: 0,
                points: 6
            },
            {
                id: 10,
                name: 'Lazio',
                alias: 'Lazio',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 11,
                name: 'Lecce',
                alias: 'Lecce',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 12,
                name: 'Monza',
                alias: 'Monza',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 13,
                name: 'Napoli',
                alias: 'Napoli',
                win: 2,
                lose: 0,
                points: 6
            },
            {
                id: 14,
                name: 'Roma',
                alias: 'Roma',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 15,
                name: 'Salernitana',
                alias: 'Salernitana',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 16,
                name: 'Sampdoria',
                alias: 'Sampdoria',
                win: 3,
                lose: 0,
                points: 9
            },
            {
                id: 17,
                name: 'Sassuolo',
                alias: 'Sassuolo',
                win: 1,
                lose: 0,
                points: 3
            },
            {
                id: 18,
                name: 'Spezia',
                alias: 'Spezia',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 19,
                name: 'Torino',
                alias: 'Torino',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 20,
                name: 'Udinese',
                alias: 'Udinese',
                win: 2,
                lose: 0,
                points: 6
            }
        ]
    },
    {
        id: 2,
        alias: "Bundesliga",
        name: "Bundesliga",
        logo: logos("./bundesliga.png"),
        clubs: [
            {
                id: 1,
                name: "B. M'gladbach",
                alias: "B._M'gladbach",
                win: 1,
                lose: 2,
                points: 3
            },
            {
                id: 2,
                name: "Bayern Munich",
                alias: "Bayern_Munich",
                win: 3,
                lose: 0,
                points: 9
            },
            {
                id: 3,
                name: "Dortmund",
                alias: "Dortmund",
                win: 1,
                lose: 1,
                points: 3
            },
            {
                id: 4,
                name: "Eintracht Fran.",
                alias: "Eintracht_Fran.",
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 5,
                name: "FC Augsburg",
                alias: "FC_Augsburg",
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 6,
                name: "FC Köln",
                alias: "FC_Köln",
                win: 0,
                lose: 1,
                points: 0
            },
            {
                id: 7,
                name: "FC Schalke 04",
                alias: "FC_Schalke_04",
                win: 1,
                lose: 1,
                points: 3
            },
            {
                id: 8,
                name: "FC Union Berlin",
                alias: "FC_Union_Berlin",
                win: 0,
                lose: 2,
                points: 0
            },
            {
                id: 9,
                name: "FSV Mainz 05",
                alias: "FSV_Mainz_05",
                win: 3,
                lose: 1,
                points: 9
            },
            {
                id: 10,
                name: "Hertha Berlin",
                alias: "Hertha_Berlin",
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 11,
                name: "Hoffenheim",
                alias: "Hoffenheim",
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 12,
                name: "Leverkusen",
                alias: "Leverkusen",
                win: 2,
                lose: 1,
                points: 6
            },
            {
                id: 13,
                name: "RB Leipzig",
                alias: "RB_Leipzig",
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 14,
                name: "SC Freiburg",
                alias: "SC_Freiburg",
                win: 0,
                lose: 4,
                points: 0
            },
            {
                id: 15,
                name: "VfB Stuttgart",
                alias: "VfB_Stuttgart",
                win: 4,
                lose: 0,
                points: 12
            },
            {
                id: 16,
                name: "VfL Bochum",
                alias: "VfL_Bochum",
                win: 2,
                lose: 1,
                points: 6
            },
            {
                id: 17,
                name: "VfL Wolfsburg",
                alias: "VfL_Wolfsburg",
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 18,
                name: "Werder Bremen",
                alias: "Werder_Bremen",
                win: 0,
                lose: 0,
                points: 0
            }

        ]
    },
    {
        id: 3,
        alias: "Premier_League",
        name: "Premier League",
        logo: logos("./premier.png"),
        clubs: [{
            id: 1,
            name: 'Arsenal',
            alias: 'Arsenal',
            win: 3,
            lose: 0,
            points: 9
        },
        {
            id: 2,
            name: 'Aston Villa FC',
            alias: 'Aston_Villa_FC',
            win: 0,
            lose: 1,
            points: 0
        },
        {
            id: 3,
            name: 'Bournemouth AFC',
            alias: 'Bournemouth_AFC',
            win: 1,
            lose: 0,
            points: 3
        },
        {
            id: 4,
            name: 'Brentford',
            alias: 'Brentford',
            win: 0,
            lose: 3,
            points: 0
        },
        {
            id: 5,
            name: 'Brighton & Hove Albion',
            alias: 'Brighton_&_Hove_Albion',
            win: 1,
            lose: 1,
            points: 3
        },
        {
            id: 6,
            name: 'Chelsea',
            alias: 'Chelsea',
            win: 5,
            lose: 1,
            points: 15
        },
        {
            id: 7,
            name: 'Crystal Palace',
            alias: 'Crystal_Palace',
            win: 1,
            lose: 2,
            points: 3
        },
        {
            id: 8,
            name: 'Everton FC',
            alias: 'Everton_FC',
            win: 3,
            lose: 0,
            points: 9
        },
        {
            id: 9,
            name: 'Fulham',
            alias: 'Fulham',
            win: 0,
            lose: 5,
            points: 0
        },
        {
            id: 10,
            name: 'Leicester City FC',
            alias: 'Leicester_City_FC',
            win: 2,
            lose: 3,
            points: 6
        },
        {
            id: 11,
            name: 'Leeds United',
            alias: 'Leeds_United',
            win: 0,
            lose: 0,
            points: 0
        },
        {
            id: 12,
            name: 'Liverpool FC',
            alias: 'Liverpool_FC',
            win: 2,
            lose: 0,
            points: 6
        },
        {
            id: 13,
            name: 'Manchester City FC',
            alias: 'Manchester_City_FC',
            win: 0,
            lose: 3,
            points: 0
        },
        {
            id: 14,
            name: 'Manchester United FC',
            alias: 'Manchester_United_FC',
            win: 2,
            lose: 2,
            points: 6
        },
        {
            id: 15,
            name: 'Newcastle United',
            alias: 'Newcastle_United',
            win: 0,
            lose: 0,
            points: 0
        },
        {
            id: 16,
            name: 'Nottingham Forest',
            alias: 'Nottingham_Forest',
            win: 4,
            lose: 0,
            points: 12
        },
        {
            id: 17,
            name: 'Southampton FC',
            alias: 'Southampton_FC',
            win: 0,
            lose: 0,
            points: 0
        },
        {
            id: 18, name: 'Tottenham Hotspur FC',
            alias: 'Tottenham_Hotspur_FC',
            win: 0,
            lose: 0,
            points: 0
        },
        {
            id: 19,
            name: 'West Ham United',
            alias: 'West_Ham_United',
            win: 3,
            lose: 3,
            points: 6
        },
        {
            id: 20,
            name: 'Wolverhampton Wanderers',
            alias: 'Wolverhampton_Wanderers',
            win: 1,
            lose: 0,
            points: 3
        }]
    },
    {
        id: 4,
        alias: "LaLiga",
        name: "LaLiga",
        logo: logos("./laliga.png"),
        clubs: [
            {
                id: 1,
                name: 'Almería',
                alias: 'Almería',
                win: 1,
                lose: 0,
                points: 3
            },
            {
                id: 2,
                name: 'Athletic',
                alias: 'Athletic',
                win: 0,
                lose: 2,
                points: 0
            },
            {
                id: 3,
                name: 'Atlético Madrid',
                alias: 'Atlético_Madrid',
                win: 3,
                lose: 1,
                points: 9
            },
            {
                id: 4,
                name: 'Barcelona',
                alias: 'Barcelona',
                win: 1,
                lose: 2,
                points: 3
            },
            {
                id: 5,
                name: 'Betis',
                alias: 'Betis',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 6,
                name: 'Cádiz',
                alias: 'Cádiz',
                win: 3,
                lose: 3,
                points: 9
            },
            {
                id: 7,
                name: 'Celta Vigo',
                alias: 'Celta_Vigo',
                win: 5,
                lose: 0,
                points: 15
            },
            {
                id: 8,
                name: 'Elche',
                alias: 'Elche',
                win: 2,
                lose: 1,
                points: 6
            },
            {
                id: 9,
                name: 'Espanyol',
                alias: 'Espanyol',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 10,
                name: 'Getafe',
                alias: 'Getafe',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 11,
                name: 'Girona',
                alias: 'Girona',
                win: 1,
                lose: 1,
                points: 3
            },
            {
                id: 12,
                name: 'Mallorca',
                alias: 'Mallorca',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 13,
                name: 'Osasuna',
                alias: 'Osasuna',
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 14,
                name: 'Rayo Vallecano',
                alias: 'Rayo_Vallecano',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 15,
                name: 'Real Madrid',
                alias: 'Real_Madrid',
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 16,
                name: 'Real Sociedad',
                alias: 'Real_Sociedad',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 17,
                name: 'Sevilla',
                alias: 'Sevilla',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 18,
                name: 'Valencia',
                alias: 'Valencia',
                win: 6,
                lose: 0,
                points: 18
            },
            {
                id: 19,
                name: 'Valladolid',
                alias: 'Valladolid',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 20,
                name: 'Villarreal',
                alias: 'Villarreal',
                win: 0,
                lose: 0,
                points: 0
            }
        ]
    },
    {
        id: 5,
        alias: "Ligue_1",
        name: "Ligue 1",
        logo: logos("./ligue1.png"),
        clubs: [
            {
                id: 1,
                name: 'Ac Ajaccio',
                alias: 'Ac_Ajaccio',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 2,
                name: 'Aj Auxerre',
                alias: 'Aj_Auxerre',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 3,
                name: 'Angers Sco',
                alias: 'Angers_Sco',
                win: 0,
                lose: 1,
                points: 0
            },
            {
                id: 4,
                name: 'As Monaco',
                alias: 'As_Monaco',
                win: 3,
                lose: 0,
                points: 9
            },
            {
                id: 5,
                name: 'Clermont Foot 63',
                alias: 'Clermont_Foot_63',
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 6,
                name: 'Estac Troyes',
                alias: 'Estac_Troyes',
                win: 1,
                lose: 0,
                points: 1
            },
            {
                id: 7,
                name: 'Fc Lorient',
                alias: 'Fc_Lorient',
                win: 3,
                lose: 0,
                points: 9
            },
            {
                id: 8,
                name: 'Fc Nantes',
                alias: 'Fc_Nantes',
                win: 5,
                lose: 2,
                points: 15
            },
            {
                id: 9,
                name: 'Losc Lille',
                alias: 'Losc_Lille',
                win: 1,
                lose: 3,
                points: 3
            },
            {
                id: 10,
                name: 'Montpellier Hérault Sc',
                alias: 'Montpellier_Hérault_Sc',
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 11,
                name: 'Ogc Nice',
                alias: 'Ogc_Nice',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 12,
                name: 'Olympique De Marseille',
                alias: 'Olympique_De_Marseille',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 13,
                name: 'Olympique Lyonnais',
                alias: 'Olympique_Lyonnais',
                win: 2,
                lose: 2,
                points: 6
            },
            {
                id: 14,
                name: 'Paris Saint-Germain',
                alias: 'Paris_Saint-Germain',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 15,
                name: 'Rc Lens',
                alias: 'Rc_Lens',
                win: 1,
                lose: 1,
                points: 3
            },
            {
                id: 16,
                name: 'Rc Strasbourg Alsace',
                alias: 'Rc_Strasbourg_Alsace',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 17,
                name: 'Stade Brestois 29',
                alias: 'Stade_Brestois_29',
                win: 0,
                lose: 0,
                points: 0
            },
            {
                id: 18,
                name: 'Stade De Reims',
                alias: 'Stade_De_Reims',
                win: 3,
                lose: 3,
                points: 9
            },
            {
                id: 19,
                name: 'Stade Rennais Fc',
                alias: 'Stade_Rennais_Fc',
                win: 1,
                lose: 1,
                points: 3
            },
            {
                id: 20,
                name: 'Toulouse Fc',
                alias: 'Toulouse_Fc',
                win: 4,
                lose: 2,
                points: 12
            }
        ]
    }
]