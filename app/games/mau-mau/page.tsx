import Link from "next/link";

export default function MauMau() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Mau Mau Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Mau Mau is to be the first player to play all your
            cards by matching the rank or suit of the top card on the discard
            pile.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The game is played with a standard 52-card deck.</li>
            <li>
              Players are dealt a specific number of cards (usually 5-7) at the
              start of the game.
            </li>
            <li>
              The remaining cards form the draw pile, and the top card is placed
              face-up to start the discard pile.
            </li>
            <li>
              On their turn, players must match the rank or suit of the top card
              on the discard pile or play a special card.
            </li>
            <li>
              If a player cannot make a move, they must draw a card from the
              draw pile. If the drawn card can be played, they can do so
              immediately.
            </li>
            <li>The first player to discard all their cards wins the game.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Mau Mau is a popular card game that originated in Germany and has
            become well-known in various countries. It is often played in casual
            settings, making it a great choice for parties and gatherings.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Uno-style Rules**: Some play with rules similar to Uno, where
              special cards have unique effects.
            </li>
            <li>
              **Jokers Included**: In some versions, jokers are included and can
              be used as wild cards.
            </li>
            <li>
              **Different Winning Conditions**: In some variations, players may
              need to achieve a specific condition to win, such as having a
              certain number of cards left.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Keep Track of Cards**: Pay attention to the cards played to
              anticipate opponents' moves.
            </li>
            <li>
              **Use High Cards Wisely**: Hold onto your high cards for strategic
              plays later in the game.
            </li>
            <li>
              **Play Your Specials Early**: If you have special cards, use them
              strategically to gain an advantage.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Playing Too Fast**: Take your time to think through your plays
              rather than rushing.
            </li>
            <li>
              **Ignoring Card Counting**: Failing to keep track of cards can
              lead to poor strategic decisions.
            </li>
            <li>
              **Misunderstanding Rules**: Ensure everyone is on the same page
              regarding the rules before starting.
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
