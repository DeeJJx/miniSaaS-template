import Link from "next/link";

export default function GoFish() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Go Fish Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Go Fish is to collect as many sets of four cards of the same rank as possible by asking other players for specific cards.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Go Fish is typically played with 2-6 players using a standard 52-card deck.</li>
            <li>Each player is dealt 5 cards (or 7 cards if there are only 2 players), and the remaining cards form a draw pile in the center.</li>
            <li>The game proceeds with players asking others for specific cards to form sets of four.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>On their turn, a player asks another player for a specific rank of card that they already have at least one of in their hand (e.g., "Do you have any threes?").</li>
            <li>If the player asked has any cards of the requested rank, they must give them all to the asking player.</li>
            <li>If the player asked has no cards of the requested rank, they say "Go Fish," and the asking player must draw a card from the draw pile.</li>
            <li>If the drawn card is the rank they asked for, they show it and get another turn; if not, their turn ends.</li>
            <li>When a player collects a set of four cards of the same rank, they place the set face-up in front of them.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The game continues until all sets of four have been collected, or the draw pile is empty.</li>
            <li>The player with the most sets at the end of the game is declared the winner.</li>
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
