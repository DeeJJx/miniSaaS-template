import Link from "next/link";

export default function President() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">President Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of President is to be the first player to get rid of
            all your cards, with the aim of becoming the President for the next
            round while avoiding being the Asshole.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The game is played with a standard 52-card deck and can
              accommodate 4 to 8 players.
            </li>
            <li>
              Players are dealt an equal number of cards, and the player with
              the lowest card starts the first round.
            </li>
            <li>
              Players must play cards that are higher than the previous cards
              played; you can play one or more cards of the same rank.
            </li>
            <li>
              If a player cannot play a higher card, they must pass their turn.
            </li>
            <li>
              The round continues until all players have passed, at which point
              the last player to play starts the next round.
            </li>
            <li>
              The first player to get rid of all their cards becomes the
              President, the second player becomes the Vice President, and so
              on, while the last player becomes the Asshole.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            President is a popular card game that originated in the United
            States, known for its social and strategic elements. It often serves
            as a party game, encouraging interaction and banter among players.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Different Titles**: The game is known by various names,
              including "Asshole," "Scum," and "Capitalism." Each name might
              come with slight rule variations.
            </li>
            <li>
              **Special Cards**: Some versions assign special powers to certain
              cards, like 2s being wild or allowing a player to skip others.
            </li>
            <li>
              **Multiple Decks**: For larger groups, multiple decks can be
              combined to accommodate more players.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Hold High Cards**: Save your high cards for critical moments to
              ensure you can take control of the game.
            </li>
            <li>
              **Watch Your Opponents**: Pay attention to the cards played by
              others to anticipate their strategies and play accordingly.
            </li>
            <li>
              **Play Lower Cards Strategically**: Use lower cards when you can
              force other players to pass, giving you a chance to lead the next
              round.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Playing Too Quickly**: Take your time to evaluate your options
              and make the best move rather than rushing.
            </li>
            <li>
              **Failing to Pass Wisely**: Not passing at the right moments can
              lead to being stuck with high cards when the round ends.
            </li>
            <li>
              **Ignoring Positions**: Failing to consider your position in
              relation to the President and Asshole can impact your strategy
              significantly.
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
