export interface CardGame {
  name: string;
  recommendedPlayers: number[];
  objective: string;
}

const cardGames: CardGame[] = [
  {
    name: "Poker",
    recommendedPlayers: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    objective:
      "The objective of Poker is to win chips by either having the best hand or by convincing others that you have the best hand.",
  },
  {
    name: "Blackjack",
    recommendedPlayers: [2, 3, 4, 5, 6, 7],
    objective:
      "The objective of Blackjack is to beat the dealer by having a hand value closest to 21 without exceeding it.",
  },
  {
    name: "Hearts",
    recommendedPlayers: [4],
    objective:
      "The objective of Hearts is to have the fewest points by the end of the game. Players avoid taking tricks that contain hearts or the Queen of Spades.",
  },
  {
    name: "Spades",
    recommendedPlayers: [4],
    objective:
      "The objective of Spades is to be the first team to reach a predetermined number of points, usually 500. Points are scored by winning tricks, with spades being the trump suit.",
  },
  {
    name: "Rummy",
    recommendedPlayers: [2, 3, 4, 5, 6],
    objective:
      "The objective of Rummy is to form sets or runs with your cards and be the first to get rid of all your cards by melding them on the table.",
  },
  {
    name: "Bridge",
    recommendedPlayers: [4],
    objective:
      "The objective of Bridge is for partnerships to score points by winning tricks, with the ultimate goal of being the first to reach a specified number of points, typically 100 or more.",
  },
  {
    name: "Go-Fish",
    recommendedPlayers: [2, 3, 4, 5, 6],
    objective:
      "The objective of Go Fish is to collect as many sets of four cards of the same rank as possible by asking other players for specific cards.",
  },
  {
    name: "Crazy-Eights",
    recommendedPlayers: [2, 3, 4, 5, 6, 7],
    objective:
      "The objective of Crazy Eights is to be the first player to get rid of all your cards by playing them to a central discard pile, following suit or rank, or playing an eight to change the suit.",
  },
  {
    name: "Euchre",
    recommendedPlayers: [4],
    objective:
      "The objective of Euchre is to be the first team to score 10 points by winning tricks and fulfilling contracts during the play.",
  },
  {
    name: "Solitaire",
    recommendedPlayers: [1],
    objective:
      "The objective of Solitaire (specifically Klondike, the most common variant) is to move all the cards to the four foundation piles, sorted by suit and in ascending order from Ace to King.",
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

  //DRINKING GAMES
  {
    name: "Kings Cup (Circle of Death)",
    recommendedPlayers: [3, 4, 5, 6, 7, 8],
    objective:
      "The objective of Kings Cup is to follow the rules associated with each drawn card, leading to drinking penalties, rule creations, or assigning drinks to others.",
  },
  {
    name: "Ride the Bus",
    recommendedPlayers: [3, 4, 5, 6, 7, 8],
    objective:
      "The objective of Ride the Bus is to guess the color or suit of drawn cards, with incorrect guesses resulting in drinking penalties.",
  },
  {
    name: "Drunk Jenga",
    recommendedPlayers: [3, 4, 5, 6],
    objective:
      "The objective of Drunk Jenga is to pull blocks from a tower while following the rules associated with the cards placed under each block, resulting in drinking penalties.",
  },
  {
    name: "Screw the Dealer",
    recommendedPlayers: [3, 4, 5, 6, 7, 8],
    objective:
      "The objective of Screw the Dealer is to guess the value of the card drawn by the dealer, with incorrect guesses resulting in drinks.",
  },
  {
    name: "Pyramid",
    recommendedPlayers: [3, 4, 5, 6, 7, 8],
    objective:
      "The objective of Pyramid is to drink based on the value of the cards revealed from a pyramid structure and the rules associated with each level.",
  },
  {
    name: "High Low",
    recommendedPlayers: [2, 3, 4, 5, 6],
    objective:
      "The objective of High Low is to guess whether the next drawn card will be higher or lower, with incorrect guesses resulting in drinks.",
  },
  {
    name: "Red or Black",
    recommendedPlayers: [2, 3, 4, 5, 6],
    objective:
      "The objective of Red or Black is to guess the color of the next drawn card, with incorrect guesses leading to drinks.",
  },
  {
    name: "Drinking War",
    recommendedPlayers: [2, 3, 4, 5],
    objective:
      "The objective of Drinking War is to flip cards and win rounds, with losing players drinking based on the value of their cards.",
  },
  {
    name: "Kings and Aces",
    recommendedPlayers: [3, 4, 5, 6, 7, 8],
    objective:
      "The objective of Kings and Aces is to take turns drawing cards and perform the associated drinking actions based on the drawn card's value, with penalties for Kings and special actions for Aces.",
  },
];

export default cardGames;
