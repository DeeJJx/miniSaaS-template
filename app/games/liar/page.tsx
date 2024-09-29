import Link from "next/link";

export default function Liar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Liar Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Liar is to be the first player to get rid of all
            your cards while successfully lying about the cards you play.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Liar is typically played with 3 or more players using a standard
              52-card deck.
            </li>
            <li>
              Players are dealt an equal number of cards, and the remaining
              cards form a draw pile in the center.
            </li>
            <li>
              The player to the dealer's left starts by playing one or more
              cards face down while declaring the rank of the cards (e.g., "two
              Aces").
            </li>
            <li>
              Other players can challenge the played cards by saying "Liar!" If
              the challenger is correct and the player lied, the liar must pick
              up the entire discard pile. If the player was honest, the
              challenger must pick up the pile.
            </li>
            <li>
              The game continues in a clockwise direction, with players
              attempting to discard all their cards.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Liar has roots in various card games around the world, with many
            cultures adopting similar mechanics of bluffing and deception. The
            game emphasizes social interaction and psychology, making it a
            popular choice at gatherings and parties.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Big Liar**: Players can lie about the number of cards they are
              playing, increasing the stakes and strategies involved.
            </li>
            <li>
              **Perpetual Liar**: Players must continuously lie about the rank
              of their cards until they can no longer do so without being
              caught.
            </li>
            <li>
              **Multiple Decks**: In larger groups, using two decks can keep the
              game interesting and competitive.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Timing Your Lies**: Knowing when to lie and when to play
              honestly can keep opponents guessing.
            </li>
            <li>
              **Reading Opponents**: Pay attention to players' behaviors to spot
              patterns that may indicate when they are lying.
            </li>
            <li>
              **Bluff with Low Cards**: Use lower-value cards for bluffing, as
              players may be less inclined to challenge them.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Overlying**: Players may lie too often and get caught, leading
              to penalties.
            </li>
            <li>
              **Challenging Too Early**: Challenging without sufficient evidence
              can result in unnecessary penalties.
            </li>
            <li>
              **Ignoring the Draw Pile**: Players may forget to draw cards after
              successfully challenging or playing cards, impacting their chances
              to win.
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
