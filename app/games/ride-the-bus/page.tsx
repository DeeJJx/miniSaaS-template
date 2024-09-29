import Link from "next/link";

export default function RideTheBus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Ride the Bus Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Ride the Bus is to successfully guess the cards
            drawn from the deck to avoid drinking penalties while trying to keep
            your teammates from completing their bus.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used, and players sit in a circle.
            </li>
            <li>
              The game consists of multiple rounds, where players will draw
              cards and make guesses.
            </li>
            <li>
              Designate a dealer to manage the card deck and draw cards for
              players.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
          <p className="mb-4">Ride the Bus is played in four stages:</p>

          <h3 className="card-title text-xl font-bold">
            Stage 1: The Guessing Game
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              The dealer draws a card from the deck and shows it to the player.
            </li>
            <li>
              The player must guess whether the next card will be higher or
              lower than the card drawn.
            </li>
            <li>
              If the guess is correct, the player moves on; if incorrect, they
              must drink and continue guessing.
            </li>
          </ul>

          <h3 className="card-title text-xl font-bold">Stage 2: The Bus</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              If a player correctly guesses three cards in a row, they are safe
              from drinking.
            </li>
            <li>
              If a player fails to guess correctly three times in a row, they
              have to drink and are considered to be “on the bus.”
            </li>
          </ul>

          <h3 className="card-title text-xl font-bold">
            Stage 3: The Final Card
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              After the guessing game, the player who is “on the bus” must draw
              five cards from the deck in a row.
            </li>
            <li>
              They must guess the color (red or black) of each card drawn.
            </li>
            <li>
              If they guess incorrectly, they drink for each incorrect guess. If
              they guess correctly, they can keep their place in the game.
            </li>
          </ul>

          <h3 className="card-title text-xl font-bold">
            Stage 4: The End of the Game
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              The game ends when all players have had a turn, or a predetermined
              number of rounds have been completed.
            </li>
            <li>
              The player who avoided the most drinking penalties and kept their
              team from completing their bus wins the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            The winner is the player who successfully avoids the most penalties
            and outlasts others in the guessing rounds. The game focuses on fun,
            and there is no formal scoring system.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Team Play:</strong> Players can split into teams, with
              team members helping each other to avoid penalties.
            </li>
            <li>
              <strong>Drink Level:</strong> Assign different drinking penalties
              based on the card drawn (e.g., face cards equal more drinks).
            </li>
            <li>
              <strong>Wild Cards:</strong> Introduce wild cards (like Jokers)
              that allow players to skip a round or change the game rules
              temporarily.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Card Counting:</strong> Keep track of the cards that have
              been played to improve your guessing odds.
            </li>
            <li>
              <strong>Bluffing:</strong> Use deceptive tactics to throw off
              other players while guessing their cards.
            </li>
            <li>
              <strong>Focus:</strong> Stay attentive to the game's pace and the
              cards being drawn to minimize mistakes.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Overthinking:</strong> Players often hesitate too long on
              guesses, which can lead to penalties.
            </li>
            <li>
              <strong>Ignoring Rules:</strong> Not paying attention to the
              specific variations or rules agreed upon by the group can cause
              confusion.
            </li>
            <li>
              <strong>Not Keeping Track:</strong> Failing to remember previously
              drawn cards can lead to poor guessing choices.
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
