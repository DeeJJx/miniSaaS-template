import Link from "next/link";

export default function Poker() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Poker Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Poker is to win chips by either having the best hand or by convincing others that you have the best hand.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>A standard Poker game is played with a 52-card deck.</li>
            <li>The game typically involves betting rounds where players can bet, fold, or raise.</li>
            <li>The best hand, based on traditional poker rankings, wins the pot.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Hand Rankings</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Royal Flush:</strong> A, K, Q, J, 10, all of the same suit.</li>
            <li><strong>Straight Flush:</strong> Five consecutive cards of the same suit.</li>
            <li><strong>Four of a Kind:</strong> Four cards of the same rank.</li>
            <li><strong>Full House:</strong> Three of a kind combined with a pair.</li>
            <li><strong>Flush:</strong> Five cards of the same suit, not in sequence.</li>
            <li><strong>Straight:</strong> Five consecutive cards, not of the same suit.</li>
            <li><strong>Three of a Kind:</strong> Three cards of the same rank.</li>
            <li><strong>Two Pair:</strong> Two different pairs.</li>
            <li><strong>One Pair:</strong> Two cards of the same rank.</li>
            <li><strong>High Card:</strong> The highest card in your hand when no other hand is made.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Betting Rounds</h2>
          <p className="mb-4">
            Poker games are divided into a series of betting rounds. The most common structure involves:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Pre-Flop:</strong> After receiving their hole cards, players bet or fold.</li>
            <li><strong>Flop:</strong> Three community cards are dealt, followed by a betting round.</li>
            <li><strong>Turn:</strong> A fourth community card is dealt, followed by another betting round.</li>
            <li><strong>River:</strong> The fifth and final community card is dealt, followed by the last betting round.</li>
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
