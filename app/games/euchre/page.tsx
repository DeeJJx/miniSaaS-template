import Link from "next/link";

export default function Euchre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Euchre Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Euchre is to be the first team to score 10 points by winning tricks and fulfilling contracts during the play.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Euchre is typically played with four players divided into two partnerships, using a deck of 24, 28, or 32 cards (9s through Aces).</li>
            <li>The game revolves around winning tricks, and the trump suit plays a crucial role in determining the winner of each trick.</li>
            <li>The dealer deals five cards to each player, leaving four cards as the "kitty," with the top card turned face up to determine the initial trump suit.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Bidding and Trump</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Players have the option to accept or pass the turned-up card as trump. If accepted, the dealer picks up the card and discards a different card.</li>
            <li>If all players pass, a second round of bidding occurs, allowing players to declare a different suit as trump.</li>
            <li>The team that declares trump must win at least three tricks to fulfill their contract.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The player to the left of the dealer leads the first trick, and play proceeds clockwise.</li>
            <li>Players must follow suit if possible; if not, they may play any card.</li>
            <li>The highest card of the led suit wins the trick, unless a trump card is played, in which case the highest trump wins.</li>
            <li>The team that wins the majority of the tricks scores points based on the number of tricks won.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>If the team that called trump wins three or four tricks, they score 1 point; if they win all five tricks, they score 2 points.</li>
            <li>If the opposing team (the defenders) wins three or more tricks, they score 2 points, and the declarer's team is "euchred."</li>
            <li>The game continues until one team reaches 10 points, winning the game.</li>
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
