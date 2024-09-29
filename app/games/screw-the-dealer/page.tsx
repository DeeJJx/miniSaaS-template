import Link from "next/link";

export default function ScrewTheDealer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Screw the Dealer Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Screw the Dealer is to guess the card value drawn
            by the dealer. Players take turns guessing, and if they guess
            incorrectly, they must take a drink. The game continues until
            players decide to stop or all cards are drawn.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used. Shuffle the deck and place it
              face down in the center of the table.
            </li>
            <li>
              Designate one player as the dealer for the round. The dealer draws
              a card from the deck without revealing it.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
          <p className="mb-4">
            Players take turns guessing the value of the dealer's hidden card.
            The dealer reveals the card after each guess, and players who
            guessed incorrectly must take a drink. If a player guesses the
            correct value, they can assign a drink to another player.
          </p>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            There is no formal winner in Screw the Dealer; the game is meant for
            fun and social interaction. Players can continue guessing until they
            choose to stop or until the deck runs out of cards.
          </p>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Screw the Dealer is a drinking game that has its roots in various
            traditional card games. It gained popularity in party settings as a
            fun way to mix card gameplay with drinking. The game's exact origins
            are difficult to trace, but it is often played in social
            environments where players seek to entertain themselves while
            enjoying drinks together.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Wild Card Rule:</strong> Introduce a specific card (like
              jokers) that changes the rules for that round, such as skipping a
              player’s turn or assigning extra drinks.
            </li>
            <li>
              <strong>Multiple Dealers:</strong> Rotate the dealer role more
              frequently (e.g., after every few cards) to keep the game dynamic
              and engaging.
            </li>
            <li>
              <strong>Card Suit Guess:</strong> Players can guess not only the
              value but also the suit of the card for added complexity;
              incorrect guesses lead to additional drinks.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Pay Attention:</strong> Observe previous guesses and the
              cards that have already been revealed to make more informed
              guesses.
            </li>
            <li>
              <strong>Risk and Reward:</strong> Consider the risk of guessing
              higher or lower than the average value based on the revealed
              cards.
            </li>
            <li>
              <strong>Bluffing:</strong> Use bluffing techniques when guessing
              to keep other players on their toes and make the game more
              unpredictable.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Guessing Too Quickly:</strong> Rushing to make guesses can
              lead to poor choices; take a moment to think before guessing.
            </li>
            <li>
              <strong>Neglecting Game Flow:</strong> Losing track of whose turn
              it is can disrupt the game; keep a mental note of the order of
              play.
            </li>
            <li>
              <strong>Not Assigning Drinks:</strong> Forgetting to assign drinks
              to players who guess incorrectly can lead to a less engaging
              experience.
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
