import Link from "next/link";
import Head from "next/head";

export default function DrinkingWar() {
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Drinking War",
    numberOfPlayers: "2+",
    gameCategory: "Card Game",
    description:
      "Drinking War is a fun card game for 2 or more players based on the classic game of War, but with added drinking rules to make it a party game.",
    url: "https://cardmaster.dev/games/drinking-war",
  };

  return (
    <>
      <Head>
        <title>Drinking War - A Fun Card Game for 2+ Players</title>
        <meta
          name="description"
          content="Learn how to play Drinking War, a fun party card game for 2 or more players. Read the rules, strategies, and variations."
        />

        {/* Inject JSON-LD structured data into the head */}
        <script type="application/ld+json">{JSON.stringify(gameSchema)}</script>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
        <div className="text-center text-4xl font-bold mb-8">
          Drinking War Rules
        </div>

        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Objective</h2>
            <p className="mb-4">
              The objective of Drinking War is to win all the cards from your
              opponent by playing higher cards and forcing them to drink when
              they lose a round.
            </p>

            <h2 className="card-title text-2xl font-bold">Setup</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                A standard 52-card deck is used. Shuffle the deck thoroughly.
              </li>
              <li>
                Players sit across from each other, with half the deck dealt to
                each player, face down.
              </li>
              <li>
                Each player should have their drink ready to consume when they
                lose a round.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
            <p className="mb-4">
              Players simultaneously flip the top card of their deck. The player
              with the higher card wins the round and takes both cards, placing
              them at the bottom of their pile. If the cards are of equal rank,
              a "war" occurs, where both players place three cards face down and
              then flip another card. The player with the higher card takes all
              the cards. If there's another tie, the process repeats.
            </p>

            <h2 className="card-title text-2xl font-bold">
              Losing and Drinking
            </h2>
            <p className="mb-4">
              The losing player must take a drink for each card they lose in
              that round. This can escalate quickly, especially during wars,
              making for a lively game.
            </p>

            <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
            <p className="mb-4">
              The game ends when one player has all the cards or when players
              decide to stop. The player with the most cards at the end is
              declared the winner.
            </p>

            <h2 className="card-title text-2xl font-bold">History</h2>
            <p className="mb-4">
              Drinking War is a variation of the classic card game War, where
              the competitive spirit of the original game is amplified with the
              addition of drinking penalties. It is popular at parties and
              social gatherings, providing both entertainment and a
              light-hearted way to enjoy drinks with friends.
            </p>

            <h2 className="card-title text-2xl font-bold">Variations</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Multiple Decks:</strong> For larger groups, consider
                using multiple decks to increase the number of cards in play.
              </li>
              <li>
                <strong>Drinking Penalties:</strong> Set specific penalties for
                losing cards (e.g., 1 drink per card lost or a set amount for a
                "war").
              </li>
              <li>
                <strong>Speed War:</strong> Players must flip their cards within
                a set time limit to keep the game moving quickly.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Strategies</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Card Counting:</strong> While the deck is randomized,
                being aware of cards played can give a psychological edge.
              </li>
              <li>
                <strong>Stay Engaged:</strong> Focus on the game to react
                quickly during "wars," as this can impact how many cards you
                lose.
              </li>
              <li>
                <strong>Drink Responsibly:</strong> Know your limits and pace
                yourself to maintain enjoyment without overindulging.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Not Paying Attention:</strong> Failing to focus can
                result in missed rounds or mistakes during "wars."
              </li>
              <li>
                <strong>Ignoring Drinking Limits:</strong> Be mindful of alcohol
                consumption to avoid overindulging and ruining the fun.
              </li>
              <li>
                <strong>Speeding Through Rounds:</strong> While keeping the game
                moving is important, rushing can lead to mistakes and less
                enjoyment.
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
    </>
  );
}
