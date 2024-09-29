import Link from "next/link";

export default function Hearts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Hearts Rules and Strategies
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Hearts is to have the fewest points by the end of
            the game. Players avoid taking tricks that contain hearts or the
            Queen of Spades.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Hearts is believed to have originated in the 18th century, evolving
            from earlier trick-taking card games like "Reversi" and "The Reversi
            Game." It has gained popularity in many countries and is often
            played in both casual and competitive settings. The game is
            particularly known for its strategic depth and social interaction,
            making it a favorite among card enthusiasts.
          </p>

          {/* Basic Rules */}
          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Hearts is played with a standard 52-card deck by four players.
            </li>
            <li>
              The game is typically played to 100 points, with the player having
              the fewest points at the end being the winner.
            </li>
            <li>
              Each heart taken in a trick is worth 1 point, and the Queen of
              Spades is worth 13 points.
            </li>
          </ul>

          {/* Gameplay */}
          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Each player is dealt 13 cards, and players pass three cards to
              another player before each round begins.
            </li>
            <li>
              The player holding the 2 of Clubs starts the first trick, and
              players must follow suit if possible.
            </li>
            <li>
              If a player cannot follow suit, they may play any card. Hearts
              cannot be led until they have been "broken" (played in another
              suit).
            </li>
          </ul>

          {/* Scoring */}
          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Players receive points for each heart they take (1 point each) and
              for the Queen of Spades (13 points).
            </li>
            <li>
              If a player manages to take all the hearts and the Queen of
              Spades, they "shoot the moon," and all other players receive 26
              points instead.
            </li>
          </ul>

          {/* Variations of Hearts */}
          <h2 className="card-title text-2xl font-bold">
            Variations of Hearts
          </h2>
          <p className="mb-4">
            There are several fun variations of Hearts that can enhance
            gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Black Lady:</strong> In this variation, players receive an
              additional penalty for taking the Queen of Spades, adding more
              strategy to avoid her.
            </li>
            <li>
              <strong>Partnership Hearts:</strong> Players can form
              partnerships, allowing for cooperative strategies and gameplay.
            </li>
            <li>
              <strong>Hearts with Jokers:</strong> Some players include Jokers
              as wild cards that can take the place of any card, changing how
              tricks are won.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Hearts
          </h2>
          <p className="mb-4">
            Here are some strategies to improve your Hearts gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Control the Lead:</strong> Try to control when hearts are
              led, particularly if you have high hearts or the Queen of Spades.
            </li>
            <li>
              <strong>Discard Wisely:</strong> When passing cards, consider
              which cards might help your opponents, especially high hearts or
              the Queen of Spades.
            </li>
            <li>
              <strong>Avoid Shooting the Moon:</strong> Unless you’re confident,
              avoid trying to shoot the moon as it can backfire and lead to
              significant point penalties.
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
              <strong>Leading with Hearts Early:</strong> Be cautious about
              leading with hearts before they are broken, as this can give
              others a chance to avoid points.
            </li>
            <li>
              <strong>Ignoring Opponent's Cards:</strong> Pay attention to what
              cards your opponents are playing and adjust your strategy
              accordingly.
            </li>
            <li>
              <strong>Getting Too Focused on Points:</strong> While minimizing
              points is essential, consider overall strategy and gameplay
              dynamics to avoid playing too defensively.
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
