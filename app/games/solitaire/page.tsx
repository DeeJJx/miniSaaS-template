import Link from "next/link";

export default function Solitaire() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Solitaire Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Solitaire (specifically Klondike, the most common variant) is to move all the cards to the four foundation piles, sorted by suit and in ascending order from Ace to King.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>A standard 52-card deck is used, and the game is for one player.</li>
            <li>The deck is shuffled, and cards are dealt into seven tableau columns. The first column has one card, the second has two, and so on, up to seven cards in the seventh column.</li>
            <li>Only the top card in each tableau column is face up; the rest are face down.</li>
            <li>The remaining cards form the stock pile, which can be drawn from during the game.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The top card of each tableau column can be moved to either another tableau column or to one of the four foundation piles.</li>
            <li>Cards in the tableau columns must be arranged in descending order and alternating colors (e.g., a red 6 can be placed on a black 7).</li>
            <li>An empty tableau column can only be filled with a King or a sequence of cards starting with a King.</li>
            <li>The stock pile can be drawn from to help move cards to the tableau columns or foundation piles.</li>
            <li>The goal is to build up the foundation piles, one for each suit, starting with the Ace and ending with the King.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <ul className="list-disc list-inside mb-4">
            <li>You win the game by successfully moving all the cards to the foundation piles, sorted by suit and in order from Ace to King.</li>
            <li>If you can no longer make any moves and the stock pile is exhausted, the game is over.</li>
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
