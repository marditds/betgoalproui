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
                alias: 'AC_Milan'
            },
            {
                id: 2,
                name: 'Atalanta',
                alias: 'Atalanta'
            },
            {
                id: 3,
                name: 'Bologna',
                alias: 'Bologna'
            },
            {
                id: 4,
                name: 'Cremonese',
                alias: 'Cremonese'
            },
            {
                id: 5,
                name: 'Empoli',
                alias: 'Empoli'
            },
            {
                id: 6,
                name: 'Fiorentina',
                alias: 'Fiorentina'
            },
            {
                id: 7,
                name: 'Hellas Verona',
                alias: 'Hellas_Verona'
            },
            {
                id: 8,
                name: 'Inter Milan',
                alias: 'Inter_Milan'
            },
            {
                id: 9,
                name: 'Juventus',
                alias: 'Juventus'
            },
            {
                id: 10,
                name: 'Lazio',
                alias: 'Lazio'
            },
            {
                id: 11,
                name: 'Lecce',
                alias: 'Lecce'
            },
            {
                id: 12,
                name: 'Monza',
                alias: 'Monza'
            },
            {
                id: 13,
                name: 'Napoli',
                alias: 'Napoli'
            },
            {
                id: 14,
                name: 'Roma',
                alias: 'Roma'
            },
            {
                id: 15,
                name: 'Salernitana',
                alias: 'Salernitana'
            },
            {
                id: 16,
                name: 'Sampdoria',
                alias: 'Sampdoria'
            },
            {
                id: 17,
                name: 'Sassuolo',
                alias: 'Sassuolo'
            },
            {
                id: 18,
                name: 'Spezia',
                alias: 'Spezia'
            },
            {
                id: 19,
                name: 'Torino',
                alias: 'Torino'
            },
            {
                id: 20,
                name: 'Udinese',
                alias: 'Udinese'
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
                alias: "B._M'gladbach"
            },
            {
                id: 2,
                name: "Bayern Munich",
                alias: "Bayern_Munich"
            },
            {
                id: 3,
                name: "Dortmund",
                alias: "Dortmund"
            },
            {
                id: 4,
                name: "Eintracht Fran.",
                alias: "Eintracht_Fran."
            },
            {
                id: 5,
                name: "FC Augsburg",
                alias: "FC_Augsburg"
            },
            {
                id: 6,
                name: "FC Köln",
                alias: "FC_Köln"
            },
            {
                id: 7,
                name: "FC Schalke 04",
                alias: "FC_Schalke_04"
            },
            {
                id: 8,
                name: "FC Union Berlin",
                alias: "FC_Union_Berlin"
            },
            {
                id: 9,
                name: "FSV Mainz 05",
                alias: "FSV_Mainz_05"
            },
            {
                id: 10,
                name: "Hertha Berlin",
                alias: "Hertha_Berlin"
            },
            {
                id: 11,
                name: "Hoffenheim",
                alias: "Hoffenheim"
            },
            {
                id: 12,
                name: "Leverkusen",
                alias: "Leverkusen"
            },
            {
                id: 13,
                name: "RB Leipzig",
                alias: "RB_Leipzig"
            },
            {
                id: 14,
                name: "SC Freiburg",
                alias: "SC_Freiburg"
            },
            {
                id: 15,
                name: "VfB Stuttgart",
                alias: "VfB_Stuttgart"
            },
            {
                id: 16,
                name: "VfL Bochum",
                alias: "VfL_Bochum"
            },
            {
                id: 17,
                name: "VfL Wolfsburg",
                alias: "VfL_Wolfsburg"
            },
            {
                id: 18,
                name: "Werder Bremen",
                alias: "Werder_Bremen"
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
            alias: 'Arsenal'
        },
        {
            id: 2,
            name: 'Aston Villa FC',
            alias: 'Aston_Villa_FC'
        },
        {
            id: 3,
            name: 'Bournemouth AFC',
            alias: 'Bournemouth_AFC'
        },
        {
            id: 4,
            name: 'Brentford',
            alias: 'Brentford'
        },
        {
            id: 5,
            name: 'Brighton & Hove Albion',
            alias: 'Brighton_&_Hove_Albion'
        },
        {
            id: 6,
            name: 'Chelsea',
            alias: 'Chelsea'
        },
        {
            id: 7,
            name: 'Crystal Palace',
            alias: 'Crystal_Palace'
        },
        {
            id: 8,
            name: 'Everton FC',
            alias: 'Everton_FC'
        },
        {
            id: 9,
            name: 'Fulham',
            alias: 'Fulham'
        },
        {
            id: 10,
            name: 'Leicester City FC',
            alias: 'Leicester_City_FC'
        },
        {
            id: 11,
            name: 'Leeds United',
            alias: 'Leeds_United'
        },
        {
            id: 12,
            name: 'Liverpool FC',
            alias: 'Liverpool_FC'
        },
        {
            id: 13,
            name: 'Manchester City FC',
            alias: 'Manchester_City_FC'
        },
        {
            id: 14,
            name: 'Manchester United FC',
            alias: 'Manchester_United_FC'
        },
        {
            id: 15,
            name: 'Newcastle United',
            alias: 'Newcastle_United'
        },
        {
            id: 16,
            name: 'Nottingham Forest',
            alias: 'Nottingham_Forest'
        },
        {
            id: 17,
            name: 'Southampton FC',
            alias: 'Southampton_FC'
        },
        {
            id: 18, name: 'Tottenham Hotspur FC',
            alias: 'Tottenham_Hotspur_FC'
        },
        {
            id: 19,
            name: 'West Ham United',
            alias: 'West_Ham_United'
        },
        {
            id: 20,
            name: 'Wolverhampton Wanderers',
            alias: 'Wolverhampton_Wanderers'
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
                alias: 'Almería'
            },
            {
                id: 2,
                name: 'Athletic',
                alias: 'Athletic'
            },
            {
                id: 3,
                name: 'Atlético Madrid',
                alias: 'Atlético_Madrid'
            },
            {
                id: 4,
                name: 'Barcelona',
                alias: 'Barcelona'
            },
            {
                id: 5,
                name: 'Betis',
                alias: 'Betis'
            },
            {
                id: 6,
                name: 'Cádiz',
                alias: 'Cádiz'
            },
            {
                id: 7,
                name: 'Celta Vigo',
                alias: 'Celta_Vigo'
            },
            {
                id: 8,
                name: 'Elche',
                alias: 'Elche'
            },
            {
                id: 9,
                name: 'Espanyol',
                alias: 'Espanyol'
            },
            {
                id: 10,
                name: 'Getafe',
                alias: 'Getafe'
            },
            {
                id: 11,
                name: 'Girona',
                alias: 'Girona'
            },
            {
                id: 12,
                name: 'Mallorca',
                alias: 'Mallorca'
            },
            {
                id: 13,
                name: 'Osasuna',
                alias: 'Osasuna'
            },
            {
                id: 14,
                name: 'Rayo Vallecano',
                alias: 'Rayo_Vallecano'
            },
            {
                id: 15,
                name: 'Real Madrid',
                alias: 'Real_Madrid'
            },
            {
                id: 16,
                name: 'Real Sociedad',
                alias: 'Real_Sociedad'
            },
            {
                id: 17,
                name: 'Sevilla',
                alias: 'Sevilla'
            },
            {
                id: 18,
                name: 'Valencia',
                alias: 'Valencia'
            },
            {
                id: 19,
                name: 'Valladolid',
                alias: 'Valladolid'
            },
            {
                id: 20,
                name: 'Villarreal',
                alias: 'Villarreal'
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
                alias: 'Ac_Ajaccio'
            },
            {
                id: 2,
                name: 'Aj Auxerre',
                alias: 'Aj_Auxerre'
            },
            {
                id: 3,
                name: 'Angers Sco',
                alias: 'Angers_Sco'
            },
            {
                id: 4,
                name: 'As Monaco',
                alias: 'As_Monaco'
            },
            {
                id: 5,
                name: 'Clermont Foot 63',
                alias: 'Clermont_Foot_63'
            },
            {
                id: 6,
                name: 'Estac Troyes',
                alias: 'Estac_Troyes'
            },
            {
                id: 7,
                name: 'Fc Lorient',
                alias: 'Fc_Lorient'
            },
            {
                id: 8,
                name: 'Fc Nantes',
                alias: 'Fc_Nantes'
            },
            {
                id: 9,
                name: 'Losc Lille',
                alias: 'Losc_Lille'
            },
            {
                id: 10,
                name: 'Montpellier Hérault Sc',
                alias: 'Montpellier_Hérault_Sc'
            },
            {
                id: 11,
                name: 'Ogc Nice',
                alias: 'Ogc_Nice'
            },
            {
                id: 12,
                name: 'Olympique De Marseille',
                alias: 'Olympique_De_Marseille'
            },
            {
                id: 13,
                name: 'Olympique Lyonnais',
                alias: 'Olympique_Lyonnais'
            },
            {
                id: 14,
                name: 'Paris Saint-Germain',
                alias: 'Paris_Saint-Germain'
            },
            {
                id: 15,
                name: 'Rc Lens',
                alias: 'Rc_Lens'
            },
            {
                id: 16,
                name: 'Rc Strasbourg Alsace',
                alias: 'Rc_Strasbourg_Alsace'
            },
            {
                id: 17,
                name: 'Stade Brestois 29',
                alias: 'Stade_Brestois_29'
            },
            {
                id: 18,
                name: 'Stade De Reims',
                alias: 'Stade_De_Reims'
            },
            {
                id: 19,
                name: 'Stade Rennais Fc',
                alias: 'Stade_Rennais_Fc'
            },
            {
                id: 20,
                name: 'Toulouse Fc',
                alias: 'Toulouse_Fc'
            }
        ]
    }
]