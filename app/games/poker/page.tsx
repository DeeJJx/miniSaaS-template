import Link from "next/link";

export default function Poker() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Poker Rules and Strategies
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Poker is to win chips by either having the best
            hand or by convincing others that you have the best hand.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Poker has a rich history, believed to have originated in the early
            19th century in the United States. It evolved from various card
            games and has grown into a global phenomenon, with numerous
            variations played in homes and casinos worldwide. The World Series
            of Poker (WSOP), founded in 1970, popularized competitive poker and
            contributed to its status as a mainstream game.
          </p>

          {/* Basic Rules */}
          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>A standard Poker game is played with a 52-card deck.</li>
            <li>
              The game typically involves betting rounds where players can bet,
              fold, or raise.
            </li>
            <li>
              The best hand, based on traditional poker rankings, wins the pot.
            </li>
          </ul>

          {/* Hand Rankings */}
          <h2 className="card-title text-2xl font-bold">Hand Rankings</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Royal Flush:</strong> A, K, Q, J, 10, all of the same
              suit.
            </li>
            <li>
              <strong>Straight Flush:</strong> Five consecutive cards of the
              same suit.
            </li>
            <li>
              <strong>Four of a Kind:</strong> Four cards of the same rank.
            </li>
            <li>
              <strong>Full House:</strong> Three of a kind combined with a pair.
            </li>
            <li>
              <strong>Flush:</strong> Five cards of the same suit, not in
              sequence.
            </li>
            <li>
              <strong>Straight:</strong> Five consecutive cards, not of the same
              suit.
            </li>
            <li>
              <strong>Three of a Kind:</strong> Three cards of the same rank.
            </li>
            <li>
              <strong>Two Pair:</strong> Two different pairs.
            </li>
            <li>
              <strong>One Pair:</strong> Two cards of the same rank.
            </li>
            <li>
              <strong>High Card:</strong> The highest card in your hand when no
              other hand is made.
            </li>
          </ul>

          {/* Betting Rounds */}
          <h2 className="card-title text-2xl font-bold">Betting Rounds</h2>
          <p className="mb-4">
            Poker games are divided into a series of betting rounds. The most
            common structure involves:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Pre-Flop:</strong> After receiving their hole cards,
              players bet or fold.
            </li>
            <li>
              <strong>Flop:</strong> Three community cards are dealt, followed
              by a betting round.
            </li>
            <li>
              <strong>Turn:</strong> A fourth community card is dealt, followed
              by another betting round.
            </li>
            <li>
              <strong>River:</strong> The fifth and final community card is
              dealt, followed by the last betting round.
            </li>
          </ul>

          {/* Variations of Poker */}
          <h2 className="card-title text-2xl font-bold">Variations of Poker</h2>
          <p className="mb-4">
            Poker comes in many variations, each with its unique rules and
            strategies:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Texas Hold'em:</strong> Players are dealt two hole cards,
              and five community cards are dealt in stages.
            </li>
            <li>
              <strong>Omaha:</strong> Similar to Texas Hold'em, but players are
              dealt four hole cards and must use exactly two of them.
            </li>
            <li>
              <strong>Seven Card Stud:</strong> Players are dealt seven cards,
              three face down and four face up, with no community cards.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Poker
          </h2>
          <p className="mb-4">
            Here are some strategies to enhance your poker gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Know When to Fold:</strong> Don’t be afraid to fold if
              your hand is weak; it’s better to preserve your chips for a better
              opportunity.
            </li>
            <li>
              <strong>Pay Attention to Your Opponents:</strong> Observe betting
              patterns and behaviors to gauge their hands.
            </li>
            <li>
              <strong>Manage Your Bankroll:</strong> Set limits on how much you
              are willing to lose and stick to them.
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
              <strong>Chasing Losses:</strong> Avoid trying to win back lost
              chips, as it can lead to poor decision-making.
            </li>
            <li>
              <strong>Playing Too Many Hands:</strong> Be selective with the
              hands you play; not every hand is worth investing in.
            </li>
            <li>
              <strong>Ignoring Position:</strong> Your position at the table
              affects your strategy; use it to your advantage.
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
