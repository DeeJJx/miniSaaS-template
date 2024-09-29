import Link from "next/link";

export default function Solitaire() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Solitaire (Klondike) Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Solitaire (specifically Klondike, the most common
            variant) is to move all the cards to the four foundation piles,
            sorted by suit and in ascending order from Ace to King.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Solitaire has a long history, with origins tracing back to the late
            18th century in Europe. The term "solitaire" refers to any card game
            that can be played alone. Klondike Solitaire became particularly
            popular in the late 19th century and was widely played on personal
            computers in the 1990s, contributing to its status as a classic
            single-player card game.
          </p>

          {/* Setup */}
          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used, and the game is for one player.
            </li>
            <li>
              The deck is shuffled, and cards are dealt into seven tableau
              columns. The first column has one card, the second has two, and so
              on, up to seven cards in the seventh column.
            </li>
            <li>
              Only the top card in each tableau column is face up; the rest are
              face down.
            </li>
            <li>
              The remaining cards form the stock pile, which can be drawn from
              during the game.
            </li>
          </ul>

          {/* Gameplay */}
          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The top card of each tableau column can be moved to either another
              tableau column or to one of the four foundation piles.
            </li>
            <li>
              Cards in the tableau columns must be arranged in descending order
              and alternating colors (e.g., a red 6 can be placed on a black 7).
            </li>
            <li>
              An empty tableau column can only be filled with a King or a
              sequence of cards starting with a King.
            </li>
            <li>
              The stock pile can be drawn from to help move cards to the tableau
              columns or foundation piles.
            </li>
            <li>
              The goal is to build up the foundation piles, one for each suit,
              starting with the Ace and ending with the King.
            </li>
          </ul>

          {/* Winning the Game */}
          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              You win the game by successfully moving all the cards to the
              foundation piles, sorted by suit and in order from Ace to King.
            </li>
            <li>
              If you can no longer make any moves and the stock pile is
              exhausted, the game is over.
            </li>
          </ul>

          {/* Variations of Solitaire */}
          <h2 className="card-title text-2xl font-bold">
            Variations of Solitaire
          </h2>
          <p className="mb-4">
            Solitaire has many variations that offer different challenges:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Spider Solitaire:</strong> Played with two decks, players
              try to build eight sequences of cards in descending order of the
              same suit.
            </li>
            <li>
              <strong>Freecell:</strong> Players can see all cards at once, and
              they must move cards to foundation piles using strategic
              placements in free cells.
            </li>
            <li>
              <strong>Yukon:</strong> Similar to Klondike but allows all cards
              in tableau columns to be moved as a unit regardless of order.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Solitaire
          </h2>
          <p className="mb-4">
            Here are some strategies to improve your Solitaire gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Prioritize Aces and Twos:</strong> Move Aces and Twos to
              foundation piles as soon as possible to free up tableau space.
            </li>
            <li>
              <strong>Plan Your Moves:</strong> Think ahead and consider the
              consequences of moving cards before making a decision.
            </li>
            <li>
              <strong>Use the Stock Wisely:</strong> Draw from the stock pile
              strategically; avoid drawing cards that won’t help you make
              immediate progress.
            </li>
          </ul>

          {/* Common Mistakes */}
          <h2 className="card-title text-2xl font-bold">
            Common Mistakes to Avoid
          </h2>
          <p className="mb-4">
            Here are some mistakes that players often make:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Rushing Moves:</strong> Taking hasty moves without
              planning can lead to dead ends; take your time.
            </li>
            <li>
              <strong>Neglecting Empty Columns:</strong> Not filling empty
              tableau columns with Kings can limit your options.
            </li>
            <li>
              <strong>Overlooking Foundation Opportunities:</strong> Always be
              on the lookout for chances to move cards to the foundation piles.
            </li>
          </ul>

          {/* Back to Home Button */}
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
