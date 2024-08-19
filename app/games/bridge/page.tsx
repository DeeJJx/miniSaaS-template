import Link from "next/link";

export default function Bridge() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Bridge Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Bridge is for partnerships to score points by winning tricks, with the ultimate goal of being the first to reach a specified number of points, typically 100 or more.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Bridge is played with four players in two partnerships. Players sit opposite their partners.</li>
            <li>A standard 52-card deck is used, and the game consists of a series of deals, each with a bidding phase and a play phase.</li>
            <li>The goal during the play phase is to win as many tricks as possible to fulfill the contract decided during the bidding phase.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Bidding</h2>
          <ul className="list-disc list-inside mb-4">
            <li>During the bidding phase, players declare the number of tricks their partnership will attempt to win and the suit that will be the trump suit (or declare no trump).</li>
            <li>The highest bid becomes the contract, which the partnership must fulfill by winning at least the number of tricks they bid.</li>
            <li>Bidding proceeds clockwise, and players may pass if they do not wish to bid.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The player to the left of the declarer (the one who won the contract) leads the first trick.</li>
            <li>Players must follow suit if possible; if not, they may play any card.</li>
            <li>The highest card in the led suit wins the trick unless a trump card is played, in which case the highest trump wins.</li>
            <li>The partnership that wins the contract must try to win the number of tricks they bid, while the opposing partnership tries to prevent them from doing so.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>If the declaring partnership wins the number of tricks they bid, they score points. If they fail, the opposing partnership scores points.</li>
            <li>The value of each trick varies depending on whether the contract is in a suit or no trump.</li>
            <li>Bonus points are awarded for fulfilling contracts, making overtricks, and achieving specific conditions like slams.</li>
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
