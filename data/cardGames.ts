export interface CardGame {
    name: string;
    recommendedPlayers: number[];
}

const cardGames: CardGame[] = [
    {
        "name": "Poker",
        "recommendedPlayers": [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
        "name": "Blackjack",
        "recommendedPlayers": [2, 3, 4, 5, 6, 7],
    },
    {
        "name": "Hearts",
        "recommendedPlayers": [4],
    },
    {
        "name": "Spades",
        "recommendedPlayers": [4],
    },
    {
        "name": "Rummy",
        "recommendedPlayers": [2, 3, 4, 5, 6],
    },
    {
        "name": "Bridge",
        "recommendedPlayers": [4]
    },
    {
        "name": "Go-Fish",
        "recommendedPlayers": [2, 3, 4, 5, 6],
    },
    {
        "name": "Crazy-Eights",
        "recommendedPlayers": [2, 3, 4, 5, 6, 7],
    },
    {
        "name": "Euchre",
        "recommendedPlayers": [4]
    },
    {
        "name": "Solitaire",
        "recommendedPlayers": [1]
    },
    // {
    //     "name": "Pinochle",
    //     "recommendedPlayers": "4"
    // },
    // {
    //     "name": "War",
    //     "recommendedPlayers": "2"
    // },
    // {
    //     "name": "Slapjack",
    //     "recommendedPlayers": "2-6"
    // },
    // {
    //     "name": "Old Maid",
    //     "recommendedPlayers": "3-6"
    // },
    // {
    //     "name": "Gin Rummy",
    //     "recommendedPlayers": "2-4"
    // },
]

export default cardGames;