import Link from "next/link";

export default function CrazyEights() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Crazy Eights Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Crazy Eights is to be the first player to get rid of all your cards by playing them to a central discard pile, following suit or rank, or playing an eight to change the suit.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Crazy Eights is typically played with 2-7 players using a standard 52-card deck.</li>
            <li>The game begins with each player being dealt 5 cards (or 7 if there are only 2 players), and the remaining cards form a draw pile.</li>
            <li>The top card of the draw pile is turned face up to start the discard pile.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>On their turn, players must play a card that matches the rank or suit of the top card on the discard pile.</li>
            <li>If a player cannot match the rank or suit, they must draw cards from the draw pile until they can play.</li>
            <li>Eights are wild and can be played at any time, allowing the player to declare the next suit to be played.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Special Cards</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Eights:</strong> When a player plays an eight, they get to choose the next suit to be played. The next player must play a card of the chosen suit or another eight.
            </li>
            <li>
              <strong>Draw Two:</strong> Some variations include a rule where a player who cannot play a card and has to draw must draw two cards instead of one.
            </li>
            <li>
              <strong>Skip:</strong> Some variations include a rule where certain cards (like a Jack or a Queen) cause the next player to lose their turn.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The game continues until one player has no cards left in their hand, at which point they are declared the winner of that round.</li>
            <li>The game can be played over multiple rounds, with players accumulating points based on the cards left in their opponents' hands.</li>
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
