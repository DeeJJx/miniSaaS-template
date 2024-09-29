import Link from "next/link";

export default function OldMaid() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Old Maid Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Old Maid is to avoid being the player left holding
            the unmatchable card, known as the Old Maid.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Old Maid is typically played with 2 to 8 players using a standard
              52-card deck.
            </li>
            <li>
              Remove one Queen from the deck so that there is one unmatched card
              (the Old Maid).
            </li>
            <li>
              Players are dealt an equal number of cards, and the remaining
              cards form a draw pile.
            </li>
            <li>
              Players take turns drawing a card from the hand of the player to
              their left, trying to form pairs.
            </li>
            <li>Players lay down any pairs they form face up on the table.</li>
            <li>
              The game continues until all pairs have been matched, and the
              player left holding the Old Maid loses the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Old Maid has roots that date back to the 19th century, with its
            origins often attributed to the United Kingdom. The game was
            designed as a children's card game to teach the basics of card
            matching and can also be seen as a social game that emphasizes
            interaction among players.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Old Maid with Jokers**: Some variations include jokers, where
              one joker acts as the Old Maid.
            </li>
            <li>
              **Special Cards**: Different themed decks may introduce special
              cards with unique actions or penalties.
            </li>
            <li>
              **Team Play**: Players can form teams and work together to avoid
              being left with the Old Maid.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Memorize Cards**: Keep track of which cards have been drawn to
              predict what others may have.
            </li>
            <li>
              **Avoid Drawing**: If you suspect a player is holding the Old
              Maid, be cautious when drawing from their hand.
            </li>
            <li>
              **Bluffing**: Sometimes, pretending to be interested in a specific
              card can throw off your opponents.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Not Paying Attention**: Failing to remember which cards have
              already been played can lead to poor decisions.
            </li>
            <li>
              **Overthinking Moves**: Being overly cautious can slow down
              gameplay and create unnecessary tension.
            </li>
            <li>
              **Focusing Too Much on One Player**: Ignoring the rest of the
              players can lead to getting stuck with the Old Maid.
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
