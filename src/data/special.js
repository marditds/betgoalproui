export const logos = require.context('../assets', true);

export const special = [
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
    }
]