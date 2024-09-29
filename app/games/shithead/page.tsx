import Link from "next/link";

export default function Shithead() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Shitheads Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Shitheads is to get rid of all your cards while
            trying to avoid being the last player left with cards.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used, and the game is typically played
              with 3 to 6 players.
            </li>
            <li>
              Each player is dealt a specific number of cards (usually 3 face
              down and 3 face up on top).
            </li>
            <li>
              The remaining cards form a draw pile, and the top card is placed
              face up to start the discard pile.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Players take turns discarding cards onto the discard pile,
              starting with the player to the left of the dealer.
            </li>
            <li>
              Players must play a card of equal or higher value than the top
              card on the discard pile.
            </li>
            <li>
              If a player cannot play, they must draw from the draw pile until
              they can play a card.
            </li>
            <li>
              Once a player has discarded all their cards, they are out of the
              game.
            </li>
            <li>
              The game continues until only one player remains, who is then
              declared the "Shithead."{" "}
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Shitheads is a popular drinking game often played in informal
            settings. The game has various regional rules and names, but the
            core mechanics remain the same, making it a favorite among friends
            looking for a fun and casual game.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Some variations allow for special cards (like 2s or Jokers) to
              have unique abilities.
            </li>
            <li>
              Players may agree on different rules regarding the number of cards
              dealt or the winning condition.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Pay attention to the cards that have been played to anticipate
              your opponents' moves.
            </li>
            <li>
              Hold onto high cards until you can play them strategically,
              especially towards the end of the game.
            </li>
            <li>
              Try to remember which cards your opponents have in their hand.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Playing a card of lower value than the top card on the discard
              pile, which results in a penalty.
            </li>
            <li>
              Forgetting to draw cards when unable to play, which can lead to a
              disadvantage.
            </li>
            <li>
              Not keeping track of the cards that have been played, leading to
              poor strategic decisions.
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
