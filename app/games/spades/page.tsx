import Link from "next/link";

export default function Spades() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Spades Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Spades is to be the first team to reach a
            predetermined number of points, usually 500. Points are scored by
            winning tricks, with spades being the trump suit.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Spades is believed to have originated in the United States in the
            1930s. It gained popularity in the 1960s and has since become a
            staple in card games, especially among college students and social
            gatherings. The game's partnership format and strategic bidding have
            made it a favorite for casual play.
          </p>

          {/* Basic Rules */}
          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Spades is typically played with four players in two partnerships.
            </li>
            <li>
              A standard 52-card deck is used, and spades are always the trump
              suit.
            </li>
            <li>
              The game is played in rounds, and each round consists of players
              bidding on the number of tricks they will take, followed by the
              actual play of the round.
            </li>
          </ul>

          {/* Bidding */}
          <h2 className="card-title text-2xl font-bold">Bidding</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Each player (starting with the player to the left of the dealer)
              bids the number of tricks they think they can take.
            </li>
            <li>
              Partners’ bids are combined, and the team must try to take at
              least that many tricks.
            </li>
            <li>
              If a player bids “Nil,” they are attempting to take no tricks
              during the round. Successfully doing so earns a bonus, while
              failing results in a penalty.
            </li>
          </ul>

          {/* Gameplay */}
          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The player to the dealer’s left leads the first trick. Players
              must follow suit if they can; if they cannot, they may play a
              spade or any other suit.
            </li>
            <li>
              Spades cannot be led until they are “broken” (played when a player
              cannot follow suit).
            </li>
            <li>
              The highest card of the lead suit wins the trick unless a spade is
              played, in which case the highest spade wins.
            </li>
          </ul>

          {/* Scoring */}
          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Teams earn points for each trick taken if they meet or exceed
              their combined bid.
            </li>
            <li>
              Overtricks (tricks taken beyond the bid) score points but may also
              incur penalties if accumulated excessively (known as "bags").
            </li>
            <li>
              If a team fails to meet its bid, it loses points equal to the bid.
            </li>
          </ul>

          {/* Variations of Spades */}
          <h2 className="card-title text-2xl font-bold">
            Variations of Spades
          </h2>
          <p className="mb-4">
            There are several popular variations of Spades that change the
            gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Partners Spades:</strong> The most common version where
              players form teams of two.
            </li>
            <li>
              <strong>Solo Spades:</strong> Played with individual players
              rather than teams, focusing on personal points.
            </li>
            <li>
              <strong>Jokers Wild:</strong> Including jokers as wild cards can
              add an element of unpredictability to the game.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Spades
          </h2>
          <p className="mb-4">
            Here are some strategies to enhance your Spades gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Communicate with Your Partner:</strong> Use bidding and
              play to signal your hand strength and intentions.
            </li>
            <li>
              <strong>Pay Attention to Cards Played:</strong> Keep track of
              which cards have been played to gauge the likelihood of winning a
              trick.
            </li>
            <li>
              <strong>Manage Your Spades:</strong> Be strategic about when to
              play your spades; save them for crucial moments to win important
              tricks.
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
              <strong>Bidding Too High:</strong> Be realistic in your bids to
              avoid failing to meet them and losing points.
            </li>
            <li>
              <strong>Ignoring Nil Bids:</strong> Failing to recognize when a
              Nil bid is appropriate can lead to missed scoring opportunities.
            </li>
            <li>
              <strong>Playing Too Many Spades Early:</strong> Leading with
              spades too early can give opponents an advantage if they have
              strong cards in other suits.
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
