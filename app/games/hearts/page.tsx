import Link from "next/link";

export default function Hearts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Hearts Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Hearts is to have the fewest points by the end of the game. Players avoid taking tricks that contain hearts or the Queen of Spades.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Hearts is played with a standard 52-card deck by four players.</li>
            <li>The game is typically played to 100 points, with the player having the fewest points at the end being the winner.</li>
            <li>Each heart taken in a trick is worth 1 point, and the Queen of Spades is worth 13 points.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Each player is dealt 13 cards, and players pass three cards to another player before each round begins.</li>
            <li>The player holding the 2 of Clubs starts the first trick, and players must follow suit if possible.</li>
            <li>If a player cannot follow suit, they may play any card. Hearts cannot be led until they have been "broken" (played in another suit).</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Players receive points for each heart they take (1 point each) and for the Queen of Spades (13 points).</li>
            <li>If a player manages to take all the hearts and the Queen of Spades, they "shoot the moon," and all other players receive 26 points instead.</li>
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
