import Link from "next/link";

export default function KingsAndAces() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Kings and Aces Rules
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Kings and Aces is to avoid being the player with
            the most penalties and to keep your drink in hand while playing
            against others.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used. Shuffle the deck thoroughly.
            </li>
            <li>Players sit in a circle with a drink ready for each player.</li>
            <li>
              Cards are placed face down in a stack in the center of the circle.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
          <p className="mb-4">
            Players take turns drawing cards from the center stack. Each card
            has a specific rule associated with it:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Ace:</strong> Everyone drinks.
            </li>
            <li>
              <strong>2:</strong> The player who draws can choose someone to
              drink.
            </li>
            <li>
              <strong>3:</strong> The player who draws drinks.
            </li>
            <li>
              <strong>4:</strong> All players must touch the floor; the last one
              drinks.
            </li>
            <li>
              <strong>5:</strong> The player who draws must tell a story. The
              others can interrupt; whoever interrupts must drink.
            </li>
            <li>
              <strong>6:</strong> All women drink.
            </li>
            <li>
              <strong>7:</strong> All men drink.
            </li>
            <li>
              <strong>8:</strong> The player can create a rule that everyone
              must follow for the rest of the game.
            </li>
            <li>
              <strong>9:</strong> The player who draws starts a rhyme; others
              must continue it. The first to fail drinks.
            </li>
            <li>
              <strong>10:</strong> The player can ask a trivia question. The
              wrong answers drink.
            </li>
            <li>
              <strong>Jack:</strong> The player can choose a new category; the
              first to fail drinks.
            </li>
            <li>
              <strong>Queen:</strong> The player must make a “question” rule for
              the rest of the game. Any player who fails to ask a question must
              drink.
            </li>
            <li>
              <strong>King:</strong> If it’s the first King drawn, the player
              can make a new rule. The second King drawn means everyone drinks,
              and the third King ends the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            The game continues until all cards have been drawn or until players
            decide to stop. The goal is to have fun and avoid accumulating too
            many drinks.
          </p>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Kings and Aces is a popular party drinking game that combines
            elements of traditional card games with drinking rules. It is often
            played in social settings, allowing players to interact while
            enjoying their drinks. The rules can vary widely depending on the
            group, making it a flexible and adaptable game.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Different Penalties:</strong> Players can customize
              drinking penalties based on their preferences.
            </li>
            <li>
              <strong>Additional Rules:</strong> Players can add more cards or
              create their own special rules for each card.
            </li>
            <li>
              <strong>Group Size:</strong> Adjust the number of cards drawn or
              the rules based on the number of players for a better experience.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Stay Engaged:</strong> Pay attention to other players and
              anticipate their actions to enjoy the game more.
            </li>
            <li>
              <strong>Drink Responsibly:</strong> Know your limits to keep the
              game fun and prevent overindulgence.
            </li>
            <li>
              <strong>Create Fun Rules:</strong> Use creativity when making new
              rules to keep the atmosphere lively and engaging.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Ignoring Rules:</strong> Forgetting the rules can lead to
              confusion; clarify them before starting the game.
            </li>
            <li>
              <strong>Overindulging:</strong> Players should be aware of their
              limits to maintain a fun and safe atmosphere.
            </li>
            <li>
              <strong>Not Engaging with Others:</strong> A lack of interaction
              can make the game less enjoyable; encourage everyone to
              participate.
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
