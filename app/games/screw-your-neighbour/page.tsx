import Link from "next/link";

export default function ScrewYourNeighbour() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Screw Your Neighbor Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Screw Your Neighbor is to collect the highest value
            cards while trying to sabotage your opponents' hands and be the last
            player standing.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The game is played with a standard 52-card deck and is best with 3
              to 8 players.
            </li>
            <li>
              Each player is dealt a specific number of cards (usually 3 or 5),
              and the rest form a draw pile.
            </li>
            <li>
              The player to the left of the dealer starts by playing a card face
              up in the center. The next player must play a higher card or draw
              from the pile.
            </li>
            <li>
              If a player cannot play, they must draw a card and skip their
              turn. Players can also choose to "screw" the next player by
              playing a specific card (usually a 2), forcing them to draw two
              cards.
            </li>
            <li>
              The round continues until one player runs out of cards, at which
              point they are declared the winner.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Screw Your Neighbor is a classic card game that has its roots in
            various drinking and party games. It emphasizes interaction and
            playful sabotage, making it popular in social settings.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Screw Your Neighbor with Wild Cards**: Some versions introduce
              wild cards, such as Jokers, which can be used to play over any
              card.
            </li>
            <li>
              **Reverse Play**: In certain variations, players can play lower
              cards, which changes the dynamic of the game.
            </li>
            <li>
              **Different "Screw" Cards**: The card that allows a player to
              "screw" their neighbor may vary (e.g., 7s or 10s in different
              house rules).
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Hold onto High Cards**: Save your higher cards for strategic
              moments when you can dominate the play.
            </li>
            <li>
              **Use Screw Cards Wisely**: Timing is crucial; play your screw
              cards when it will have the most impact on your opponents.
            </li>
            <li>
              **Watch Your Opponents**: Keep an eye on the cards played and
              adjust your strategy based on what your neighbors might be
              holding.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Playing Cards Too Quickly**: Take your time to assess your hand
              and the current state of play before making a move.
            </li>
            <li>
              **Ignoring the "Screw" Mechanic**: Not utilizing your screw cards
              effectively can lead to missed opportunities to gain an advantage.
            </li>
            <li>
              **Overplaying**: Attempting to play too many cards in a row can
              leave you vulnerable to being countered by opponents.
            </li>
          </ul>

          <div className="card-actions justify-center">
            <Link href="/">
              <button className="btn btn-primary">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
