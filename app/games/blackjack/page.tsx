import Link from "next/link";

export default function Blackjack() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Blackjack Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Blackjack is to beat the dealer by having a hand value closest to 21 without exceeding it.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Blackjack is usually played with one or more standard 52-card decks.</li>
            <li>Each card has a value: Number cards are worth their face value, face cards (J, Q, K) are worth 10, and Aces can be worth 1 or 11.</li>
            <li>The game starts with each player receiving two cards, and the dealer receiving two cards (one face-up and one face-down).</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Player Actions</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Hit:</strong> Take another card to try to get closer to 21.</li>
            <li><strong>Stand:</strong> Keep your current hand and end your turn.</li>
            <li><strong>Double Down:</strong> Double your initial bet and receive exactly one more card.</li>
            <li><strong>Split:</strong> If your first two cards are the same value, you can split them into two separate hands.</li>
            <li><strong>Surrender:</strong> Forfeit half of your bet and end the round immediately.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning and Losing</h2>
          <ul className="list-disc list-inside mb-4">
            <li>If your hand exceeds 21, you bust and lose automatically.</li>
            <li>If the dealer busts and you haven't, you win.</li>
            <li>If neither you nor the dealer busts, the closest hand to 21 wins.</li>
            <li>If you and the dealer have the same hand value, it's a push (a tie), and your bet is returned.</li>
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
