import Link from "next/link";

export default function KingsCup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Kings Cup Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Kings Cup is to have fun, socialize, and drink
            while following the game's rules and completing the challenges
            associated with the drawn cards.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used, along with a large cup placed in
              the center of the table.
            </li>
            <li>
              Players sit in a circle around the cup, and the deck is shuffled
              and spread out face down in a circle around the cup.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
          <p className="mb-4">
            Players take turns drawing cards from the circle. Each card has
            specific rules associated with it, typically requiring players to
            perform an action, make a rule, or drink.
          </p>

          <h2 className="card-title text-2xl font-bold">Card Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>2:</strong> You - Choose someone to drink.
            </li>
            <li>
              <strong>3:</strong> Me - The player who drew the card drinks.
            </li>
            <li>
              <strong>4:</strong> Floor - Everyone must touch the floor; the
              last one to do so drinks.
            </li>
            <li>
              <strong>5:</strong> Guys - All guys drink.
            </li>
            <li>
              <strong>6:</strong> Chicks - All girls drink.
            </li>
            <li>
              <strong>7:</strong> Heaven - Raise your hand; the last one to do
              so drinks.
            </li>
            <li>
              <strong>8:</strong> Mate - Choose a drinking buddy who drinks
              whenever you drink.
            </li>
            <li>
              <strong>9:</strong> Rhyme - Say a word; the next player must rhyme
              it. If they fail, they drink.
            </li>
            <li>
              <strong>10:</strong> Categories - Choose a category (e.g., types
              of beer); players take turns naming something in that category. If
              someone fails, they drink.
            </li>
            <li>
              <strong>J:</strong> Never Have I Ever - State something you've
              never done. Anyone who has done it drinks.
            </li>
            <li>
              <strong>Q:</strong> Question Master - If you ask a question and
              someone answers, they must drink. This lasts until someone else
              draws a Q.
            </li>
            <li>
              <strong>K:</strong> King - Pour some of your drink into the Kings
              Cup. The player who draws the fourth King drinks from the Kings
              Cup.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            The game ends when the last King is drawn or when players decide to
            stop. There is no formal winner; the aim is to enjoy the game and
            have fun with friends.
          </p>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Kings Cup, also known as Circle of Death, is believed to have
            originated in the early 1990s and has become a popular drinking game
            at parties and gatherings. Its origins are somewhat murky, but it is
            thought to be a variation of other card-based drinking games that
            incorporate social interaction and chance. Over the years, different
            regions have added their own twists to the rules, making it a
            versatile game that adapts to various party settings.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>House Rules:</strong> Players can create their own rules
              for specific cards, adding personal touches to the game.
            </li>
            <li>
              <strong>Speed Kings:</strong> Players must draw cards quickly and
              perform the action without hesitation, leading to more drinking
              penalties.
            </li>
            <li>
              <strong>Silent Kings:</strong> Players can only communicate
              through gestures during the game, which can lead to humorous
              situations and misinterpretations.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Know the Rules:</strong> Familiarize yourself with the
              card rules to avoid unnecessary drinking penalties.
            </li>
            <li>
              <strong>Socialize:</strong> Engage with other players to create a
              fun atmosphere, making it more enjoyable and less competitive.
            </li>
            <li>
              <strong>Mind Your Drink:</strong> Manage your drink level wisely
              to stay in the game longer while keeping the fun alive.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Not Paying Attention:</strong> Failing to follow the game
              can lead to missing rules and getting penalties.
            </li>
            <li>
              <strong>Overcomplicating Rules:</strong> Too many house rules can
              confuse players and diminish the fun.
            </li>
            <li>
              <strong>Being Too Serious:</strong> Kings Cup is meant to be a fun
              game; taking it too seriously can ruin the experience for
              everyone.
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
