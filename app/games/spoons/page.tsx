import Link from "next/link";

export default function Spoons() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Spoons Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Spoons is to collect four cards of the same rank
            and grab a spoon from the center. The last player remaining without
            a spoon is the loser.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used, and the game is typically played
              with 3 to 13 players.
            </li>
            <li>
              Place one fewer spoon than the number of players in the center of
              the playing area.
            </li>
            <li>Each player is dealt four cards from the deck.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The dealer starts by drawing a card from the deck and discarding
              one from their hand face down to the player on their left.
            </li>
            <li>
              Players aim to collect four of a kind by drawing from the player
              next to them.
            </li>
            <li>
              When a player collects four of a kind, they grab a spoon from the
              center.
            </li>
            <li>
              Once one player grabs a spoon, all other players can also grab a
              spoon, leading to a rush to get one.
            </li>
            <li>
              The last player without a spoon is eliminated from the round.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Spoons is a classic party game that has been enjoyed for
            generations. Its origins are unclear, but it is believed to have
            evolved from similar card games and has become a staple in social
            gatherings.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Some variations allow players to use different numbers of cards,
              such as five or six.
            </li>
            <li>
              Players may introduce different objects in place of spoons, such
              as pencils or coins.
            </li>
            <li>
              Instead of being eliminated, players may receive a point or
              penalty for losing a round.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Pay attention to what cards others are picking up to gauge their
              progress.
            </li>
            <li>
              Try to keep your collected cards hidden to maintain an element of
              surprise.
            </li>
            <li>
              Be quick to react when you see someone else grab a spoon, as
              timing is crucial.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Holding onto cards that do not contribute to a set of four for too
              long.
            </li>
            <li>
              Failing to pay attention to the other players’ actions can result
              in losing out on grabbing a spoon.
            </li>
            <li>
              Getting too excited and grabbing a spoon too early before having
              four of a kind.
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
