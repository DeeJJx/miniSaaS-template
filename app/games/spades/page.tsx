import Link from "next/link";

export default function Spades() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Spades Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Spades is to be the first team to reach a predetermined number of points, usually 500. Points are scored by winning tricks, with spades being the trump suit.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Spades is typically played with four players in two partnerships.</li>
            <li>A standard 52-card deck is used, and spades are always the trump suit.</li>
            <li>The game is played in rounds, and each round consists of players bidding on the number of tricks they will take, followed by the actual play of the round.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Bidding</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Each player (starting with the player to the left of the dealer) bids the number of tricks they think they can take.</li>
            <li>Partners’ bids are combined, and the team must try to take at least that many tricks.</li>
            <li>If a player bids “Nil,” they are attempting to take no tricks during the round. Successfully doing so earns a bonus, while failing results in a penalty.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The player to the dealer’s left leads the first trick. Players must follow suit if they can; if they cannot, they may play a spade or any other suit.</li>
            <li>Spades cannot be led until they are “broken” (played when a player cannot follow suit).</li>
            <li>The highest card of the lead suit wins the trick unless a spade is played, in which case the highest spade wins.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Teams earn points for each trick taken if they meet or exceed their combined bid.</li>
            <li>Overtricks (tricks taken beyond the bid) score points but may also incur penalties if accumulated excessively (known as "bags").</li>
            <li>If a team fails to meet its bid, it loses points equal to the bid.</li>
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
