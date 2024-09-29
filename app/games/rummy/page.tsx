import Link from "next/link";
import Head from "next/head";

export default function Rummy() {
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Rummy",
    numberOfPlayers: "2-6",
    gameCategory: "Card Game",
    description:
      "Rummy is a fun card game for 2 to 6 players using a standard deck of cards. The objective of the game is to form sets and sequences of cards.",
    url: "https://cardmaster.dev/games/rummy",
  };

  return (
    <>
      <Head>
        <title>Rummy - A Card Game for 2-6 Players</title>
        <meta
          name="description"
          content="Learn how to play Rummy, a fun card game for 2-6 players. Read the rules and strategies."
        />

        {/* Inject JSON-LD structured data into the head */}
        <script type="application/ld+json">{JSON.stringify(gameSchema)}</script>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
        <div className="text-center text-4xl font-bold mb-8">
          Rummy Rules and Strategies
        </div>

        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Objective Section */}
            <h2 className="card-title text-2xl font-bold">Objective</h2>
            <p className="mb-4">
              The objective of Rummy is to form sets or runs with your cards and
              be the first to get rid of all your cards by melding them on the
              table.
            </p>

            {/* Game History and Origins */}
            <h2 className="card-title text-2xl font-bold">
              History and Origins
            </h2>
            <p className="mb-4">
              Rummy has a long history, believed to have evolved from various
              card games in the early 19th century. It is derived from the Latin
              game of "Rum," and has since diversified into many variations
              worldwide. Its popularity surged in the 20th century, becoming a
              staple in social gatherings and family game nights.
            </p>

            {/* Basic Rules */}
            <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Rummy is typically played with 2-6 players using a standard
                52-card deck. If more players are involved, multiple decks may
                be used.
              </li>
              <li>
                The aim is to form sets (three or four cards of the same rank)
                or runs (three or more consecutive cards of the same suit).
              </li>
              <li>
                Aces can be high or low but cannot "wrap around" (e.g., K-A-2 is
                not a valid run).
              </li>
            </ul>

            {/* Gameplay */}
            <h2 className="card-title text-2xl font-bold">Gameplay</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Players are dealt a specific number of cards depending on the
                number of players (typically 10 cards each for 2-4 players).
              </li>
              <li>
                The remaining cards form a draw pile, and the top card is placed
                face-up to start the discard pile.
              </li>
              <li>
                On their turn, players draw a card from either the draw pile or
                the discard pile and then discard one card.
              </li>
              <li>
                The goal is to create valid sets or runs and lay them down on
                the table.
              </li>
            </ul>

            {/* Melding and Going Out */}
            <h2 className="card-title text-2xl font-bold">
              Melding and Going Out
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Players can lay down valid sets or runs on their turn or add to
                existing sets/runs on the table.
              </li>
              <li>
                The round ends when a player gets rid of all their cards by
                either melding or discarding their last card.
              </li>
              <li>
                In some variations, a player must end with a discard; in others,
                they can go out without discarding.
              </li>
            </ul>

            {/* Scoring */}
            <h2 className="card-title text-2xl font-bold">Scoring</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The player who goes out first scores points based on the
                remaining cards in the other players’ hands.
              </li>
              <li>
                Face cards (K, Q, J) are worth 10 points, aces are worth 1
                point, and numbered cards are worth their face value.
              </li>
              <li>
                The game continues for a predetermined number of rounds or until
                a player reaches a target score (e.g., 500 points).
              </li>
            </ul>

            {/* Variations of Rummy */}
            <h2 className="card-title text-2xl font-bold">
              Variations of Rummy
            </h2>
            <p className="mb-4">
              Rummy comes in various forms, each with unique rules:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Gin Rummy:</strong> A two-player version where players
                aim to form sets and runs before their opponent.
              </li>
              <li>
                <strong>Indian Rummy:</strong> Played with two decks and
                includes more complex melding rules and jokers.
              </li>
              <li>
                <strong>Canasta:</strong> A variant that involves forming melds
                of seven cards and can be played with multiple decks.
              </li>
            </ul>

            {/* Strategies and Tips */}
            <h2 className="card-title text-2xl font-bold">
              Strategies and Tips for Rummy
            </h2>
            <p className="mb-4">
              Here are some strategies to enhance your Rummy gameplay:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Keep Track of Discards:</strong> Pay attention to what
                cards other players discard to anticipate their melds.
              </li>
              <li>
                <strong>Hold onto Wild Cards:</strong> Wild cards (jokers) can
                be game-changers; use them wisely to complete your sets or runs.
              </li>
              <li>
                <strong>Be Flexible:</strong> Adapt your strategy based on the
                cards you draw and what others are laying down.
              </li>
            </ul>

            {/* Common Mistakes */}
            <h2 className="card-title text-2xl font-bold">
              Common Mistakes to Avoid
            </h2>
            <p className="mb-4">
              Here are some mistakes that players often make:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Not Observing Opponents:</strong> Failing to keep track
                of other players’ actions can lead to missed opportunities.
              </li>
              <li>
                <strong>Overvaluing High Cards:</strong> Holding onto high cards
                can be detrimental; focus on completing melds instead.
              </li>
              <li>
                <strong>Discarding Valuable Cards:</strong> Be cautious when
                discarding; a card that seems unimportant may help your
                opponents.
              </li>
            </ul>

            {/* Back to Home Button */}
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
