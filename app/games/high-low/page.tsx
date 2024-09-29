import Link from "next/link";

export default function HighLow() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">High-Low Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of High-Low is to predict whether the next card drawn
            from the deck will be higher or lower than the current card. Players
            aim to successfully guess the outcome and avoid drinking penalties.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used. Shuffle the deck before starting
              the game.
            </li>
            <li>
              Players sit in a circle or around a table where the deck can be
              easily accessed.
            </li>
            <li>Each player should have their own drink ready for the game.</li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
          <p className="mb-4">
            The game starts with a player revealing the top card of the deck.
            Players then take turns guessing whether the next card drawn will be
            higher or lower in value. If a player guesses correctly, they
            continue; if they guess incorrectly, they must take a drink and the
            game resets with a new card.
          </p>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            There is no formal winner in High-Low; the game is meant for
            entertainment and social interaction. Players can play as long as
            they want, and the fun continues until they decide to stop or until
            the deck is exhausted.
          </p>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            High-Low is a classic drinking game that has roots in traditional
            card games. Its simplicity and the thrill of guessing make it a
            popular choice at parties and gatherings. While the game is often
            played casually, it has gained popularity in various drinking game
            communities for its straightforward mechanics and social
            interaction.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Double or Nothing:</strong> After a correct guess, players
              can choose to bet their winnings by guessing again, doubling their
              drink if they get it right.
            </li>
            <li>
              <strong>Wild Cards:</strong> Introduce jokers as wild cards,
              allowing players to choose higher or lower when drawn.
            </li>
            <li>
              <strong>Color Guessing:</strong> Players can also guess the color
              (red or black) of the next card, adding another layer of
              prediction.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Card Counting:</strong> Keep track of the cards that have
              been drawn to improve your guesses.
            </li>
            <li>
              <strong>Player Psychology:</strong> Pay attention to other
              players' patterns and tendencies to help guide your decisions.
            </li>
            <li>
              <strong>Risk Assessment:</strong> Consider the cards remaining in
              the deck when making guesses to avoid unnecessary drinks.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Ignoring Odds:</strong> Not considering the probability of
              cards remaining can lead to frequent incorrect guesses.
            </li>
            <li>
              <strong>Rushing Decisions:</strong> Taking too long to make
              guesses can disrupt the flow of the game and affect enjoyment.
            </li>
            <li>
              <strong>Overindulging:</strong> Players should be cautious with
              their drinking to maintain a fun and safe environment.
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
