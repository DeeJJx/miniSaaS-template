import Link from "next/link";

export default function RedOrBlack() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Red or Black Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Red or Black is to guess whether the next card
            drawn from the deck will be red (hearts or diamonds) or black (clubs
            or spades). Players aim to make correct predictions and avoid
            drinking penalties.
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
            red or black. If a player guesses correctly, they continue; if they
            guess incorrectly, they must take a drink, and the game resets with
            a new card.
          </p>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            There is no formal winner in Red or Black; the game is meant for
            entertainment and social interaction. Players can play as long as
            they want, and the fun continues until they decide to stop or until
            the deck is exhausted.
          </p>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Red or Black is a straightforward drinking game that has been played
            at parties and social gatherings for years. Its simplicity makes it
            a popular choice for those looking to engage with friends while
            adding a competitive element. The game's basic premise is derived
            from traditional card games, emphasizing luck and chance.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Higher Stakes:</strong> Players can double their drinks or
              add penalties for incorrect guesses, increasing the game's
              intensity.
            </li>
            <li>
              <strong>Color Patterns:</strong> After correctly guessing, players
              can attempt to predict the color of the next card drawn for
              additional rewards.
            </li>
            <li>
              <strong>Timed Rounds:</strong> Implement a timer for guesses to
              keep the game moving quickly and maintain excitement.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Observing Patterns:</strong> Keep track of the cards drawn
              to make more informed guesses about the remaining cards.
            </li>
            <li>
              <strong>Card Counting:</strong> Knowing which cards are still in
              play can give players an edge in guessing correctly.
            </li>
            <li>
              <strong>Staying Calm:</strong> Maintaining composure can help
              players make more rational guesses, especially under pressure.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Ignoring Odds:</strong> Players should consider the
              probability of cards remaining instead of guessing randomly.
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
