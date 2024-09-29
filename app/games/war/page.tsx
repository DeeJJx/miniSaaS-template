import Link from "next/link";

export default function War() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">War Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of War is to win all the cards by having the higher
            card in each round of play.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              War is typically played with 2 players using a standard 52-card
              deck.
            </li>
            <li>
              The deck is shuffled and split evenly between the players, with
              each player keeping their cards face down.
            </li>
            <li>
              Both players reveal the top card of their deck simultaneously. The
              player with the higher card wins both cards and places them at the
              bottom of their deck.
            </li>
            <li>
              If the cards are of equal rank, a "war" occurs: each player places
              three cards face down and then reveals a fourth card. The higher
              fourth card wins all the cards on the table.
            </li>
            <li>
              The game continues until one player has all the cards or until
              players decide to end the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            War is a simple and traditional card game that has been played for
            centuries. Its roots can be traced back to several ancient games,
            and it remains popular due to its straightforward rules and reliance
            on luck, making it accessible to players of all ages.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Multiple Decks**: In larger groups, two or more decks can be
              combined to increase the number of cards in play.
            </li>
            <li>
              **War with Jokers**: Jokers can be added as wild cards, making
              them the highest card in the game.
            </li>
            <li>
              **Team War**: Players can form teams, and the game can be played
              with teams competing against each other to win all the cards.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Save High Cards**: Try to keep your high cards for critical
              moments to increase your chances of winning important rounds.
            </li>
            <li>
              **Monitor Opponent's Cards**: Pay attention to the cards your
              opponent wins to gauge the strength of their deck.
            </li>
            <li>
              **Keep Calm During Wars**: Stay composed during ties to make quick
              decisions and maintain focus.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Not Following Up**: Players sometimes forget to collect and
              place cards after winning a round.
            </li>
            <li>
              **Getting Too Competitive**: While it's fun to win, remember that
              War is largely based on luck, and frustration can detract from the
              enjoyment.
            </li>
            <li>
              **Neglecting Strategy**: Players may become overly reliant on luck
              and forget to apply any strategies during gameplay.
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
