import Link from "next/link";

export default function Doppelganger() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Doppelganger Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Doppelganger is to find and expose the
            "doppelganger" among the group of players, or if you're the
            doppelganger, to blend in and avoid being caught.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard deck of cards is used, with one card representing the
              "doppelganger." Typically, the Joker or another unique card is
              used.
            </li>
            <li>
              The game is played with 4 or more players, and each player is
              dealt one card face down.
            </li>
            <li>
              The player who receives the doppelganger card becomes the
              "doppelganger" for that round.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The game is played over several rounds, where players take turns
              asking each other questions or performing actions to figure out
              who the doppelganger is.
            </li>
            <li>
              The doppelganger’s goal is to blend in with the rest of the group
              and avoid suspicion.
            </li>
            <li>
              After each round, players vote on who they think the doppelganger
              is. If the doppelganger is correctly identified, that player
              loses. If the group guesses wrong, the doppelganger wins.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Doppelganger is inspired by the concept of a double or evil twin,
            commonly found in folklore and mythology. The game plays on the idea
            of deception and imitation, with players trying to hide their
            identity or expose the impostor among them.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              In some variations, the doppelganger can take special actions,
              such as forcing another player to reveal a card or swapping cards
              with someone secretly.
            </li>
            <li>
              Another version allows for multiple doppelgangers, increasing the
              difficulty for non-doppelganger players to find them.
            </li>
            <li>
              Drinking game variations include penalties for wrong guesses or
              additional rounds for successful doppelgangers.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              If you are the doppelganger, try to mimic the behaviors and
              responses of other players to avoid detection.
            </li>
            <li>
              As a non-doppelganger, look for subtle inconsistencies in what
              others say or do to figure out who might be pretending.
            </li>
            <li>
              Use bluffing tactics, whether you're the doppelganger or not, to
              throw suspicion off of yourself and onto others.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Doppelgangers often reveal themselves too early by acting
              suspiciously or trying too hard to blend in.
            </li>
            <li>
              Players may jump to conclusions too quickly, leading to incorrect
              votes and allowing the doppelganger to win.
            </li>
            <li>
              Overcomplicating the questioning or strategy can confuse players,
              making it easier for the doppelganger to stay hidden.
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
