import Link from "next/link";

export default function DeadMansHand() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Dead Man's Hand (Nightmare) Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Dead Man's Hand (also known as Nightmare) is to
            avoid being the player who ends up with the "Dead Man's Hand" at the
            end of the game.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used, and the game is best played with
              4 to 6 players.
            </li>
            <li>
              Players sit in a circle, and each player is dealt an equal number
              of cards.
            </li>
            <li>
              The remaining cards are placed face down in the center as the draw
              pile.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Each player takes turns drawing a card from the deck or another
              player’s hand and discarding one card face down.
            </li>
            <li>
              The goal is to form pairs or sets of cards with the same value.
              Once a pair is formed, it is discarded face up in front of the
              player.
            </li>
            <li>
              The game continues until all pairs have been discarded, except for
              one player who is left holding the "Dead Man's Hand."
            </li>
            <li>
              The Dead Man's Hand typically refers to a single unpaired card,
              and the player holding it loses the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            The term "Dead Man's Hand" is famously associated with Wild Bill
            Hickok, who was allegedly holding a pair of aces and eights when he
            was shot in a poker game in 1876. This variation of the card game
            plays on the notion of holding a losing hand, with players racing to
            get rid of cards and avoid being left with the unlucky "dead hand."
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              In some versions, players can also swap cards from the center pile
              instead of from another player's hand.
            </li>
            <li>
              Another variation involves adding a special card, like a joker,
              which can act as a wildcard or an instant win/loss card.
            </li>
            <li>
              Players may play with additional penalty rules, such as drinking
              penalties for holding the Dead Man's Hand.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Keep track of what cards other players are discarding or picking
              up to guess their hands.
            </li>
            <li>
              Discard high-value single cards quickly, as they are less likely
              to form pairs.
            </li>
            <li>
              Use deception—pretend that a useless card is valuable to prevent
              others from taking it.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Holding onto cards for too long in hopes of forming a pair, only
              to be left with them at the end.
            </li>
            <li>
              Not paying attention to the cards other players are discarding,
              which can give you valuable information about their hands.
            </li>
            <li>
              Forgetting that the goal is to avoid the last card and not
              necessarily to win every round.
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
